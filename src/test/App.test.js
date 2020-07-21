import React from "react";
import { render } from "ink-testing-library";
import Game from '../game-hooks'
import { App } from "../App";

describe("APP", () => {
  it("returns the name of the game", () => {
    // Arrange
    const { lastFrame } = render(
      <Game>
        <App />
     </Game>
    );

    // Assert
    expect(lastFrame()).toMatchSnapshot();
  });
});
