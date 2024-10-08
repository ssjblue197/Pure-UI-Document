import PTable from "./table.component.js";
import type { HTMLTemplateResult } from "lit";
export * from "./table.component.js";
export default PTable;
export interface ColumnConfig {
    field?: string;
    id?: string;
    type?: string | string[];
    cellDataType?: boolean | string;
    hide?: boolean;
    draggable?: boolean;
    resizable?: boolean;
    sort?: boolean;
    comparator?: (T: unknown) => void;
    filter?: boolean;
    headerName?: string;
    width?: string;
    minWidth?: string;
    maxWidth?: string;
    visible?: boolean;
    sortable?: boolean;
    filterable?: boolean;
    filterOptions?: string[] | object[];
    editable?: boolean;
    render?: (T: unknown) => string;
    renderSlot?: (T: unknown) => symbol | HTMLTemplateResult | undefined;
    alignItems?: "flex-start" | "flex-end" | "center";
    justifyContent?: "flex-start" | "flex-end" | "center";
    justifyItems?: "flex-start" | "flex-end" | "center";
    classes?: string;
    truncate?: boolean;
    sticky?: "start" | "end";
    stickyOffset?: number;
}
export interface TableRowData {
    [key: string]: unknown;
}
export interface TableOptions<T> {
    columns: ColumnConfig[];
    getSelectedRows?: () => T[];
    minHeight?: string;
    maxHeight?: string;
    selectable?: boolean;
    draggable?: boolean;
    hideHeader?: boolean;
    hideFooter?: boolean;
    paginate?: boolean;
    expandable?: boolean;
    onRowExpand?: (row: T) => symbol | HTMLTemplateResult | undefined;
    onRowCollapse?: (row: T) => symbol | HTMLTemplateResult | undefined;
}
declare global {
    interface HTMLElementTagNameMap {
        "p-table": PTable;
    }
}
