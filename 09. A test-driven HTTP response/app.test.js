const supertest = require("supertest");

const createApp = require("./app");

const app = createApp();

const request = supertest(app);

test("GET /", async () => {
  const response = await request
    .get("/")
    .expect(200)
    .expect("Content-Type", "text/html");

  expect(response.body).toEqual("<html> <body> <h1> Welcome to the World Wide Web!</h1> </body> </html>");
});