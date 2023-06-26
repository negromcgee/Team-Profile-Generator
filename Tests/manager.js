const Manager = require("../lib/manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should inherit values and methods from the parent class 'Employee'", () => {
            const manager = new Manager("Ruby", 5, "ruby@Yahoo.com", 55);
