declare type StringNullUndefined = string | null | undefined;
declare type DOMContentObserverCallback = (contentChangedTroughEvent: boolean) => any;
declare type DOMTargetObserverCallback = (targetChangedAttrs: string[], targetStyleChanged: boolean) => any;
interface DOMObserverOptionsBase {
    _attributes?: string[];
    _styleChangingAttributes?: string[];
}
interface DOMContentObserverOptions extends DOMObserverOptionsBase {
    _eventContentChange?: DOMObserverEventContentChange;
    _nestedTargetSelector?: string;
    _ignoreContentChange?: DOMObserverIgnoreContentChange;
    _ignoreNestedTargetChange?: DOMObserverIgnoreTargetChange;
}
interface DOMTargetObserverOptions extends DOMObserverOptionsBase {
    _ignoreTargetChange?: DOMObserverIgnoreTargetChange;
}
declare type ContentChangeArrayItem = [StringNullUndefined, StringNullUndefined] | null | undefined;
export declare type DOMObserverEventContentChange = Array<ContentChangeArrayItem> | false | null | undefined;
export declare type DOMObserverIgnoreContentChange = (mutation: MutationRecord, isNestedTarget: boolean, domObserverTarget: HTMLElement, domObserverOptions?: DOMContentObserverOptions) => boolean;
export declare type DOMObserverIgnoreTargetChange = (target: Node, attributeName: string, oldAttributeValue: string | null, newAttributeValue: string | null) => boolean;
export declare type DOMObserverCallback<ContentObserver extends boolean> = ContentObserver extends true ? DOMContentObserverCallback : DOMTargetObserverCallback;
export declare type DOMObserverOptions<ContentObserver extends boolean> = ContentObserver extends true ? DOMContentObserverOptions : DOMTargetObserverOptions;
export interface DOMObserver {
    _destroy: () => void;
    _update: () => void;
}
/**
 * Creates a DOM observer which observes DOM changes to either the target element or its children.
 * @param target The element which shall be observed.
 * @param isContentObserver Whether this observer is just observing the target or just the targets children. (not only direct children but also nested ones)
 * @param callback The callback which gets called if a change was detected.
 * @param options The options for DOM change detection.
 * @returns A object which represents the instance of the DOM observer.
 */
export declare const createDOMObserver: <ContentObserver extends boolean>(target: HTMLElement, isContentObserver: ContentObserver, callback: DOMObserverCallback<ContentObserver>, options?: DOMObserverOptions<ContentObserver> | undefined) => DOMObserver;
export {};
