import { describe, it, expect } from "vitest";
import { addTwoNumbers } from "./example";

describe("example utils", () => {
  it("addTwoNumbers() funciton adds 2 + 2 to equal and return 4", () => {
    expect(addTwoNumbers(2, 2)).toBe(4);
  });
});
