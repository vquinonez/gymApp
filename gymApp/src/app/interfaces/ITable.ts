export interface ITableItem {
	header: string,
	value: any,
	href?: string
}

export interface ITableRow{
	items: ITableItem[];
	href?: string;
}

export interface ITable {
	header: string[],
	rows: ITableRow[]
}