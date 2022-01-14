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

describe('Submit and display a form on another page', () => {
  it("Makes a POST request to another page", async () => {
    const res = await supertest(app)  
    .post('/') // Have the created ID linked after
    .expect(201);
  });
});

// For when we check the pages content
//.send({noteTitle: 'Sweet summer times', noteBody: 'I like drinking lemonade in the sun!'})


// it('should not accept empty test', function (done) {
//   supertest(schsrch)
//    .post('/feedback/')
//    .set('Content-Type', 'application/json')
//    .send({email: '', text: '', search: null})
//    .expect(403)
//    .expect(res => res.text.should.match(/content/i))
//    .expect(res => res.text.should.match(/required/i))
//    .end(done)
//  })
