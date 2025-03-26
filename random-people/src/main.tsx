import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RandomPeople from "./RandomPeople.tsx";
import { Person } from "./types.ts";
import { people } from "./api/people.js";
const peopleData: Person[] = people;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RandomPeople peopleData={peopleData} />
  </StrictMode>,
);
