import PureElement from "../../internal/pure-ui-element.js";
import type { CSSResultGroup } from "lit";
/**
 * @summary Skeletons are used to provide a visual representation of where content will eventually be drawn.
 * @documentation https://pureui.xyz/components/skeleton
 * @status stable
 * @since 1.0
 *
 * @csspart base - The component's base wrapper.
 * @csspart indicator - The skeleton's indicator which is responsible for its color and animation.
 *
 * @cssproperty --border-radius - The skeleton's border radius.
 * @cssproperty --color - The color of the skeleton.
 * @cssproperty --sheen-color - The sheen color when the skeleton is in its loading state.
 */
export default class PSkeleton extends PureElement {
    static styles: CSSResultGroup;
    /** Determines which effect the skeleton will use. */
    effect: "pulse" | "sheen" | "none";
    render(): import("lit-html").TemplateResult<1>;
}
