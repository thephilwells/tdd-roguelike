import React from "react";
import { render } from "ink-testing-library";
import { App, GameContext } from "../App";

describe("APP", () => {
  it("returns the name of the game", () => {
    // Arrange
    const { lastFrame } = render(
      <GameContext.Provider value={{ title: "FOO!" }}>
        <App />
      </GameContext.Provider>
    );

    // Assert
    expect(lastFrame()).toMatchSnapshot();
  });
});
