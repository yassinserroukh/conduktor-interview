import React, { ChangeEventHandler } from "react";
import { PersonRow } from "../types.ts";

interface TableProps {
  columns: PersonRow[];
  records: object[];
  actionHandler: ChangeEventHandler<HTMLSelectElement>;
}

export const Table: React.FC<TableProps> = ({
  columns,
  records,
  rowActionHandler,
}: TableProps) => {
  return (
    <table className="table table-striped table-lg w-100">
      <thead className="thead-dark">
        <tr>
          {columns.map((column) => {
            return <th key={column.id}>{column.label}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {records.map((record, index) => (
          <tr key={index} onClick={() => rowActionHandler(record)}>
            {columns.map((header) => {
              return <td key={header.id}>{record[header.key]}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
