export interface TableStyleI {
    [key: string]: number | string
}
export interface ColumnI {
    field?: string;
    headerName?: string;
    mobileHeaderName?: string;
    component?: (props: any) => JSX.Element;
    style?: TableStyleI;
    valueGetter?: (data: any) => string;
    headerStyle?: TableStyleI;
    className?: string;

}