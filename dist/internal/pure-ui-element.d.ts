import { LitElement } from "lit";
type EventTypeRequiresDetail<T> = T extends keyof GlobalEventHandlersEventMap ? GlobalEventHandlersEventMap[T] extends CustomEvent<Record<PropertyKey, unknown>> ? GlobalEventHandlersEventMap[T] extends CustomEvent<Record<PropertyKey, never>> ? never : Partial<GlobalEventHandlersEventMap[T]["detail"]> extends GlobalEventHandlersEventMap[T]["detail"] ? never : T : never : never;
type EventTypeDoesNotRequireDetail<T> = T extends keyof GlobalEventHandlersEventMap ? GlobalEventHandlersEventMap[T] extends CustomEvent<Record<PropertyKey, unknown>> ? GlobalEventHandlersEventMap[T] extends CustomEvent<Record<PropertyKey, never>> ? T : Partial<GlobalEventHandlersEventMap[T]["detail"]> extends GlobalEventHandlersEventMap[T]["detail"] ? T : never : T : T;
type EventTypesWithRequiredDetail = {
    [EventType in keyof GlobalEventHandlersEventMap as EventTypeRequiresDetail<EventType>]: true;
};
type EventTypesWithoutRequiredDetail = {
    [EventType in keyof GlobalEventHandlersEventMap as EventTypeDoesNotRequireDetail<EventType>]: true;
};
type WithRequired<T, K extends keyof T> = T & {
    [P in K]-?: T[P];
};
type PEventInit<T> = T extends keyof GlobalEventHandlersEventMap ? GlobalEventHandlersEventMap[T] extends CustomEvent<Record<PropertyKey, unknown>> ? GlobalEventHandlersEventMap[T] extends CustomEvent<Record<PropertyKey, never>> ? CustomEventInit<GlobalEventHandlersEventMap[T]["detail"]> : Partial<GlobalEventHandlersEventMap[T]["detail"]> extends GlobalEventHandlersEventMap[T]["detail"] ? CustomEventInit<GlobalEventHandlersEventMap[T]["detail"]> : WithRequired<CustomEventInit<GlobalEventHandlersEventMap[T]["detail"]>, "detail"> : CustomEventInit : CustomEventInit;
type GetCustomEventType<T> = T extends keyof GlobalEventHandlersEventMap ? GlobalEventHandlersEventMap[T] extends CustomEvent<unknown> ? GlobalEventHandlersEventMap[T] : CustomEvent<unknown> : CustomEvent<unknown>;
export default class PureElement extends LitElement {
    dir: string;
    lang: string;
    /** Emits a custom event with more convenient defaults. */
    emit<T extends string & keyof EventTypesWithoutRequiredDetail>(name: EventTypeDoesNotRequireDetail<T>, options?: PEventInit<T> | undefined): GetCustomEventType<T>;
    emit<T extends string & keyof EventTypesWithRequiredDetail>(name: EventTypeRequiresDetail<T>, options: PEventInit<T>): GetCustomEventType<T>;
    static version: any;
    static define(name: string, elementConstructor?: typeof PureElement, options?: ElementDefinitionOptions): void;
    static dependencies: Record<string, typeof PureElement>;
    constructor();
}
export interface PureFormControl extends PureElement {
    name: string;
    value: unknown;
    disabled?: boolean;
    defaultValue?: unknown;
    defaultChecked?: boolean;
    form?: string;
    pattern?: string;
    min?: number | string | Date;
    max?: number | string | Date;
    step?: number | "any";
    required?: boolean;
    minlength?: number;
    maxlength?: number;
    readonly validity: ValidityState;
    readonly validationMessage: string;
    checkValidity: () => boolean;
    getForm: () => HTMLFormElement | null;
    reportValidity: () => boolean;
    setCustomValidity: (message: string) => void;
}
export {};
