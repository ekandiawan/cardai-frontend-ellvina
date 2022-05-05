import React from 'react';
import { useTable, useSortBy } from 'react-table';

function Transaction() {
  const data = React.useMemo(
    () => [
      {
        col1: '14 Feb 2022, 15:04:56',
        col2: 'Starbucks',
        col3: '$7.90',
        col4: 'Dining',
      },
      {
        col1: '14 Feb 2022, 16:32:30',
        col2: 'Golden Village',
        col3: '$13',
        col4: 'Leisure',
      },
      {
        col1: '17 Feb 2022, 11:04:56',
        col2: 'Zalora',
        col3: '$34.70',
        col4: 'Online Shopping',
      },
      {
        col1: '21 Feb 2022, 18:04:56',
        col2: 'NTUC Fairprice',
        col3: '$74.70',
        col4: 'Groceries',
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Date and time',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'Merchant',
        accessor: 'col2',
      },
      {
        Header: 'Amount',
        accessor: 'col3', // accessor is the "key" in the data
      },
      {
        Header: 'Category',
        accessor: 'col4', // accessor is the "key" in the data
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <div>
      <div>
        <h2 className="my-5 text-center">Transaction History</h2>
      </div>
      <table {...getTableProps()} style={{ border: 'solid 1px black' }}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  style={{
                    borderBottom: 'solid 3px red',
                    color: 'black',
                  }}
                >
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? '🔽' : '🔼') : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: '10px',
                        border: 'solid 1px gray',
                      }}
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <p>
        <u>
          <i>more ...</i>
        </u>
      </p>
    </div>
  );
}

export default Transaction;
