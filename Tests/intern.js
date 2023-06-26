const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should inherit values and methods from the parent class 'Employee'", () => {
            const intern = new Intern("Tiffany", 6, "tifftaff@gmail.com", "UofA");

            expect(intern.getName()).toEqual("Tiffany");
            expect(intern.getId()).toEqual(7);
            expect(intern.getEmail()).toEqual("tifftaff@gmail.com");
        });
        it("should add the additional property 'school' to the given object", () => {
            const intern = new Intern("Tiffany", 6, "tifftaff@gmail.com", "UofA");

            expect(intern.school).toEqual("UofA");
        });
        it("should throw an error if 'school' is not a string", () => {
            const err = new Error("Expected parameter 'school' to be a string");
              
            expect(() => new Intern("Tiffany", 6, "tifftaff@gmail.com", 25)).toThrowError(err);
        });
        it("should override 'role' to have the value 'Intern'", () => {
            const intern = new Intern("Tiffany", 6, "tifftaff@gmail.com", "UofA");

            expect(intern.getRole()).toEqual("Intern");
        });
    });
    describe("getSchool", () => {
        it("should return the 'school' value of a given object", () => {
            const intern = new Intern("Tiffany", 6, "tifftaff@gmail.com", "UofA");

            expect(intern.getSchool()).toEqual("UofA");
        });
    });
});