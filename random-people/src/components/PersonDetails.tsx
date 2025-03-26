import React from "react";
import { Person, PersonRow } from "../types.ts";

interface PersonDetailsProps {
  columns: PersonRow[];
  personDetails: Person | undefined;
  setShowPersonRow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PersonDetails: React.FC<PersonDetailsProps> = ({
  columns,
  personDetails,
  setShowPersonRow,
}: PersonDetailsProps) => {
  return (
    <div>
      <div className="modal-container">
        <div className="modal-content border rounded shadow-sm w-25">
          <div className="modal-body">
            <ul className="list-group list-group-flush">
              {columns.map((header) => (
                <li
                  key={header.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <span className="fw-bold">{header.label}</span>
                  <span className="text-muted">
                    {personDetails?.[header.key]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-secondary"
              onClick={() => setShowPersonRow(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
