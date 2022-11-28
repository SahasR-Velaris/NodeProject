import { conditional } from "../../conditional";
import { expect, test} from "@jest/globals";

test("Testing for the value 6", () => {
    const value = conditional(6);
    expect(value).toBe(true);
});

test("Testing for the value of 3", () => {
    const value = conditional(3);
    expect(value).toBe(false);
})

test("Testing for the value of 10", () => {
    const value = conditional(10);
    expect(value).toBe(false);
})

test("Testing for null", () => {
    const value = conditional(null);
    expect(value).toBe(false);
}) 

test("Testing for decimals", () => {
    const value = conditional(5.1);
    expect(value).toBe(true);
})

test("Testing for strings", () => {
    const value = conditional("Hello world!");
    expect(value).toBe(false);
})

