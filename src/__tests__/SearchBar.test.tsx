import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CharacterProvider } from "../context/CharacterContext";
import SearchBar from "../components/SearchBar";

test("typing updates search in context", async () => {
  render(
    <CharacterProvider>
      <SearchBar />
    </CharacterProvider>
  );

  const input = screen.getByPlaceholderText("Buscar personaje...");
  await userEvent.type(input, "rick");
  expect((input as HTMLInputElement).value).toBe("rick");
});