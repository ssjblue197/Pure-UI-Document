import Component from "../../components/radio-button/radio-button.component.js";
import { type EventName } from "@lit/react";
import type { PBlurEvent } from "../../events/events.js";
import type { PFocusEvent } from "../../events/events.js";
export type { PBlurEvent } from "../../events/events.js";
export type { PFocusEvent } from "../../events/events.js";
/**
 * @summary Radios buttons allow the user to select a single option from a group using a button-like control.
 * @documentation https://pureui.xyz/components/radio-button
 * @status stable
 * @since 1.0
 *
 * @slot - The radio button's label.
 * @slot prefix - A presentational prefix icon or similar element.
 * @slot suffix - A presentational suffix icon or similar element.
 *
 * @event p-blur - Emitted when the button loses focus.
 * @event p-focus - Emitted when the button gains focus.
 *
 * @csspart base - The component's base wrapper.
 * @csspart button - The internal `<button>` element.
 * @csspart button--checked - The internal button element when the radio button is checked.
 * @csspart prefix - The container that wraps the prefix.
 * @csspart label - The container that wraps the radio button's label.
 * @csspart suffix - The container that wraps the suffix.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onPBlur: EventName<PBlurEvent>;
    onPFocus: EventName<PFocusEvent>;
}>;
export default reactWrapper;
