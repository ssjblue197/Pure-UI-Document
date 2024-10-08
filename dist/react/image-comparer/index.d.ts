import Component from "../../components/image-comparer/image-comparer.component.js";
import { type EventName } from "@lit/react";
import type { PChangeEvent } from "../../events/events.js";
export type { PChangeEvent } from "../../events/events.js";
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
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onPChange: EventName<PChangeEvent>;
}>;
export default reactWrapper;
