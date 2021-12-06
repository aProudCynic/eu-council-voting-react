import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { vote } from "../../model/vote";
import VotePanel from "./VotePanel";

let container: HTMLDivElement = document.createElement("div");
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
});

it("renders votes for all possible values", () => {
    act(() => {
      render(<VotePanel voteCast={vote.yes} voteCastingHandler={() => {}} />, container);
    });
    Object.values(vote).forEach(vote => expect(container.textContent).toContain(vote.icon))
})
