import React, { ChangeEventHandler } from "react";

interface SelectProps {
  value: number;
  actionHandler: ChangeEventHandler<HTMLSelectElement>;
}

export const Select: React.FC<SelectProps> = ({
  value,
  actionHandler,
}: SelectProps) => {
  return (
    <div className="number-of-records">
      <label>Choose number of records per page: </label>{" "}
      <select className="form-select-sm" value={value} onChange={actionHandler}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </div>
  );
};
