import {
  addClass,
  appendChildren,
  createDiv,
  getDirectionIsRTL,
  each,
  getTrasformTranslateValue,
  isArray,
  isBoolean,
  isEmptyArray,
  parent,
  push,
  removeClass,
  removeElements,
  runEachAndClear,
  scrollT,
  setT,
  style,
  bind,
  mathMax,
  getElmentScroll,
  inArray,
  strWidth,
  strHeight,
  concat,
  assignDeep,
} from '~/support';
import {
  classNameScrollbar,
  classNameScrollbarHorizontal,
  classNameScrollbarVertical,
  classNameScrollbarTrack,
  classNameScrollbarHandle,
  classNameScrollbarTransitionless,
  classNameScrollbarNoCssCustomProps,
} from '~/classnames';
import { getEnvironment } from '~/environment';
import { dynamicInitializationElement as generalDynamicInitializationElement } from '~/initialization';
import type {
  InitializationTarget,
  InitializationTargetElement,
  InitializationTargetObject,
} from '~/initialization';
import type { StructureSetupElementsObj } from '../structureSetup/structureSetup.elements';
import type { ScrollbarsSetupEvents } from './scrollbarsSetup.events';
import type { StyleObject } from '~/typings';
import type { StructureSetupState } from '../structureSetup';
import {
  getScrollbarHandleLengthRatio,
  getScrollbarHandleOffsetPercent,
  getScrollbarHandleOffsetRatio,
} from './scrollbarsSetup.calculations';

export interface ScrollbarStructure {
  _scrollbar: HTMLElement;
  _track: HTMLElement;
  _handle: HTMLElement;
}

export interface ScrollbarsSetupElement {
  _scrollTimeline: AnimationTimeline | undefined;
  _scrollbarStructures: ScrollbarStructure[];
  _clone: () => ScrollbarStructure;
  _style: (
    elmStyle: (
      scrollbarStructure: ScrollbarStructure
    ) => [HTMLElement | false | null | undefined, StyleObject]
  ) => void;
}

export interface ScrollbarsSetupElementsObj {
  _scrollbarsAddRemoveClass: (
    classNames: string | false | null | undefined,
    add?: boolean,
    isHorizontal?: boolean
  ) => void;
  _refreshScrollbarsHandleLength: (structureSetupState: StructureSetupState) => void;
  _refreshScrollbarsHandleOffset: (structureSetupState: StructureSetupState) => void;
  _refreshScrollbarsHandleOffsetTimeline: (structureSetupState: StructureSetupState) => void;
  _refreshScrollbarsScrollbarOffsetTimeline: (structureSetupState: StructureSetupState) => void;
  _refreshScrollbarsScrollbarOffset: () => void;
  _horizontal: ScrollbarsSetupElement;
  _vertical: ScrollbarsSetupElement;
}

export type ScrollbarsSetupElements = [
  elements: ScrollbarsSetupElementsObj,
  appendElements: () => () => void
];

