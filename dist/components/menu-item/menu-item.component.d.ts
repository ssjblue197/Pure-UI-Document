import PIcon from '../icon/icon.component.js';
import PPopup from '../popup/popup.component.js';
import PSpinner from '../spinner/spinner.component.js';
import PureElement from '../../internal/pure-ui-element.js';
import type { CSSResultGroup } from 'lit';
/**
 * @summary Menu items provide options for the user to pick from in a menu.
 * @documentation https://pureui.xyz/components/menu-item
 * @status stable
 * @since 2.0
 *
 * @dependency p-icon
 * @dependency p-popup
 * @dependency p-spinner
 *
 * @slot - The menu item's label.
 * @slot prefix - Used to prepend an icon or similar element to the menu item.
 * @slot suffix - Used to append an icon or similar element to the menu item.
 * @slot submenu - Used to denote a nested menu.
 *
 * @csspart base - The component's base wrapper.
 * @csspart checked-icon - The checked icon, which is only visible when the menu item is checked.
 * @csspart prefix - The prefix container.
 * @csspart label - The menu item label.
 * @csspart suffix - The suffix container.
 * @csspart spinner - The spinner that shows when the menu item is in the loading state.
 * @csspart spinner__base - The spinner's base part.
 * @csspart submenu-icon - The submenu icon, visible only when the menu item has a submenu (not yet implemented).
 *
 * @cssproperty [--submenu-offset=-2px] - The distance submenus shift to overlap the parent menu.
 */
export default class PMenuItem extends PureElement {
    static styles: CSSResultGroup;
    static dependencies: {
        'p-icon': typeof PIcon;
        'p-popup': typeof PPopup;
        'p-spinner': typeof PSpinner;
    };
    private cachedTextLabel;
    defaultSlot: HTMLSlotElement;
    menuItem: HTMLElement;
    /** The type of menu item to render. To use `checked`, this value must be set to `checkbox`. */
    type: 'normal' | 'checkbox';
    /** Draws the item in a checked state. */
    checked: boolean;
    /** A unique value to store in the menu item. This can be used as a way to identify menu items when selected. */
    value: string;
    /** Draws the menu item in a loading state. */
    loading: boolean;
    /** Draws the menu item in a disabled state, preventing selection. */
    disabled: boolean;
    private readonly hasSlotController;
    private submenuController;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private handleDefaultSlotChange;
    private handleHostClick;
    private handleMouseOver;
    handleCheckedChange(): void;
    handleDisabledChange(): void;
    handleTypeChange(): void;
    /** Returns a text label based on the contents of the menu item's default slot. */
    getTextLabel(): string;
    isSubmenu(): boolean;
    render(): import("lit-html").TemplateResult<1>;
}
