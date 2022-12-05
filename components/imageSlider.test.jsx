// const { moveNext, movePrev } = require("../components/ImageSlider");

import { render, screen } from "@testing-library/react";
import ImageSlider from "./ImageSlider";
import data from "../pages/api/workData.json";

describe("image slider component", () => {
  beforeEach(() => {
    render(<ImageSlider slides={data.resources} />);
  });

  // it("should render the imageSlider component", () => {
  //   render(<ImageSlider slides={data.resources} />);
  // });
  it("should find the left btn and click it", () => {
    screen.getByTestId("test-btn-left").click;
  });
});