export const createScrollbarsSetupElements = (
  target: InitializationTarget,
  structureSetupElements: StructureSetupElementsObj,
  scrollbarsSetupEvents: ScrollbarsSetupEvents
): ScrollbarsSetupElements => {
  const { _getDefaultInitialization, _cssCustomProperties } = getEnvironment();
  const { scrollbars: defaultInitScrollbars } = _getDefaultInitialization();
  const { slot: defaultInitScrollbarsSlot } = defaultInitScrollbars;
  const {
    _target,
    _host,
    _viewport,
    _targetIsElm,
    _scrollOffsetElement,
    _isBody,
    _viewportIsTarget,
  } = structureSetupElements;
  const { scrollbars: scrollbarsInit } = (_targetIsElm ? {} : target) as InitializationTargetObject;
  const { slot: initScrollbarsSlot } = scrollbarsInit || {};
  const elementAnimations = new Map<HTMLElement, Array<Animation | false | null | undefined>>();
  const initScrollTimeline = (axis: 'x' | 'y') =>
    scrollT &&
    new scrollT({
      source: _scrollOffsetElement,
      axis,
    });
  const scrollTimelineX = initScrollTimeline('x');
  const scrollTimelineY = initScrollTimeline('y');

  const evaluatedScrollbarSlot = generalDynamicInitializationElement<
    [InitializationTargetElement, HTMLElement, HTMLElement]
  >(
    [_target, _host, _viewport],
    () => (_viewportIsTarget && _isBody ? _target : _host),
    defaultInitScrollbarsSlot,
    initScrollbarsSlot
  );
  const doRefreshScrollbarOffset = (scrollbar: HTMLElement) =>
    _viewportIsTarget && !_isBody && parent(scrollbar) === _viewport;
  const cancelElementAnimations = (elements?: HTMLElement | HTMLElement[]) => {
    elementAnimations.forEach((currAnimations, element) => {
      const doCancel = elements
        ? inArray(isArray(elements) ? elements : [elements], element)
        : true;
      if (doCancel) {
        (currAnimations || []).forEach((animation) => {
          animation && animation.cancel();
        });
        elementAnimations.delete(element);
      }
    });
  };
  const scrollbarStructureAddRemoveClass = (
    scrollbarStructures: ScrollbarStructure[],
    classNames: string | false | null | undefined,
    add?: boolean
  ) => {
    const action = add ? addClass : removeClass;
    each(scrollbarStructures, (scrollbarStructure) => {
      action(scrollbarStructure._scrollbar, classNames);
    });
  };
  const scrollbarStyle = (
    scrollbarStructures: ScrollbarStructure[],
    elmStyle: (
      scrollbarStructure: ScrollbarStructure
    ) => [HTMLElement | false | null | undefined, StyleObject]
  ) => {
    each(scrollbarStructures, (scrollbarStructure) => {
      const [elm, styles] = elmStyle(scrollbarStructure);
      style(elm, styles);
    });
  };
  const validFiniteNumber = (number: number) => {
    const notNaN = number || 0;
    return isFinite(notNaN) ? notNaN : 0;
  };
  const ratioToCssPercent = (ratio: number) => `${(validFiniteNumber(ratio) * 100).toFixed(3)}%`;
  const numberToCssPx = (number: number) => `${validFiniteNumber(number)}px`;
  const scrollbarStructureRefreshHandleLength = (
    scrollbarStructures: ScrollbarStructure[],
    structureSetupState: StructureSetupState,
    isHorizontal?: boolean
  ) => {
    scrollbarStyle(scrollbarStructures, (structure) => {
      const { _handle, _track } = structure;
      return [
        _handle,
        {
          [isHorizontal ? strWidth : strHeight]: ratioToCssPercent(
            getScrollbarHandleLengthRatio(_handle, _track, isHorizontal, structureSetupState)
          ),
        },
      ];
    });
  };
  const scrollbarStructureRefreshHandleOffset = (
    scrollbarStructures: ScrollbarStructure[],
    structureSetupState: StructureSetupState,
    isHorizontal?: boolean
  ) => {
    scrollbarStyle(scrollbarStructures, (structure) => {
      const { _handle, _track, _scrollbar } = structure;
      const { _rtlScrollBehavior } = getEnvironment();
      const axis = isHorizontal ? 'x' : 'y';
      const scrollLeftTop = isHorizontal ? 'Left' : 'Top';
      const { _overflowAmount } = structureSetupState;
      const isRTL = getDirectionIsRTL(_scrollbar);
      const offsetRatio = getScrollbarHandleOffsetRatio(
        _handle,
        _track,
        getScrollbarHandleOffsetPercent(
          _scrollOffsetElement[`scroll${scrollLeftTop}`],
          _overflowAmount[axis],
          isHorizontal && isRTL && _rtlScrollBehavior
        ),
        isHorizontal
      );

      return [
        _handle,
        {
          transform: getTrasformTranslateValue(ratioToCssPercent(offsetRatio), isHorizontal),
        },
      ];
    });
  };
  const styleScrollbarPosition = (structure: ScrollbarStructure) => {
    const { _scrollbar } = structure;
    const elm = doRefreshScrollbarOffset(_scrollbar) && _scrollbar;
    const { x, y } = getElmentScroll(_scrollOffsetElement);
    return [
      elm,
      {
        transform: elm
          ? getTrasformTranslateValue({ x: numberToCssPx(x), y: numberToCssPx(y) })
          : '',
      },
    ] as [HTMLElement | false, StyleObject];
  };
  const animateElement = (
    element: HTMLElement,
    scrollTimeline: AnimationTimeline | undefined,
    keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
    composite?: CompositeOperation
  ): Animation | false | null | undefined =>
    scrollTimeline &&
    element.animate(keyframes, {
      // @ts-ignore
      timeline: scrollTimeline,
      composite,
    });
  const animateScrollbarOffset = (
    scrollbar: HTMLElement,
    scrollTimeline: AnimationTimeline | undefined,
    maxTransformValue: number,
    isHorizontal?: boolean
  ) =>
    animateElement(
      scrollbar,
      scrollTimeline,
      {
        transform: [
          getTrasformTranslateValue(numberToCssPx(0), isHorizontal),
          getTrasformTranslateValue(
            numberToCssPx(mathMax(0, maxTransformValue - 0.5)),
            isHorizontal
          ),
        ],
      },
      'add'
    );

  const destroyFns: (() => void)[] = [];
  const horizontalScrollbars: ScrollbarStructure[] = [];
  const verticalScrollbars: ScrollbarStructure[] = [];

  const scrollbarsAddRemoveClass = (
    className: string | false | null | undefined,
    add?: boolean,
    onlyHorizontal?: boolean
  ) => {
    const singleAxis = isBoolean(onlyHorizontal);
    const runHorizontal = singleAxis ? onlyHorizontal : true;
    const runVertical = singleAxis ? !onlyHorizontal : true;
    runHorizontal && scrollbarStructureAddRemoveClass(horizontalScrollbars, className, add);
    runVertical && scrollbarStructureAddRemoveClass(verticalScrollbars, className, add);
  };
  const refreshScrollbarsHandleLength = (structureSetupState: StructureSetupState) => {
    scrollbarStructureRefreshHandleLength(horizontalScrollbars, structureSetupState, true);
    scrollbarStructureRefreshHandleLength(verticalScrollbars, structureSetupState);
  };
  const refreshScrollbarsHandleOffset = (structureSetupState: StructureSetupState) => {
    if (!scrollTimelineX && !scrollTimelineY) {
      scrollbarStructureRefreshHandleOffset(horizontalScrollbars, structureSetupState, true);
      scrollbarStructureRefreshHandleOffset(verticalScrollbars, structureSetupState);
    }
  };
  const refreshScrollbarsHandleOffsetTimeline = () => {
    const forEachFn = (
      isHorizontal: boolean,
      { _scrollbar, _track, _handle }: ScrollbarStructure
    ) => {
      const directionRTL = isHorizontal && getDirectionIsRTL(_scrollbar);
      const getRatio = bind(getScrollbarHandleOffsetRatio, _handle, _track);
      const start = getRatio(directionRTL ? 1 : 0, isHorizontal);
      const end = getRatio(directionRTL ? 0 : 1, isHorizontal);
      cancelElementAnimations(_handle);
      elementAnimations.set(_handle, [
        animateElement(
          _handle,
          isHorizontal ? scrollTimelineX : scrollTimelineY,
          assignDeep(
            {
              transform: [
                getTrasformTranslateValue(ratioToCssPercent(start), isHorizontal),
                getTrasformTranslateValue(ratioToCssPercent(end), isHorizontal),
              ],
            },
            directionRTL
              ? {
                  clear: ['left'], // dummy keyframe for direction rtl animation because of chrome bug
                }
              : {}
          )
        ),
      ]);
    };
    horizontalScrollbars.forEach(bind(forEachFn, true));
    verticalScrollbars.forEach(bind(forEachFn, false));
  };
  const refreshScrollbarsScrollbarOffset = () => {
    if (!scrollTimelineY && !scrollTimelineY) {
      _viewportIsTarget && scrollbarStyle(horizontalScrollbars, styleScrollbarPosition);
      _viewportIsTarget && scrollbarStyle(verticalScrollbars, styleScrollbarPosition);
    }
  };
  const refreshScrollbarsScrollbarOffsetTimeline = ({ _overflowAmount }: StructureSetupState) => {
    concat(verticalScrollbars, horizontalScrollbars).forEach(({ _scrollbar }) => {
      cancelElementAnimations(_scrollbar);
      if (doRefreshScrollbarOffset(_scrollbar)) {
        elementAnimations.set(_scrollbar, [
          animateScrollbarOffset(_scrollbar, scrollTimelineX, _overflowAmount.x, true),
          animateScrollbarOffset(_scrollbar, scrollTimelineY, _overflowAmount.y),
        ]);
      }
    });
  };
  const generateScrollbarDOM = (isHorizontal?: boolean): ScrollbarStructure => {
    const scrollbarClassName = isHorizontal
      ? classNameScrollbarHorizontal
      : classNameScrollbarVertical;
    const arrToPush = isHorizontal ? horizontalScrollbars : verticalScrollbars;
    const transitionlessClass = isEmptyArray(arrToPush) ? classNameScrollbarTransitionless : '';
    const scrollbar = createDiv(
      `${classNameScrollbar} ${scrollbarClassName} ${transitionlessClass}`
    );
    const track = createDiv(classNameScrollbarTrack);
    const handle = createDiv(classNameScrollbarHandle);
    const result = {
      _scrollbar: scrollbar,
      _track: track,
      _handle: handle,
    };

    if (!_cssCustomProperties) {
      addClass(scrollbar, classNameScrollbarNoCssCustomProps);
    }

    push(arrToPush, result);
    push(destroyFns, [
      appendChildren(scrollbar, track),
      appendChildren(track, handle),
      bind(removeElements, scrollbar),
      cancelElementAnimations,
      scrollbarsSetupEvents(result, scrollbarsAddRemoveClass, isHorizontal),
    ]);

    return result;
  };
  const generateHorizontalScrollbarStructure = bind(generateScrollbarDOM, true);
  const generateVerticalScrollbarStructure = bind(generateScrollbarDOM, false);
  const appendElements = () => {
    appendChildren(evaluatedScrollbarSlot, horizontalScrollbars[0]._scrollbar);
    appendChildren(evaluatedScrollbarSlot, verticalScrollbars[0]._scrollbar);

    setT(() => {
      scrollbarsAddRemoveClass(classNameScrollbarTransitionless);
    }, 300);

    return bind(runEachAndClear, destroyFns);
  };

  generateHorizontalScrollbarStructure();
  generateVerticalScrollbarStructure();

  return [
    {
      _refreshScrollbarsHandleLength: refreshScrollbarsHandleLength,
      _refreshScrollbarsHandleOffset: refreshScrollbarsHandleOffset,
      _refreshScrollbarsHandleOffsetTimeline: refreshScrollbarsHandleOffsetTimeline,
      _refreshScrollbarsScrollbarOffsetTimeline: refreshScrollbarsScrollbarOffsetTimeline,
      _refreshScrollbarsScrollbarOffset: refreshScrollbarsScrollbarOffset,
      _scrollbarsAddRemoveClass: scrollbarsAddRemoveClass,
      _horizontal: {
        _scrollTimeline: scrollTimelineX,
        _scrollbarStructures: horizontalScrollbars,
        _clone: generateHorizontalScrollbarStructure,
        _style: bind(scrollbarStyle, horizontalScrollbars),
      },
      _vertical: {
        _scrollTimeline: scrollTimelineY,
        _scrollbarStructures: verticalScrollbars,
        _clone: generateVerticalScrollbarStructure,
        _style: bind(scrollbarStyle, verticalScrollbars),
      },
    },
    appendElements,
  ];
};
