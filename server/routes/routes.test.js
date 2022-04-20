import app from '../index.mjs';
import supertest from "supertest";
// const request = require("supertest");
// const connection = require('../model/db');


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

    it("Get static page", async () => {
        await api
        .get("/about")
        .expect("content-type", /json/)
        .expect(200)
        .expect(function (res) {
            console.log(res);
        });

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