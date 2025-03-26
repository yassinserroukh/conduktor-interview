import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RandomPeople from "./RandomPeople";
import { userEvent } from "@testing-library/user-event";

const mockPeople = [
  ...Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    name: `Person ${i + 1}`,
    dob: "1990-01-01",
    email: `person${i + 1}@example.com`,
    verified: i % 2 === 0,
    salary: 50000 + i * 1000,
  })),
];

describe("App Component Integration Tests", () => {
  test("displays initial 10 records", () => {
    render(<RandomPeople peopleData={mockPeople} />);
    const tableRows = screen.getAllByRole("row", { hidden: true });
    expect(tableRows.length).toBe(11);
  });

  test("changes records per page", async () => {
    const recordsSelect = screen.getByRole("combobox", {});

    await userEvent.selectOptions(recordsSelect, "20");

    const tableRows = screen.getAllByRole("row", { hidden: true });
    expect(tableRows.length).toBe(21);
  });

  test("opens and closes person details", async () => {
    const firstPersonRow = screen.getByText("Person 1", {});
    await userEvent.click(firstPersonRow);
    const personDetailsModal = screen.getByRole("dialog", {
      name: /person details/i,
    });
    expect(personDetailsModal).toBeInTheDocument();

    const closeButton = screen.getByRole("button", { name: /close/i });
    await userEvent.click(closeButton);

    expect(personDetailsModal).not.toBeInTheDocument();
  });
});
