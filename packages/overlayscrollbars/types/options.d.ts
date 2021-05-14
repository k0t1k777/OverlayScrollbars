export declare type ResizeBehavior = 'none' | 'both' | 'horizontal' | 'vertical';
export declare type OverflowBehavior = 'hidden' | 'scroll' | 'visible' | 'visible-hidden';
export declare type VisibilityBehavior = 'visible' | 'hidden' | 'auto';
export declare type AutoHideBehavior = 'never' | 'scroll' | 'leave' | 'move';
export declare type ScrollBehavior = 'always' | 'ifneeded' | 'never';
export declare type BasicEventCallback = (this: any) => void;
export declare type ScrollEventCallback = (this: any, args?: UIEvent) => void;
export declare type OverflowChangedCallback = (this: any, args?: OverflowChangedArgs) => void;
export declare type OverflowAmountChangedCallback = (this: any, args?: OverflowAmountChangedArgs) => void;
export declare type DirectionChangedCallback = (this: any, args?: DirectionChangedArgs) => void;
export declare type SizeChangedCallback = (this: any, args?: SizeChangedArgs) => void;
export declare type UpdatedCallback = (this: any, args?: UpdatedArgs) => void;
export interface OSOptions {
    resize: ResizeBehavior;
    paddingAbsolute: boolean;
    updating: {
        elementEvents: Array<[string, string]> | null;
        attributes: string[] | null;
        debounce: number | [number, number] | null;
    };
    overflow: {
        x: OverflowBehavior;
        y: OverflowBehavior;
    };
    scrollbars: {
        visibility: VisibilityBehavior;
        autoHide: AutoHideBehavior;
        autoHideDelay: number;
        dragScroll: boolean;
        clickScroll: boolean;
        touch: boolean;
    };
    textarea: {
        dynWidth: boolean;
        dynHeight: boolean;
        inheritedAttrs: string | Array<string> | null;
    };
    nativeScrollbarsOverlaid: {
        show: boolean;
        initialize: boolean;
    };
    callbacks: {
        onUpdated: (() => any) | null;
    };
}
export interface OverflowChangedArgs {
    x: boolean;
    y: boolean;
    xScrollable: boolean;
    yScrollable: boolean;
    clipped: boolean;
}
export interface OverflowAmountChangedArgs {
    x: number;
    y: number;
}
export interface DirectionChangedArgs {
    isRTL: number;
    dir: string;
}
export interface SizeChangedArgs {
    width: number;
    height: number;
}
export interface UpdatedArgs {
    forced: boolean;
}
export declare const optionsTemplate: import("support/options").OptionsTemplate<OSOptions>, defaultOptions: OSOptions;
