import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CharacterCard from "../components/CharacterCard";
import { CharacterProvider } from "../context/CharacterContext";
import type { Character } from "../types/Character";

const sample: Character = {
  id: 42,
  name: "Sample",
  image: "http://example.com/img.png",
  status: "Alive",
  species: "Human",
  gender: "Male",
  origin: { name: "Earth" },
  location: { name: "Earth" },
};

test("renders character data and toggles favorite", async () => {
  render(
    <CharacterProvider>
      <CharacterCard character={sample} />
    </CharacterProvider>
  );

  expect(screen.getByText("Sample")).toBeInTheDocument();
  expect(screen.getByRole("img", { name: /Sample/i })).toBeInTheDocument();

  const btn = screen.getByRole("button", { name: /Agregar|Favorito/ });
  expect(btn).toBeInTheDocument();

  await userEvent.click(btn);
  expect(btn).toHaveTextContent(/Favorito/);
});