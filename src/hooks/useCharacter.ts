import { useState } from "react";
import { CharacterSides } from "../types/CharacterSides";
import { mapSpots } from "../services/mapSpots";

export const useCharacter = () => {
  const [postion, setPosition] = useState({ x: 3, y: 5 });
  const [side, setSide] = useState<CharacterSides>("down");

  const moveCharacterLeft = () => {
    setPosition((postion) => ({
      x: youCanMove(postion.x - 1, postion.y) ? postion.x - 1 : postion.x,
      y: postion.y,
    }));
    setSide("left");
  };

  const moveCharacterRight = () => {
    setPosition((postion) => ({
      x: youCanMove(postion.x + 1, postion.y) ? postion.x + 1 : postion.x,
      y: postion.y,
    }));
    setSide("right");
  };

  const moveCharacterDown = () => {
    setPosition((postion) => ({
      x: postion.x,
      y: youCanMove(postion.x, postion.y + 1) ? postion.y + 1 : postion.y,
    }));
    setSide("down");
  };

  const moveCharacterUp = () => {
    setPosition((postion) => ({
      x: postion.x,
      y: youCanMove(postion.x, postion.y - 1) ? postion.y - 1 : postion.y,
    }));
    setSide("up");
  };

  const youCanMove = (x: number, y: number) => {
    if (mapSpots[y] !== undefined && mapSpots[y][x] !== undefined) {
      if (mapSpots[y][x] === 1) {
        return true;
      }
    }
    return false;
  };

  return {
    x: postion.x,
    y: postion.y,
    moveCharacterLeft,
    moveCharacterRight,
    moveCharacterDown,
    moveCharacterUp,
    side,
  };
};
