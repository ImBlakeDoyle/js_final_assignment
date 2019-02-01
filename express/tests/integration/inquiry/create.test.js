const supertest = require("supertest");
require("dotenv").config();
const app = require("./../../../app");
const mongoose = require("mongoose");

beforeAll(() => {
    mongoose.connect(process.env.DB_HOST_TEST, { useNewUrlParser: true });
    mongoose.Promise = global.Promise;
    
    mongoose.connection.on("error", console.log);
});

afterAll(() => {
    mongoose.connection.close();
});

describe("User creates a new inquiry", () => {
    test("POST /inquiry/new with a valid req body", async () => {
        const response = await supertest(app)
            .post("/inquiry/new")
            .send({
                name: "carl test",
                email: "test@email.com",
                comment: "all the testing of integration",
                phone: "041111111"
            })
            .expect(200);
            expect(response.text).toEqual("email sent successfully");
    });
});