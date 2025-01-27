import { bind, noop, addEventListener, push, runEachAndClear, selfClearTimeout } from '~/support';
import { getEnvironment } from '~/environment';
import {
  classNameScrollbarThemeNone,
  classNameScrollbarVisible,
  classNameScrollbarUnusable,
  classNameScrollbarCornerless,
  classNameScrollbarAutoHideHidden,
  classNameScrollbarHandleInteractive,
  classNameScrollbarTrackInteractive,
  classNameScrollbarRtl,
  classNameScrollbarAutoHide,
} from '~/classnames';
import { type ReadonlyOptions } from '~/options';
import type { ScrollbarsSetupElementsObj } from './scrollbarsSetup.elements';
import type {
  ObserversSetupState,
  ObserversSetupUpdateHints,
  Setup,
  SetupUpdateInfo,
  StructureSetupState,
  StructureSetupUpdateHints,
} from '~/setups';
import type { InitializationTarget } from '~/initialization';
import type { OverflowStyle } from '~/typings';
import type { StructureSetupElementsObj } from '../structureSetup/structureSetup.elements';
import { createScrollbarsSetupElements } from './scrollbarsSetup.elements';
import { createScrollbarsSetupEvents } from './scrollbarsSetup.events';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ScrollbarsSetupState {}

export interface ScrollbarsSetupUpdateInfo extends SetupUpdateInfo {
  _observersUpdateHints?: ObserversSetupUpdateHints;
  _structureUpdateHints?: StructureSetupUpdateHints;
}

export type ScrollbarsSetup = [
  ...Setup<ScrollbarsSetupUpdateInfo, ScrollbarsSetupState, void>,
  /** The elements created by the scrollbars setup. */
  ScrollbarsSetupElementsObj
];

