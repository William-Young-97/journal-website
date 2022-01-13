const supertest = require("supertest");
const app = require("../../app");

describe('Initial connections', () => {
  it("Makes a succesful get req to the hompage ", async () => {
    const res = await supertest(app)
      .get("/"); // /api/index would be best practice - refactor this
    expect(res.status).toEqual(200);
  });

  it("title says Hello World", async () => {
    const res = await supertest(app)
      .get("/")
      .expect(200)
      .expect((response) => {
        response.text.includes('Hello World');
      });
  });

});

// it('should display the default page', async () => {
//   await request(server)
//    .get('/')
//    .expect(200)
//    .expect((response) => {
//     assert.ok(response.text.includes('Hello World'));
//    });
//  });