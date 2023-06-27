const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Object", () => {
        test("creates an employee object", () => {
            const employee = new Employee("Tiffany", 6, "tifftaff@gmail.com");

            expect(employee.name).toEqual(expect.any(String));
            expect(employee.id).toEqual(expect.any(Number));
            expect(employee.email).toEqual(expect.any(String));
        });
    });