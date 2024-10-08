import PureElement from "../../internal/pure-ui-element.js";
import type { CSSResultGroup } from "lit";
/**
 * @summary Badges are used to draw attention and display statuses or counts.
 * @documentation https://pureui.xyz/components/badge
 * @status stable
 * @since 1.0
 *
 * @slot - The badge's content.
 *
 * @csspart base - The component's base wrapper.
 */
export default class PBadge extends PureElement {
    static styles: CSSResultGroup;
    /** The badge's theme variant. */
    variant: "primary" | "success" | "neutral" | "warning" | "danger";
    /** Draws a pill-style badge with rounded edges. */
    pill: boolean;
    /** Makes the badge pulsate to draw attention. */
    pulse: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
