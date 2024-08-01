import PIconButton from '../icon-button/icon-button.component.js';
import PureElement from '../../internal/pure-ui-element.js';
import type { CSSResultGroup } from 'lit';
/**
 * @summary Tab groups organize content into a container that shows one section at a time.
 * @documentation https://pureui.xyz/components/tab-group
 * @status stable
 * @since 2.0
 *
 * @dependency p-icon-button
 *
 * @slot - Used for grouping tab panels in the tab group. Must be `<p-tab-panel>` elements.
 * @slot nav - Used for grouping tabs in the tab group. Must be `<p-tab>` elements.
 *
 * @event {{ name: String }} p-tab-show - Emitted when a tab is shown.
 * @event {{ name: String }} p-tab-hide - Emitted when a tab is hidden.
 *
 * @csspart base - The component's base wrapper.
 * @csspart nav - The tab group's navigation container where tabs are slotted in.
 * @csspart tabs - The container that wraps the tabs.
 * @csspart active-tab-indicator - The line that highlights the currently selected tab.
 * @csspart body - The tab group's body where tab panels are slotted in.
 * @csspart scroll-button - The previous/next scroll buttons that show when tabs are scrollable, an `<p-icon-button>`.
 * @csspart scroll-button--start - The starting scroll button.
 * @csspart scroll-button--end - The ending scroll button.
 * @csspart scroll-button__base - The scroll button's exported `base` part.
 *
 * @cssproperty --indicator-color - The color of the active tab indicator.
 * @cssproperty --track-color - The color of the indicator's track (the line that separates tabs from panels).
 * @cssproperty --track-width - The width of the indicator's track (the line that separates tabs from panels).
 */
export default class PTabGroup extends PureElement {
    static styles: CSSResultGroup;
    static dependencies: {
        'p-icon-button': typeof PIconButton;
    };
    private readonly localize;
    private activeTab?;
    private mutationObserver;
    private resizeObserver;
    private tabs;
    private focusableTabs;
    private panels;
    tabGroup: HTMLElement;
    body: HTMLSlotElement;
    nav: HTMLElement;
    indicator: HTMLElement;
    private hasScrollControls;
    /** The placement of the tabs. */
    placement: 'top' | 'bottom' | 'start' | 'end';
    /**
     * When set to auto, navigating tabs with the arrow keys will instantly show the corresponding tab panel. When set to
     * manual, the tab will receive focus but will not show until the user presses spacebar or enter.
     */
    activation: 'auto' | 'manual';
    /** Disables the scroll arrows that appear when tabs overflow. */
    noScrollControls: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private getAllTabs;
    private getAllPanels;
    private getActiveTab;
    private handleClick;
    private handleKeyDown;
    private handleScrollToStart;
    private handleScrollToEnd;
    private setActiveTab;
    private setAriaLabels;
    private repositionIndicator;
    private syncTabsAndPanels;
    private findNextFocusableTab;
    updateScrollControls(): void;
    syncIndicator(): void;
    /** Shows the specified tab panel. */
    show(panel: string): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'p-tab-group': PTabGroup;
    }
}
