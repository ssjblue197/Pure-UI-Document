import Component from "../../components/radio-group/radio-group.component.js";
import { type EventName } from "@lit/react";
import type { PChangeEvent } from "../../events/events.js";
import type { PInputEvent } from "../../events/events.js";
import type { PInvalidEvent } from "../../events/events.js";
export type { PChangeEvent } from "../../events/events.js";
export type { PInputEvent } from "../../events/events.js";
export type { PInvalidEvent } from "../../events/events.js";
/**
 * @summary Radio groups are used to group multiple [radios](/components/radio) or [radio buttons](/components/radio-button) so they function as a single form control.
 * @documentation https://pureui.xyz/components/radio-group
 * @status stable
 * @since 1.0
 *
 * @dependency p-button-group
 *
 * @slot - The default slot where `<p-radio>` or `<p-radio-button>` elements are placed.
 * @slot label - The radio group's label. Required for proper accessibility. Alternatively, you can use the `label`
 *  attribute.
 * @slot help-text - Text that describes how to use the radio group. Alternatively, you can use the `help-text` attribute.
 *
 * @event p-change - Emitted when the radio group's selected value changes.
 * @event p-input - Emitted when the radio group receives user input.
 * @event p-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 *
 * @csspart form-control - The form control that wraps the label, input, and help text.
 * @csspart form-control-label - The label's wrapper.
 * @csspart form-control-input - The input's wrapper.
 * @csspart form-control-help-text - The help text's wrapper.
 * @csspart button-group - The button group that wraps radio buttons.
 * @csspart button-group__base - The button group's `base` part.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onPChange: EventName<PChangeEvent>;
    onPInput: EventName<PInputEvent>;
    onPInvalid: EventName<PInvalidEvent>;
}>;
export default reactWrapper;
