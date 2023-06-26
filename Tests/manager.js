const Manager = require("../lib/manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should inherit values and methods from the parent class 'Employee'", () => {
            const manager = new Manager("Ruby", 5, "ruby@Yahoo.com", 55);

            const Manager = require("../lib/manager");

            expect(manager.getName()).toEqual("Ruby");
            expect(manager.getId()).toEqual(5);
            expect(manager.getEmail()).toEqual("Ruby@Yahoo.com");
        });
        