import React from "react";
import { render } from "ink-testing-library";
import StateProvider from '../game-hooks'
import { App } from "../App";

describe("APP", () => {
  it("returns the name of the game", () => {
    // Arrange
    const { lastFrame } = render(
      <StateProvider>
        <App />
     </StateProvider>
    );

    // Assert
    expect(lastFrame()).toMatchSnapshot();
  });
});
