import app from '../index';
// const request = require("supertest");
import connection from '../model/db';
import supertest from "supertest";


// const express = require('express');
// const app = require("./routes");
// const request = supertest(app)

// const app = express();
// app.use(express.json());

describe("Testing routes", () => {
    let api;

    beforeEach(() => {
        api = supertest(app);
    });

    it("Get json for page", async () => {
        await api
        .get("/about")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200);

        // const response = await request(app)
        //     .get("/about");
        
        // expect(response.headers['content-type']).toEqual("application/json; charset=utf-8");
        // expect(response.body["header"]).toEqual("О LUCKSHIMI");
        // expect(response.statusCode).toEqual(200);
    });

    afterAll(() => {
        connection.end();
    })
});