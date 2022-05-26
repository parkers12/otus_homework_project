import supertest from "supertest";
import app from "../index";
import connection from "../model/db";

// const express = require('express');
// const app = require("./routes");
// const request = supertest(app)

// const app = express();
// app.use(express.json());

describe("Testing routes", () => {
  let api: any;

  beforeEach(() => {
    api = supertest(app);
  });

  describe("Testing getPage", () => {
    it("Get json for category", async () => {
      const response = await api
        .get("/rings")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.headers["content-type"]).toEqual(
        "application/json; charset=utf-8"
      );
      expect(response.body[0].catId).toBe(290);
      expect(response.statusCode).toEqual(200);
    });

    it("Get json for other page", async () => {
      const response = await api
        .get("/about")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.headers["content-type"]).toEqual(
        "application/json; charset=utf-8"
      );
      expect(response.body[0].pageHead).toEqual("О LUCKSHIMI");
      expect(response.statusCode).toEqual(200);
    });

    it("Get json for error page", async () => {
      const response = await api
        .get("/qqqqqqqqqqqqqqqqqqqqqqqqqq")
        .set("Accept", "application/html")
        .expect("Content-Type", /html/)
        .expect(404);

      expect(response.headers["content-type"]).toEqual(
        "text/html; charset=UTF-8"
      );
      expect(response.statusCode).toEqual(404);
    });
  });

  describe("Testing getActions", () => {
    it("Get json", async () => {
      const response = await api
        .get("/actions")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.headers["content-type"]).toEqual(
        "application/json; charset=utf-8"
      );
      expect(response.statusCode).toEqual(200);
    });
  });

  describe("Testing getDelivery", () => {
    it("Get json", async () => {
      const response = await api
        .get("/delivery")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.headers["content-type"]).toEqual(
        "application/json; charset=utf-8"
      );
      expect(response.statusCode).toEqual(200);
    });
  });

  describe("Testing getMap", () => {
    it("Get json", async () => {
      const response = await api
        .get("/map")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.headers["content-type"]).toEqual(
        "application/json; charset=utf-8"
      );
      expect(response.statusCode).toEqual(200);
    });
  });

  describe("Testing getItem with range size", () => {
    it("Get json", async () => {
      const response = await api
        .get("/bracelets/1/380/")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.headers["content-type"]).toEqual(
        "application/json; charset=utf-8"
      );
      expect(response.statusCode).toEqual(200);
    });
  });

  describe("Testing getItem without range size", () => {
    it("Get json", async () => {
      const response = await api
        .get("/rings/1/632/")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.headers["content-type"]).toEqual(
        "application/json; charset=utf-8"
      );
      expect(response.statusCode).toEqual(200);
    });
  });

  describe("Testing getFilter", () => {
    it("Get json with class", async () => {
      const response = await api
        .get("/filter/1/5/")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.headers["content-type"]).toEqual(
        "application/json; charset=utf-8"
      );
      expect(response.statusCode).toEqual(200);
    });

    it("Get json with class with category", async () => {
      const response = await api
        .get("/filter/1/5/5/")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.headers["content-type"]).toEqual(
        "application/json; charset=utf-8"
      );
      expect(response.statusCode).toEqual(200);
    });

    it("Get json with color", async () => {
      const response = await api
        .get("/filter/2/5/")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.headers["content-type"]).toEqual(
        "application/json; charset=utf-8"
      );
      expect(response.statusCode).toEqual(200);
    });

    it("Get json with color with category", async () => {
      const response = await api
        .get("/filter/2/5/5/")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.headers["content-type"]).toEqual(
        "application/json; charset=utf-8"
      );
      expect(response.statusCode).toEqual(200);
    });

    it("Get json with diametr from 5 to 7 mm", async () => {
      const response = await api
        .get("/filter/3/2/")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.headers["content-type"]).toEqual(
        "application/json; charset=utf-8"
      );
      expect(response.statusCode).toEqual(200);
    });

    it("Get json with diametr from 5 to 7 mm with category", async () => {
      const response = await api
        .get("/filter/3/2/6/")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.headers["content-type"]).toEqual(
        "application/json; charset=utf-8"
      );
      expect(response.statusCode).toEqual(200);
    });

    it("Get json with diametr from 7 to 9 mm", async () => {
      const response = await api
        .get("/filter/3/3/")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.headers["content-type"]).toEqual(
        "application/json; charset=utf-8"
      );
      expect(response.statusCode).toEqual(200);
    });

    it("Get json with diametr from 7 to 9 mm with category", async () => {
      const response = await api
        .get("/filter/3/3/5/")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.headers["content-type"]).toEqual(
        "application/json; charset=utf-8"
      );
      expect(response.statusCode).toEqual(200);
    });

    it("Get json with diametr from 9 to 11 mm", async () => {
      const response = await api
        .get("/filter/3/11/")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.headers["content-type"]).toEqual(
        "application/json; charset=utf-8"
      );
      expect(response.statusCode).toEqual(200);
    });

    it("Get json with diametr from 9 to 11 mm with category", async () => {
      const response = await api
        .get("/filter/3/11/5/")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.headers["content-type"]).toEqual(
        "application/json; charset=utf-8"
      );
      expect(response.statusCode).toEqual(200);
    });

    it("Get json with diametr from 11 mm", async () => {
      const response = await api
        .get("/filter/3/4/")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.headers["content-type"]).toEqual(
        "application/json; charset=utf-8"
      );
      expect(response.statusCode).toEqual(200);
    });

    it("Get json with diametr from 11 mm with category", async () => {
      const response = await api
        .get("/filter/3/4/6/")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.headers["content-type"]).toEqual(
        "application/json; charset=utf-8"
      );
      expect(response.statusCode).toEqual(200);
    });

    it("Get json with form", async () => {
      const response = await api
        .get("/filter/4/2/")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.headers["content-type"]).toEqual(
        "application/json; charset=utf-8"
      );
      expect(response.statusCode).toEqual(200);
    });

    it("Get json with form with category", async () => {
      const response = await api
        .get("/filter/4/2/5/")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.headers["content-type"]).toEqual(
        "application/json; charset=utf-8"
      );
      expect(response.statusCode).toEqual(200);
    });

    it("Get json with metal", async () => {
      const response = await api
        .get("/filter/5/1/")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.headers["content-type"]).toEqual(
        "application/json; charset=utf-8"
      );
      expect(response.statusCode).toEqual(200);
    });

    it("Get json with metal with category", async () => {
      const response = await api
        .get("/filter/5/1/10/")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.headers["content-type"]).toEqual(
        "application/json; charset=utf-8"
      );
      expect(response.statusCode).toEqual(200);
    });

    it("Get json with price from 1000 to 3000", async () => {
      const response = await api
        .get("/filter/6/6/")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.headers["content-type"]).toEqual(
        "application/json; charset=utf-8"
      );
      expect(response.statusCode).toEqual(200);
    });

    it("Get json with price from 1000 to 3000 with category", async () => {
      const response = await api
        .get("/filter/6/6/6/")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.headers["content-type"]).toEqual(
        "application/json; charset=utf-8"
      );
      expect(response.statusCode).toEqual(200);
    });

    it("Get json with price from 3000 to 5000", async () => {
      const response = await api
        .get("/filter/6/7/")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.headers["content-type"]).toEqual(
        "application/json; charset=utf-8"
      );
      expect(response.statusCode).toEqual(200);
    });

    it("Get json with price from 3000 to 5000 with category", async () => {
      const response = await api
        .get("/filter/6/7/6/")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.headers["content-type"]).toEqual(
        "application/json; charset=utf-8"
      );
      expect(response.statusCode).toEqual(200);
    });

    it("Get json with price from 5000 to 7000", async () => {
      const response = await api
        .get("/filter/6/8/")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.headers["content-type"]).toEqual(
        "application/json; charset=utf-8"
      );
      expect(response.statusCode).toEqual(200);
    });

    it("Get json with price from 5000 to 7000 with category", async () => {
      const response = await api
        .get("/filter/6/8/6/")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.headers["content-type"]).toEqual(
        "application/json; charset=utf-8"
      );
      expect(response.statusCode).toEqual(200);
    });

    it("Get json with price from 7000 to 9000", async () => {
      const response = await api
        .get("/filter/6/9/")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.headers["content-type"]).toEqual(
        "application/json; charset=utf-8"
      );
      expect(response.statusCode).toEqual(200);
    });

    it("Get json with price from 7000 to 9000 with category", async () => {
      const response = await api
        .get("/filter/6/9/6/")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.headers["content-type"]).toEqual(
        "application/json; charset=utf-8"
      );
      expect(response.statusCode).toEqual(200);
    });

    it("Get json with price from 9000", async () => {
      const response = await api
        .get("/filter/6/10/")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.headers["content-type"]).toEqual(
        "application/json; charset=utf-8"
      );
      expect(response.statusCode).toEqual(200);
    });

    it("Get json with price from 9000 with category", async () => {
      const response = await api
        .get("/filter/6/10/6/")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.headers["content-type"]).toEqual(
        "application/json; charset=utf-8"
      );
      expect(response.statusCode).toEqual(200);
    });

    it("Get json with group", async () => {
      const response = await api
        .get("/filter/8/2/")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.headers["content-type"]).toEqual(
        "application/json; charset=utf-8"
      );
      expect(response.statusCode).toEqual(200);
    });
  });

  afterAll(() => {
    connection.end();
  });
});
