export default class Modal {
    element: HTMLElement;
    isExternalActivated: boolean;
    tabDirection: "forward" | "backward";
    currentFocus: HTMLElement | null;
    previousFocus: HTMLElement | null;
    elementsWithTabbableControls: string[];
    constructor(element: HTMLElement);
    /** Activates focus trapping. */
    activate(): void;
    /** Deactivates focus trapping. */
    deactivate(): void;
    /** Determines if this modal element is currently active or not. */
    isActive(): boolean;
    /** Activates external modal behavior and temporarily disables focus trapping. */
    activateExternal(): void;
    /** Deactivates external modal behavior and re-enables focus trapping. */
    deactivateExternal(): void;
    private checkFocus;
    private handleFocusIn;
    private possiblyHasTabbableChildren;
    private handleKeyDown;
    private handleKeyUp;
}
