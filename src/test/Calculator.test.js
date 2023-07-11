import { render, screen, fireEvent } from "@testing-library/react";
import { Calculator } from "components/Calculator/Calculator";

describe("<Calculator/>", () => {
  // can use before each but will double-render if rendered in a test (for defautl values, for example)
  // beforeEach(() => {
  //     render(<Calculator />);
  //   });

  it("has 'Calculator' displayed somewhere", () => {
    render(<Calculator />);
    //screen.debug();
    const textElement = screen.getByText("Calculator");
    expect(textElement.textContent).toBe("Calculator");
  });

  it("has an h1 that contains 'Calculator'", () => {
    render(<Calculator />);
    const titleEl = screen.getByRole("heading", { level: 1 });
    expect(titleEl.textContent).toBe("Calculator");
  });

  it("performs 0+0 by default", () => {
    render(<Calculator />);
    const { getValueA, getValueB, getResult, getOperator } = getCalculator();

    expect(getValueA()).toBe("0");
    expect(getValueB()).toBe("0");
    expect(getOperator()).toBe("+");
    expect(getResult()).toBe("0");
  });

  it("uses correctly the default values", () => {
    render(<Calculator defaultA={12} defaultB={10} defaultOperator={"*"} />);
    const { getValueA, getValueB, getResult, getOperator } = getCalculator();

    expect(getValueA()).toBe("12");
    expect(getValueB()).toBe("10");
    expect(getOperator()).toBe("*");
    expect(getResult()).toBe("120");
  });

  it("calculates correctly when user updates an input", () => {
    render(<Calculator defaultA={12} defaultB={10} defaultOperator={"*"} />);
    const { getValueA, getValueB, getResult, getOperator } = getCalculator();
    fireEvent.change(screen.getByTestId("inputA"), { target: { value: "3" } });
    expect(getResult()).toBe("30");
    fireEvent.change(screen.getByTestId("inputB"), { target: { value: "3" } });
    expect(getResult()).toBe("9");
    fireEvent.change(screen.getByTestId("operator"), {
      target: { value: "-" },
    });
    expect(getResult()).toBe("0");
  });

  it("displays an error when dividing by 0", () => {
    render(<Calculator defaultA={1} defaultB={0} defaultOperator={"/"} />);
    const { getValueA, getValueB, getResult, getOperator } = getCalculator();
    expect(getResult()).toBe("You cannot divide by 0");
  });

  it("displays a message when no operator is provided", () => {
    render(<Calculator defaultA={1} defaultB={1} defaultOperator={"/"} />);
    const { getValueA, getValueB, getResult, getOperator } = getCalculator();
    fireEvent.change(screen.getByTestId("operator"), {
      target: { value: "!" },
    });
    expect(getResult()).toBe("No operator provided");
  });

  it("returns 0 when inputs are empty", () => {
    render(<Calculator defaultA={1} defaultB={1} defaultOperator={"*"} />);
    const { getValueA, getValueB, getResult, getOperator } = getCalculator();
    fireEvent.change(screen.getByTestId("inputA"), {
      target: { value: "" },
    });
    fireEvent.change(screen.getByTestId("inputB"), {
      target: { value: "" },
    });
    expect(getResult()).toBe("0");
  });
});

function getCalculator() {
  return {
    getValueA: () => screen.getByTestId("inputA").value,
    getValueB: () => screen.getByTestId("inputB").value,
    getOperator: () => screen.getByTestId("operator").value,
    getResult: () => screen.getByTestId("result").textContent,
  };
}
