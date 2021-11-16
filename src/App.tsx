import { useEffect } from "react";
import * as Component from "./App.styles";
import { Character } from "./components/Character";
import { useCharacter } from "./hooks/useCharacter";

export const App = () => {
  const character = useCharacter();
  const character2 = useCharacter();

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
  }, []);

  // - Movimentação do personagem
  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.code) {
      case "KeyA":
      case "ArrowLeft":
        character.moveCharacterLeft();
        break;

      case "KeyD":
      case "ArrowRight":
        character.moveCharacterRight();
        break;

      case "KeyW":
      case "ArrowUp":
        character.moveCharacterUp();
        break;

      case "KeyS":
      case "ArrowDown":
        character.moveCharacterDown();
        break;
    }
  };

  return (
    <Component.Container>
      <Component.Map>
        <Character
          positionX={character.x}
          positionY={character.y}
          side={character.side}
        />
      </Component.Map>
    </Component.Container>
  );
};
