const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should inherit values and methods from the parent class 'Employee'", () => {
            const intern = new Intern("Tiffany", 7, "tifftaff@gmail.com", "UofA");

            expect(intern.getName()).toEqual("Tiffany");
            expect(intern.getId()).toEqual(7);
            expect(intern.getEmail()).toEqual("tifftaff@gmail.com");
        });
        it("should add the additional property 'school' to the given object", () => {
            const intern = new Intern("Tiffany", 7, "tifftaff@gmail.com", "UofA");

            expect(intern.school).toEqual("UofA");
        });