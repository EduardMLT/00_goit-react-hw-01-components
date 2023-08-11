import { TableTd } from './TransactionsTable.styles';

export default function TableRowData({ items: { type, amount, currency } }) {
	return (
		<>
			<TableTd>{type}</TableTd>
			<TableTd>{amount}</TableTd>
			<TableTd>{currency}</TableTd>
		</>
	);
}

