// const { moveNext, movePrev } = require("../components/ImageSlider");

import { render, screen } from "@testing-library/react";
import ImageSlider from "./ImageSlider";
import data from "../pages/api/workData.json";

describe("image slider component", () => {
  it("should render the imageSlider component", () => {
    render(<ImageSlider slides={data.resources} />);
  });
  // it("should move to next image", () => {
  //   const next = moveNext();
  //   expect(next).toHaveBeenCalled();
  // });
});
