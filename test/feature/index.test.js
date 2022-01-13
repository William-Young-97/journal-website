const supertest = require("supertest");
const app = require("../../app");

describe('Initial connections', () => {
  it("Makes a succesful get req to the hompage ", async () => {
    const res = await supertest(app)
    .get("/"); // /api/index would be best practice - refactor this
    expect(res.StatusCode).toEqual(200);
  });
});
