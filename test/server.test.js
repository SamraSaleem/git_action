const request = require("supertest");
const app = require("../src/server"); // Adjust path for test

test("GET / should return 'Hello, World!'", async () => {
  const response = await request(app).get("/");
  expect(response.text).toBe("Hello, World!");
  expect(response.statusCode).toBe(200);
});