export const createScrollbarsSetup = (
  target: InitializationTarget,
  options: ReadonlyOptions,
  observersSetupState: ObserversSetupState,
  structureSetupState: StructureSetupState,
  structureSetupElements: StructureSetupElementsObj,
  onScroll: (event: Event) => void
): ScrollbarsSetup => {
  let autoHideIsMove: boolean | undefined;
  let autoHideIsLeave: boolean | undefined;
  let autoHideNotNever: boolean | undefined;
  let mouseInHost: boolean | undefined;
  let prevTheme: string | null | undefined;
  let instanceAutoHideSuspendScrollDestroyFn = noop;
  let instanceAutoHideDelay = 0;

  const [requestMouseMoveAnimationFrame, cancelMouseMoveAnimationFrame] = selfClearTimeout();
  const [requestScrollAnimationFrame, cancelScrollAnimationFrame] = selfClearTimeout();
  const [scrollTimeout, clearScrollTimeout] = selfClearTimeout(100);
  const [auotHideMoveTimeout, clearAutoHideTimeout] = selfClearTimeout(100);
  const [autoHideSuspendTimeout, clearAutoHideSuspendTimeout] = selfClearTimeout(100);
  const [auotHideTimeout, clearAutoTimeout] = selfClearTimeout(() => instanceAutoHideDelay);
  const [elements, appendElements] = createScrollbarsSetupElements(
    target,
    structureSetupElements,
    structureSetupState,
    createScrollbarsSetupEvents(options, structureSetupElements, structureSetupState)
  );
  const { _host, _scrollEventElement, _isBody } = structureSetupElements;
  const {
    _scrollbarsAddRemoveClass,
    _refreshScrollbarsHandleLength,
    _refreshScrollbarsHandleOffset,
    _refreshScrollbarsScrollbarOffset,
  } = elements;
  const manageAutoHideSuspension = (add: boolean) => {
    _scrollbarsAddRemoveClass(classNameScrollbarAutoHide, add, true);
    _scrollbarsAddRemoveClass(classNameScrollbarAutoHide, add, false);
  };
  const manageScrollbarsAutoHide = (removeAutoHide: boolean, delayless?: boolean) => {
    clearAutoTimeout();
    if (removeAutoHide) {
      _scrollbarsAddRemoveClass(classNameScrollbarAutoHideHidden);
    } else {
      const hide = bind(_scrollbarsAddRemoveClass, classNameScrollbarAutoHideHidden, true);
      if (instanceAutoHideDelay > 0 && !delayless) {
        auotHideTimeout(hide);
      } else {
        hide();
      }
    }
  };

  // needed to not fire unnecessary operations for pointer events on safari which will cause side effects: https://github.com/KingSora/OverlayScrollbars/issues/560
  const isHoverablePointerType = (event: PointerEvent) => event.pointerType === 'mouse';

  const onHostMouseEnter = (event: PointerEvent) => {
    if (isHoverablePointerType(event)) {
      mouseInHost = autoHideIsLeave;
      mouseInHost && manageScrollbarsAutoHide(true);
    }
  };

  const destroyFns: (() => void)[] = [
    clearScrollTimeout,
    clearAutoTimeout,
    clearAutoHideTimeout,
    clearAutoHideSuspendTimeout,
    cancelScrollAnimationFrame,
    cancelMouseMoveAnimationFrame,
    () => instanceAutoHideSuspendScrollDestroyFn(),

    addEventListener(_host, 'pointerover', onHostMouseEnter, { _once: true }),
    addEventListener(_host, 'pointerenter', onHostMouseEnter),
    addEventListener(_host, 'pointerleave', (event: PointerEvent) => {
      if (isHoverablePointerType(event)) {
        mouseInHost = false;
        autoHideIsLeave && manageScrollbarsAutoHide(false);
      }
    }),
    addEventListener(_host, 'pointermove', (event: PointerEvent) => {
      isHoverablePointerType(event) &&
        autoHideIsMove &&
        requestMouseMoveAnimationFrame(() => {
          clearScrollTimeout();
          manageScrollbarsAutoHide(true);
          auotHideMoveTimeout(() => {
            autoHideIsMove && manageScrollbarsAutoHide(false);
          });
        });
    }),
    addEventListener(_scrollEventElement, 'scroll', (event) => {
      requestScrollAnimationFrame(() => {
        _refreshScrollbarsHandleOffset();

        autoHideNotNever && manageScrollbarsAutoHide(true);
        scrollTimeout(() => {
          autoHideNotNever && !mouseInHost && manageScrollbarsAutoHide(false);
        });
      });

      onScroll(event);

      _refreshScrollbarsScrollbarOffset();
    }),
  ];

  return [
    () => bind(runEachAndClear, push(destroyFns, appendElements())),
    ({ _checkOption, _force, _observersUpdateHints, _structureUpdateHints }) => {
      const { _overflowEdgeChanged, _overflowAmountChanged, _overflowStyleChanged } =
        _structureUpdateHints || {};
      const { _directionChanged, _appear } = _observersUpdateHints || {};
      const { _directionIsRTL } = observersSetupState;
      const { _nativeScrollbarsOverlaid } = getEnvironment();
      const { _overflowAmount, _overflowStyle, _hasOverflow } = structureSetupState;
      const [showNativeOverlaidScrollbarsOption, showNativeOverlaidScrollbarsChanged] =
        _checkOption('showNativeOverlaidScrollbars');
      const [theme, themeChanged] = _checkOption('scrollbars.theme');
      const [visibility, visibilityChanged] = _checkOption('scrollbars.visibility');
      const [autoHide, autoHideChanged] = _checkOption('scrollbars.autoHide');
      const [autoHideSuspend, autoHideSuspendChanged] = _checkOption('scrollbars.autoHideSuspend');
      const [autoHideDelay] = _checkOption('scrollbars.autoHideDelay');
      const [dragScroll, dragScrollChanged] = _checkOption('scrollbars.dragScroll');
      const [clickScroll, clickScrollChanged] = _checkOption('scrollbars.clickScroll');
      const trulyAppeared = _appear && !_force;
      const hasOverflow = _hasOverflow.x || _hasOverflow.y;
      const updateScrollbars =
        _overflowEdgeChanged || _overflowAmountChanged || _directionChanged || _force;
      const updateVisibility = _overflowStyleChanged || visibilityChanged;
      const showNativeOverlaidScrollbars =
        showNativeOverlaidScrollbarsOption &&
        _nativeScrollbarsOverlaid.x &&
        _nativeScrollbarsOverlaid.y;

      const setScrollbarVisibility = (overflowStyle: OverflowStyle, isHorizontal: boolean) => {
        const isVisible =
          visibility === 'visible' || (visibility === 'auto' && overflowStyle === 'scroll');
        _scrollbarsAddRemoveClass(classNameScrollbarVisible, isVisible, isHorizontal);
        return isVisible;
      };

      instanceAutoHideDelay = autoHideDelay;

      if (trulyAppeared) {
        if (autoHideSuspend && hasOverflow) {
          manageAutoHideSuspension(false);
          instanceAutoHideSuspendScrollDestroyFn();
          autoHideSuspendTimeout(() => {
            instanceAutoHideSuspendScrollDestroyFn = addEventListener(
              _scrollEventElement,
              'scroll',
              bind(manageAutoHideSuspension, true),
              {
                _once: true,
              }
            );
          });
        } else {
          manageAutoHideSuspension(true);
        }
      }

      if (showNativeOverlaidScrollbarsChanged) {
        _scrollbarsAddRemoveClass(classNameScrollbarThemeNone, showNativeOverlaidScrollbars);
      }

      if (themeChanged) {
        _scrollbarsAddRemoveClass(prevTheme);
        _scrollbarsAddRemoveClass(theme, true);

        prevTheme = theme;
      }

      if (autoHideSuspendChanged && !autoHideSuspend) {
        manageAutoHideSuspension(true);
      }

      if (autoHideChanged) {
        autoHideIsMove = autoHide === 'move';
        autoHideIsLeave = autoHide === 'leave';
        autoHideNotNever = autoHide !== 'never';
        manageScrollbarsAutoHide(!autoHideNotNever, true);
      }

      if (dragScrollChanged) {
        _scrollbarsAddRemoveClass(classNameScrollbarHandleInteractive, dragScroll);
      }

      if (clickScrollChanged) {
        _scrollbarsAddRemoveClass(classNameScrollbarTrackInteractive, clickScroll);
      }

      if (updateVisibility) {
        const xVisible = setScrollbarVisibility(_overflowStyle.x, true);
        const yVisible = setScrollbarVisibility(_overflowStyle.y, false);
        const hasCorner = xVisible && yVisible;

        _scrollbarsAddRemoveClass(classNameScrollbarCornerless, !hasCorner);
      }

      if (updateScrollbars) {
        // order is matter! length has to be refreshed before offset
        _refreshScrollbarsHandleLength();
        _refreshScrollbarsHandleOffset();
        _refreshScrollbarsScrollbarOffset();

        _scrollbarsAddRemoveClass(classNameScrollbarUnusable, !_overflowAmount.x, true);
        _scrollbarsAddRemoveClass(classNameScrollbarUnusable, !_overflowAmount.y, false);
        _scrollbarsAddRemoveClass(classNameScrollbarRtl, _directionIsRTL && !_isBody);
      }
    },
    {},
    elements,
  ];
};
