import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useMemo, useState } from "react";
import { Table } from "./components/Table";
import { PersonDetails } from "./components/PersonDetails";
import { Select } from "./components/Select";
import { Pagination } from "./components/Pagination";
import { Person, PersonRow } from "./types.ts";

interface RandomPeopleProps {
  peopleData: Person[];
}

export const RandomPeople: React.FC<RandomPeopleProps> = ({
  peopleData,
}: RandomPeopleProps) => {
  const columns: PersonRow[] = [
    { id: 1, key: "name", label: "Name" },
    { id: 2, key: "dob", label: "Date of birth" },
    { id: 3, key: "email", label: "Email" },
    { id: 4, key: "verified", label: "Verified" },
    { id: 5, key: "salary", label: "Salary" },
  ];
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showPersonRow, setShowPersonRow] = useState<boolean>(false);
  const [personDetails, setPersonDetails] = useState<Person>();
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const totalNumberOfPages = Math.ceil(peopleData.length / recordsPerPage);
  const indexOfFirstElement = currentPage * recordsPerPage - recordsPerPage;
  const indexOfLastElement = currentPage * recordsPerPage;
  const currentRecords = peopleData.slice(
    indexOfFirstElement,
    indexOfLastElement,
  );

  const paginationRange = useMemo((): number[] => {
    const startPage = Math.max(
      1,
      Math.min(currentPage - Math.floor(4 / 2), totalNumberOfPages - 3),
    );

    return Array.from({ length: 4 }, (_, index) =>
      Math.min(startPage + index, totalNumberOfPages),
    );
  }, [currentPage, totalNumberOfPages]);

  const pageHandler = (page: number) => {
    setCurrentPage(page);
  };

  const nextPage = () => {
    if (currentPage < totalNumberOfPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const rowActionHandler = (person: Person) => {
    setShowPersonRow(!showPersonRow);
    setPersonDetails(person);
  };

  const recordsActionHandler = (e: any) => {
    setRecordsPerPage(e.target.value);
  };

  return (
    <div>
      {showPersonRow && (
        <PersonDetails
          personDetails={personDetails}
          columns={columns}
          setShowPersonRow={setShowPersonRow}
        />
      )}
      <Select value={recordsPerPage} actionHandler={recordsActionHandler} />
      <Table
        columns={columns}
        records={currentRecords}
        rowActionHandler={rowActionHandler}
      />
      <Pagination
        paginationRange={paginationRange}
        currentPage={currentPage}
        totalNumberOfPages={totalNumberOfPages}
        nextPage={nextPage}
        prevPage={prevPage}
        pageHandler={pageHandler}
      />
    </div>
  );
};

export default RandomPeople;
