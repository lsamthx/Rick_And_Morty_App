import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CharacterProvider } from "../context/CharacterContext";
import Modal from "../components/modal/Modal";
import { act } from "react-dom/test-utils";

test("modal opens and closes via context", async () => {
  render(
    <CharacterProvider>
      <Modal />
    </CharacterProvider>
  );

});