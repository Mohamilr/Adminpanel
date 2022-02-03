import { getUserId } from ".";

describe("Helpers", () => {
  test("get user id", () => {
    expect(getUserId("/form/edit/3")).toBe("3");
  });

  test("get user id undefined", () => {
    expect(getUserId("/form/create")).toBe(undefined);
  });
});
