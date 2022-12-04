// const { moveNext, movePrev } = require("../components/ImageSlider");

import { render, screen, prettyDOM } from "@testing-library/react";
import ImageSlider, { moveNext } from "./ImageSlider";
import data from "../pages/api/workData.json";

describe("image slider component", () => {
  it("should render the imageSlider component", () => {
    render(<ImageSlider slides={data.resources} />);
  });
  it("should find the left btn", () => {
    render(<ImageSlider slides={data.resources} />);
    screen.getByTestId("test-btn-left").click;
    const next = moveNext;
    console.log();
  });
});
