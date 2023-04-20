import reducer, { initialState } from ".";

test("Should return initial state", () => {
  expect(
    reducer(undefined, {
      type: undefined,
    })
  ).toEqual(initialState);
});
