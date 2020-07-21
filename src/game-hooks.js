import React, { createContext, useState, useContext } from "react";

const GameContext = createContext();
export const useGameContext = () => useContext(GameContext);

const defaultState = {
  title: "TDD Roguelike!",
  screen: 'title'
};

export default function Game({ children }) {
  const [state, setState] = useState(defaultState);

  const setScreen = (screen) => {
    setState({
      ...state,
      screen
    })
  } 

  return (
    <GameContext.Provider value={{ state, setScreen }}>
      {children}
    </GameContext.Provider>
  );
}
