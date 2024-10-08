import PIcon from "../icon/icon.component.js";
import PureElement from "../../internal/pure-ui-element.js";
import type { CSSResultGroup } from "lit";
/**
 * @summary Compare visual differences between similar photos with a sliding panel.
 * @documentation https://pureui.xyz/components/image-comparer
 * @status stable
 * @since 1.0
 *
 * @dependency p-icon
 *
 * @slot before - The before image, an `<img>` or `<svg>` element.
 * @slot after - The after image, an `<img>` or `<svg>` element.
 * @slot handle - The icon used inside the handle.
 *
 * @event p-change - Emitted when the position changes.
 *
 * @csspart base - The component's base wrapper.
 * @csspart before - The container that wraps the before image.
 * @csspart after - The container that wraps the after image.
 * @csspart divider - The divider that separates the images.
 * @csspart handle - The handle that the user drags to expose the after image.
 *
 * @cssproperty --divider-width - The width of the dividing line.
 * @cssproperty --handle-size - The size of the compare handle.
 */
export default class PImageComparer extends PureElement {
    static styles: CSSResultGroup;
    static scopedElement: {
        "p-icon": typeof PIcon;
    };
    base: HTMLElement;
    handle: HTMLElement;
    /** The position of the divider as a percentage. */
    position: number;
    private handleDrag;
    private handleKeyDown;
    handlePositionChange(): void;
    render(): import("lit-html").TemplateResult<1>;
}
