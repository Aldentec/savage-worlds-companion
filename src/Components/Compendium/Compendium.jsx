import React, { useMemo, useState } from 'react';
import { useTable, useSortBy, useGlobalFilter, useFilters } from 'react-table';
import { Table, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { edges, hindrances, gearOptions } from '../../Constants/CharacterOptions';

const Compendium = ({ type }) => {
  const [data, setData] = useState(() => {
    switch (type) {
      case 'edges':
        return edges.map(edge => ({
          ...edge,
          link: <a href={edge.link} target="_blank" rel="noopener noreferrer">Link</a>
        }));
      case 'hindrances':
        return hindrances.map(hindrance => ({
          ...hindrance,
          link: <a href={hindrance.link} target="_blank" rel="noopener noreferrer">Link</a>
        }));
      case 'gear':
        return [...gearOptions.weapons, ...gearOptions.armor, ...gearOptions.items];
      default:
        return [];
    }
  });

  const columns = useMemo(() => {
    let cols = [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Description',
        accessor: 'description',
      },
    ];

    if (type === 'edges') {
      cols.push({ Header: 'Requirements', accessor: 'requirements' });
      cols.push({ Header: 'Type', accessor: 'type' });
      cols.push({ Header: 'Link', accessor: 'link' });
    }

    if (type === 'hindrances') {
        cols.push({ Header: 'Type', accessor: 'type' });
        cols.push({ Header: 'Link', accessor: 'link' });
      }

    return cols;
  }, [type]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
  } = useTable(
    { columns, data },
    useGlobalFilter,
    useSortBy
  );

  const handleSearch = (e) => {
    setGlobalFilter(e.target.value);
  };

  return (
    <div>
      <br />
      <h2>{type.charAt(0).toUpperCase() + type.slice(1)}</h2>
      <Form.Control
        type="text"
        placeholder="Search..."
        className="mb-3"
        onChange={handleSearch}
      />
      <Table {...getTableProps()} striped bordered hover>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? <FontAwesomeIcon icon={faSortDown} />
                        : <FontAwesomeIcon icon={faSortUp} />
                      : ''}
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
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Compendium;
