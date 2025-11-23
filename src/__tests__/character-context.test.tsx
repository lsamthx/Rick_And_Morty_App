import { renderHook, act } from "@testing-library/react";
import { CharacterProvider,CharacterContext } from "../context/CharacterContext";
import { useContext } from "react";
import { render } from "@testing-library/react";

it("fetches characters and toggles favorite", async () => {
  let contextValue: any = null;

  function Consumer() {
    const ctx = useContext(CharacterContext);
    contextValue = ctx;
    return null;
  }

  render(
    <CharacterProvider>
      <Consumer />
    </CharacterProvider>
  );

  expect(contextValue.characters).toEqual([]);

  await new Promise((r) => setTimeout(r, 0));

  expect(contextValue.characters.length).toBeGreaterThanOrEqual(0);
  expect(contextValue.totalPages).toBeDefined();

  act(() => {
    contextValue.toggleFavorite(5);
  });

  expect(window.localStorage.getItem("favorites")).toContain("5");
  expect(contextValue.favorites).toContain(5);

  act(() => {
    contextValue.setShowFavorites(true);
  });

  await new Promise((r) => setTimeout(r, 0));
  expect(contextValue.characters.some((c: any) => c.name.includes("Fav"))).toBe(true);
});