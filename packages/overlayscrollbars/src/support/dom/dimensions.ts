import { style } from './style';
import { mathRound, wnd } from '../utils/alias';
import { bind } from '../utils/function';
import { strHeight, strWidth } from '../utils/strings';

export interface WH<T = number> {
  w: T;
  h: T;
}

const elementHasDimensions = (elm: HTMLElement): boolean =>
  !!(elm.offsetWidth || elm.offsetHeight || elm.getClientRects().length);
const zeroObj: WH = {
  w: 0,
  h: 0,
};

const getElmWidthHeightProperty = <E extends HTMLElement | Window>(
  property: E extends HTMLElement ? 'client' | 'offset' | 'scroll' : 'inner',
  elm: E | false | null | undefined
): Readonly<WH> =>
  elm
    ? {
        w: (elm as any)[`${property}Width`],
        h: (elm as any)[`${property}Height`],
      }
    : zeroObj;

/**
 * Returns the window inner- width and height.
 */
export const windowSize = (customWnd?: Window): Readonly<WH> =>
  getElmWidthHeightProperty('inner', customWnd || wnd);

/**
 * Returns the scroll- width and height of the passed element. If the element is null the width and height values are 0.
 * @param elm The element of which the scroll- width and height shall be returned.
 */
export const offsetSize = bind(getElmWidthHeightProperty<HTMLElement>, 'offset') satisfies (
  elm: HTMLElement | false | null | undefined
) => Readonly<WH>;

/**
 * Returns the client- width and height of the passed element. If the element is null the width and height values are 0.
 * @param elm The element of which the client- width and height shall be returned.
 */
export const clientSize = bind(getElmWidthHeightProperty<HTMLElement>, 'client') satisfies (
  elm: HTMLElement | false | null | undefined
) => Readonly<WH>;

/**
 * Returns the client- width and height of the passed element. If the element is null the width and height values are 0.
 * @param elm The element of which the client- width and height shall be returned.
 */
export const scrollSize = bind(getElmWidthHeightProperty<HTMLElement>, 'scroll') satisfies (
  elm: HTMLElement | false | null | undefined
) => Readonly<WH>;

/**
 * Returns the fractional- width and height of the passed element. If the element is null the width and height values are 0.
 * @param elm The element of which the fractional- width and height shall be returned.
 */
export const fractionalSize = (elm: HTMLElement | false | null | undefined): Readonly<WH> => {
  const cssWidth = parseFloat(style(elm, strWidth)) || 0;
  const cssHeight = parseFloat(style(elm, strHeight)) || 0;
  return {
    w: cssWidth - mathRound(cssWidth),
    h: cssHeight - mathRound(cssHeight),
  };
};

/**
 * Returns the BoundingClientRect of the passed element.
 * @param elm The element of which the BoundingClientRect shall be returned.
 */
export const getBoundingClientRect = (elm: HTMLElement): DOMRect => elm.getBoundingClientRect();

/**
 * Determines whether the passed element has any dimensions.
 * @param elm The element.
 */
export const hasDimensions = (elm: HTMLElement | false | null | undefined): boolean =>
  !!elm && elementHasDimensions(elm);

/**
 * Determines whether the passed DOM Rect has any dimensions.
 */
export const domRectHasDimensions = (rect?: DOMRectReadOnly | false | null) =>
  !!(rect && (rect[strHeight] || rect[strWidth]));

/**
 * Determines whether current DOM Rect has appeared according the the previous dom rect..
 * @param currContentRect The current DOM Rect.
 * @param prevContentRect The previous DOM Rect.
 * @returns Whether the dom rect appeared.
 */
export const domRectAppeared = (
  currContentRect: DOMRectReadOnly | false | null | undefined,
  prevContentRect: DOMRectReadOnly | false | null | undefined
) => {
  const rectHasDimensions = domRectHasDimensions(currContentRect);
  const rectHadDimensions = domRectHasDimensions(prevContentRect);
  return !rectHadDimensions && rectHasDimensions;
};
