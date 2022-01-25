import { checkForURL } from "../src/client/js/nameChecker";

describe("URL Testing", () => {
  test("checkForURL() Testing", () => {
    const input = [
      "http://localhost:8080/",
      "https://jamesclear.com/five-step-creative-process"
    ];
    const output = [false, true, false, true];

    input.forEach((e, i) => {
      expect(checkForURL(e)).toEqual(output[i]);
    });
  });
});
