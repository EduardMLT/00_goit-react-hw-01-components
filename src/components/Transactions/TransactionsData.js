
import TableRowData from "./TransactionsTable";
import {TransactionTable, TableHeader, TableRow} from './TransactionsData.styles'


export const TransactionsData = ({ transact }) => {
    console.log(transact)
    return (
        <TransactionTable className="transaction-history">
            <TableHeader className="transaction-header">
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </TableHeader>

            <tbody>
                {transact.map((transactionsItem, index) => {
                    const isEvenRow = index % 2 === 0;
                    return (
                        <TableRow key={transactionsItem.id} className="transaction-row" $iseven={isEvenRow}>
                            <TableRowData items={transactionsItem} />
                        </TableRow>
                    );
                })}
			
            </tbody>
        </TransactionTable>
    );
}