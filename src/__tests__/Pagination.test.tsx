import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CharacterProvider } from "../context/CharacterContext";
import Pagination from "../components/Pagination";

test("prev button disabled on first page", () => {
  render(
    <CharacterProvider>
      <Pagination />
    </CharacterProvider>
  );

  const prev = screen.getByRole("button", { name: /←/i });
  expect(prev).toBeDisabled();
});