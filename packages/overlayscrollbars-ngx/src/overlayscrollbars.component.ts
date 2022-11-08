/* eslint-disable @typescript-eslint/consistent-type-imports */
import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  OnDestroy,
  AfterViewInit,
} from '@angular/core';
import { OverlayScrollbars } from 'overlayscrollbars';
import { OverlayScrollbarsDirective } from '~/overlayscrollbars.directive';
import type { PartialOptions, EventListeners, EventListenerMap } from 'overlayscrollbars';

const mergeEventListeners = (emits: EventListeners, events: EventListeners) =>
  (Object.keys(emits) as (keyof EventListeners)[]).reduce<EventListeners>(
    <N extends keyof EventListeners>(obj: EventListeners, name: N) => {
      const emitListener = emits[name];
      const eventListener = events[name];
      /* istanbul ignore next */
      obj[name] = [
        emitListener,
        ...(Array.isArray(eventListener) ? eventListener : [eventListener]).filter(Boolean),
      ];
      return obj;
    },
    {}
  );

@Component({
  selector: '[overlay-scrollbars-component]', // https://angular.io/guide/styleguide#component-selectors
  exportAs: 'overlayScrollbars',
  host: { 'data-overlayscrollbars': '' },
  template: `<div
    #content
    [overlayScrollbarsDirective]
    [options]="options"
    [events]="mergeEvents(events)"
  >
    <ng-content></ng-content>
  </div>`,
})
export class OverlayScrollbarsComponent implements OnDestroy, AfterViewInit {
  @Input('options')
  options?: PartialOptions | false | null;
  @Input('events')
  events?: EventListeners | false | null;

  @Output('osInitialized')
  onInitialized = new EventEmitter<EventListenerMap['initialized']>();
  @Output('osUpdated')
  onUpdated = new EventEmitter<EventListenerMap['updated']>();
  @Output('osDestroyed')
  onDestroyed = new EventEmitter<EventListenerMap['destroyed']>();
  @Output('osScroll')
  onScroll = new EventEmitter<EventListenerMap['scroll']>();

  @ViewChild('content')
  private contentRef?: ElementRef<HTMLDivElement>;
  @ViewChild('content', { read: OverlayScrollbarsDirective })
  private osDirective?: OverlayScrollbarsDirective;

  constructor(private targetRef: ElementRef<HTMLElement>) {}

  instance(): OverlayScrollbars | null {
    return this.osDirective!.instance();
  }

  element(): HTMLElement {
    return this.targetRef.nativeElement;
  }

  ngAfterViewInit() {
    const targetElm = this.element();
    const contentElm = this.contentRef!.nativeElement;

    /* istanbul ignore else */
    if (targetElm && contentElm) {
      this.osDirective!.initialize({
        target: targetElm,
        elements: {
          viewport: contentElm,
          content: contentElm,
        },
      });
    }
  }

  ngOnDestroy() {
    this.osDirective?.instance()!.destroy();
  }

  private mergeEvents(originalEvents: OverlayScrollbarsComponent['events']) {
    return mergeEventListeners(
      {
        initialized: (...args) => this.onInitialized.emit(args),
        updated: (...args) => this.onUpdated.emit(args),
        destroyed: (...args) => this.onDestroyed.emit(args),
        scroll: (...args) => this.onScroll.emit(args),
      },
      originalEvents || {}
    );
  }
}
