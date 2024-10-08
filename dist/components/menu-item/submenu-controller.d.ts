import { type HasSlotController } from "../../internal/slot.js";
import type { ReactiveController, ReactiveControllerHost } from "lit";
import type PMenuItem from "./menu-item.js";
/** A reactive controller to manage the registration of event listeners for submenus. */
export declare class SubmenuController implements ReactiveController {
    private host;
    private popupRef;
    private enableSubmenuTimer;
    private isConnected;
    private isPopupConnected;
    private skidding;
    private readonly hasSlotController;
    private readonly submenuOpenDelay;
    constructor(host: ReactiveControllerHost & PMenuItem, hasSlotController: HasSlotController);
    hostConnected(): void;
    hostDisconnected(): void;
    hostUpdated(): void;
    private addListeners;
    private removeListeners;
    private handleMouseMove;
    private handleMouseOver;
    private handleSubmenuEntry;
    private handleKeyDown;
    private handleClick;
    private handleFocusOut;
    private handlePopupMouseover;
    private handlePopupReposition;
    private setSubmenuState;
    private enableSubmenu;
    private disableSubmenu;
    private updateSkidding;
    isExpanded(): boolean;
    renderSubmenu(): import("lit-html").TemplateResult<1>;
}
