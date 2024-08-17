import { describe, expect, test } from "vitest";

import { getDeclination } from "./get-declination";

describe("Get declination", () => {
  test("Returns singular when count is 1", () => {
    expect(getDeclination(1, ["item", "items"])).toEqual("item");
  });

  test("Returns plural when count is not 1", () => {
    expect(getDeclination(0, ["item", "items"])).toEqual("items");

    expect(getDeclination(2, ["item", "items"])).toEqual("items");
  });
});
