const request = require("supertest");
const server = require("./server.js");

describe("server.js", () => {
  describe("index route", () => {
    it("should return an OK status code from the index route", async () => {
      const expectedStatusCode = 200;

      const response = await request(server).get("/");

      expect(response.status).toEqual(expectedStatusCode);
    });

    it("should return a JSON object fron the index route", async () => {
      const response = await request(server).get("/");
      console.log(response.body);

      expect(response.body.message).toMatch(
        /Welcome to AirBnB Optimal Price Endpoint/i
      );
    });
  });
});
