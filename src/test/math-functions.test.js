import { multiply, sum, subtract, divide } from "utils/math-functions";

describe("Math functions", () => {
  it("sums correctly 2 values", () => {
    expect(sum()).toBe(0);
    expect(sum(1, 1)).toBe(2);
    expect(sum(0, 0)).toBe(0);
    expect(sum(0, -1)).toBe(-1);
    expect(sum(-1, -1)).toBe(-2);
    expect(sum(-1.5, 0.5)).toBe(-1);
  });

  it("subtracts correctly 2 values", () => {
    expect(subtract()).toBe(0);
    expect(subtract(2, 3)).toBe(-1);
    expect(subtract(0, 0)).toBe(0);
    expect(subtract(0, -1)).toBe(1);
    expect(subtract(-1, -1)).toBe(0);
    expect(subtract(-1.5, 0.5)).toBe(-2);
  });

  it("multiplies correctly 2 values", () => {
    expect(multiply()).toBe(0);
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(0, 0)).toBe(0);
    expect(multiply(1.7, 3)).toBe(5.1);
    expect(multiply(0, -1)).toBe(0);
    expect(multiply(-1, -1)).toBe(1);
    expect(multiply(-1.5, 0.5)).toBe(-0.75);
  });

  it("divides correctly 2 values", () => {
    expect(() => divide()).toThrowError("You cannot divide by 0");
    expect(divide(2, 3)).toBe(0.67);
    expect(divide(0, -1)).toBe(0);
    expect(divide(-1, -1)).toBe(1);
    expect(divide(-1.5, 0.5)).toBe(-3);
  });
});
