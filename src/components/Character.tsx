import * as Component from "./Character.styles";
import { CharacterSides } from "../types/CharacterSides";

type Props = {
  positionX: number;
  positionY: number;
  side: CharacterSides;
};

export const Character = ({ positionX, positionY, side }: Props) => {
  const maxSizeOfCharacter = 30;
  const sides = {
    down: 0,
    left: -30,
    right: -60,
    up: -90,
  };

  return (
    <Component.Container
      size={maxSizeOfCharacter}
      left={positionX * maxSizeOfCharacter}
      top={positionY * maxSizeOfCharacter}
      positionSides={sides[side] ?? 0}
    ></Component.Container>
  );
};
