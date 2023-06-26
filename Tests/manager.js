const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Object", () => {
        test("creates a Manager object", () => {
            const manager = new Manager("Ruby", 2, "Rubyname@gmail.com", 22);

            expect(manager.officeNumber).toEqual(expect.any(Number));
        });
    });

    describe("Role", () => {
        test("gets role of employee", () => {
            const manager = new Manager("Ruby", 123, "Rubyname@gmail.com");

            expect(manager.getRole()).toEqual("Manager");
        });
    });
});