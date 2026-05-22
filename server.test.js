const test = require("node:test");
const assert = require("node:assert/strict");
const request = require("supertest");

const app = require("./server");

test("GET / returns the Symphony hello message", async () => {
  const response = await request(app).get("/").expect(200);

  assert.deepEqual(response.body, { message: "Hello from Symphony!" });
});

test("GET /health returns ok status", async () => {
  const response = await request(app).get("/health").expect(200);

  assert.deepEqual(response.body, { status: "ok" });
});
