import PureElement from "../../internal/pure-ui-element.js";
import type { CSSResultGroup } from "lit";
/**
 * @summary Tab panels are used inside [tab groups](/components/tab-group) to display tabbed content.
 * @documentation https://pureui.xyz/components/tab-panel
 * @status stable
 * @since 1.0
 *
 * @slot - The tab panel's content.
 *
 * @csspart base - The component's base wrapper.
 *
 * @cssproperty --padding - The tab panel's padding.
 */
export default class PTabPanel extends PureElement {
    static styles: CSSResultGroup;
    private readonly attrId;
    private readonly componentId;
    /** The tab panel's name. */
    name: string;
    /** When true, the tab panel will be shown. */
    active: boolean;
    connectedCallback(): void;
    handleActiveChange(): void;
    render(): import("lit-html").TemplateResult<1>;
}
