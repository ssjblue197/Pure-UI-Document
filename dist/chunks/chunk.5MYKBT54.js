import {
  i
} from "./chunk.XHSHLALN.js";

// src/components/paginate/paginate.styles.ts
var paginate_styles_default = i`
  :host {
    display: inline-block;
    position: relative;
    width: 100%;
    cursor: pointer;
  }

  button::part(base) {
    font-weight: var(--p-font-weight-medium);
  }

  .paginate {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    position: relative;
    gap: var(--p-spacing-x-small);
  }

  .paginate__items {
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    position: relative;
    gap: var(--p-spacing-x-small);
  }

  .page::part(base) {
    border: none !important;
  }

  .page::part(base):hover {
    background-color: var(--p-color-neutral-100) !important;
  }

  .page.page--active::part(base) {
    background-color: var(--p-color-neutral-100) !important;
    color: var(--p-color-neutral-900) !important;
    opacity: 1 !important;
  }
`;

export {
  paginate_styles_default
};
