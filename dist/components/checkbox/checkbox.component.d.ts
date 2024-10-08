import PIcon from "../icon/icon.component.js";
import PureElement from "../../internal/pure-ui-element.js";
import type { CSSResultGroup } from "lit";
import type { PureFormControl } from "../../internal/pure-ui-element.js";
/**
 * @summary Checkboxes allow the user to toggle an option on or off.
 * @documentation https://pureui.xyz/components/checkbox
 * @status stable
 * @since 1.0
 *
 * @dependency p-icon
 *
 * @slot - The checkbox's label.
 * @slot help-text - Text that describes how to use the checkbox. Alternatively, you can use the `help-text` attribute.
 *
 * @event p-blur - Emitted when the checkbox loses focus.
 * @event p-change - Emitted when the checked state changes.
 * @event p-focus - Emitted when the checkbox gains focus.
 * @event p-input - Emitted when the checkbox receives input.
 * @event p-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 *
 * @csspart base - The component's base wrapper.
 * @csspart control - The square container that wraps the checkbox's checked state.
 * @csspart control--checked - Matches the control part when the checkbox is checked.
 * @csspart control--indeterminate - Matches the control part when the checkbox is indeterminate.
 * @csspart checked-icon - The checked icon, an `<p-icon>` element.
 * @csspart indeterminate-icon - The indeterminate icon, an `<p-icon>` element.
 * @csspart label - The container that wraps the checkbox's label.
 * @csspart form-control-help-text - The help text's wrapper.
 */
export default class PCheckbox extends PureElement implements PureFormControl {
    static styles: CSSResultGroup;
    static dependencies: {
        "p-icon": typeof PIcon;
    };
    private readonly formControlController;
    private readonly hasSlotController;
    input: HTMLInputElement;
    private hasFocus;
    title: string;
    /** The name of the checkbox, submitted as a name/value pair with form data. */
    name: string;
    /** The current value of the checkbox, submitted as a name/value pair with form data. */
    value: string;
    /** The checkbox's size. */
    size: "small" | "medium" | "large";
    /** Disables the checkbox. */
    disabled: boolean;
    /** Draws the checkbox in a checked state. */
    checked: boolean;
    /**
     * Draws the checkbox in an indeterminate state. This is usually applied to checkboxes that represents a "select
     * all/none" behavior when associated checkboxes have a mix of checked and unchecked states.
     */
    indeterminate: boolean;
    /** The default value of the form control. Primarily used for resetting the form control. */
    defaultChecked: boolean;
    /**
     * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
     * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
     * the same document or shadow root for this to work.
     */
    form: string;
    /** Makes the checkbox a required field. */
    required: boolean;
    /** The checkbox's help text. If you need to display HTML, use the `help-text` slot instead. */
    helpText: string;
    /** Gets the validity state object */
    get validity(): ValidityState;
    /** Gets the validation message */
    get validationMessage(): string;
    firstUpdated(): void;
    private handleClick;
    private handleBlur;
    private handleInput;
    private handleInvalid;
    private handleFocus;
    handleDisabledChange(): void;
    handleStateChange(): void;
    /** Simulates a click on the checkbox. */
    click(): void;
    /** Sets focus on the checkbox. */
    focus(options?: FocusOptions): void;
    /** Removes focus from the checkbox. */
    blur(): void;
    /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
    checkValidity(): boolean;
    /** Gets the associated form, if one exists. */
    getForm(): HTMLFormElement | null;
    /** Checks for validity and shows the browser's validation message if the control is invalid. */
    reportValidity(): boolean;
    /**
     * Sets a custom validation message. The value provided will be shown to the user when the form is submitted. To clear
     * the custom validation message, call this method with an empty string.
     */
    setCustomValidity(message: string): void;
    render(): import("lit-html").TemplateResult<1>;
}
