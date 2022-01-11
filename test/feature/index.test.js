const supertest = require("supertest")

test("GET /", async () => {
  await supertest(app)
  .get("/") // /api/index would be best practice - refactor this
  .expect(200)
  .then((res) => {
    expect(res.body[0].title).toContain('Hello World')
  })
})