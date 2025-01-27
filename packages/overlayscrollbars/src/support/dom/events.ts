import { isUndefined } from '../utils/types';
import { each, runEachAndClear } from '../utils/array';
import { bind } from '../utils/function';
import { wnd } from '../utils/alias';
import { noop } from '../utils/noop';
import { keys } from '../utils';

let passiveEventsSupport: boolean | undefined;
const passiveStr = 'passive';
const supportPassiveEvents = (): boolean => {
  if (isUndefined(passiveEventsSupport)) {
    passiveEventsSupport = false;
    try {
      /* eslint-disable */
      // @ts-ignore
      wnd.addEventListener(
        passiveStr,
        noop,
        Object.defineProperty({}, passiveStr, {
          get() {
            passiveEventsSupport = true;
          },
        })
      );
      /* eslint-enable */
    } catch {}
  }
  return passiveEventsSupport;
};
const splitEventNames = (eventNames: string) => eventNames.split(' ');

export interface EventListenerOptions {
  _capture?: boolean;
  _passive?: boolean;
  _once?: boolean;
}

export type EventListenerMap = {
  [eventNames: string]: (event: Event) => any;
};

/**
 * Removes the passed event listener for the passed event names with the passed options.
 * @param target The element from which the listener shall be removed.
 * @param eventNames The eventsnames for which the listener shall be removed.
 * @param listener The listener which shall be removed.
 * @param capture The options of the removed listener.
 */
export const removeEventListener = <T extends Event = Event>(
  target: EventTarget,
  eventNames: string,
  listener: (event: T) => any,
  capture?: boolean
): void => {
  each(splitEventNames(eventNames), (eventName) => {
    target.removeEventListener(eventName, listener as EventListener, capture);
  });
};

/**
 * Adds the passed event listener for the passed event names with the passed options.
 * @param target The element to which the listener shall be added.
 * @param eventNames The eventsnames for which the listener shall be called.
 * @param listener The listener which is called on the eventnames.
 * @param options The options of the added listener.
 */
export const addEventListener = <T extends Event = Event>(
  target: EventTarget,
  eventNames: string,
  listener: (event: T) => any,
  options?: EventListenerOptions
): (() => void) => {
  const doSupportPassiveEvents = supportPassiveEvents();
  const passive = (doSupportPassiveEvents && options && options._passive) ?? doSupportPassiveEvents;
  const capture = (options && options._capture) || false;
  const once = (options && options._once) || false;
  const nativeOptions: AddEventListenerOptions | boolean = doSupportPassiveEvents
    ? {
        passive,
        capture,
      }
    : capture;

  return bind(
    runEachAndClear,
    splitEventNames(eventNames).map((eventName) => {
      const finalListener = (
        once
          ? (evt: T) => {
              removeEventListener(target, eventName, finalListener, capture);
              listener(evt);
            }
          : listener
      ) as EventListener;

      target.addEventListener(eventName, finalListener, nativeOptions);
      return bind(removeEventListener, target, eventName, finalListener, capture);
    })
  );
};

/**
 * Adds the passed event listeners for the passed event names with the passed options.
 * @param target The element to which the listener shall be added.
 * @param eventListenerMap A map which descirbes the event names and event listeners to be added.
 * @param options The options of the added listeners.
 */
export const addEventListeners = (
  target: EventTarget,
  eventListenerMap: EventListenerMap,
  options?: EventListenerOptions
): (() => void) =>
  bind(
    runEachAndClear,
    keys(eventListenerMap).map((eventNames) =>
      addEventListener(target, eventNames, eventListenerMap[eventNames], options)
    )
  );

/**
 * Shorthand for the stopPropagation event Method.
 * @param evt The event of which the stopPropagation method shall be called.
 */
export const stopPropagation = (evt: Event): void => evt.stopPropagation();

/**
 * Shorthand for the preventDefault event Method.
 * @param evt The event of which the preventDefault method shall be called.
 */
export const preventDefault = (evt: Event): void => evt.preventDefault();

/**
 * Shorthand for the stopPropagation and preventDefault event Method.
 * @param evt The event of which the stopPropagation and preventDefault methods shall be called.
 */
export const stopAndPrevent = (evt: Event): void =>
  (stopPropagation(evt) as undefined) || (preventDefault(evt) as undefined);
