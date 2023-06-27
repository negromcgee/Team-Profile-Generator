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

    describe("Name", () => {
        test("gets employee name", () => {
            const employee = new Employee("Tiffany", 6, "tifftaff@gmail.com");

            expect(employee.getName()).toEqual(expect.any(String));
        });
    });

    describe("ID", () => {
        test("gets employee ID", () => {
            const employee = new Employee("Tiffany", 6, "tifftaff@gmail.com");

            expect(employee.getId()).toEqual(expect.any(Number));
        });
    });

    describe("Email", () => {
        test("gets employee email", () => {
            const employee = new Employee("Tiffany", 6, "tifftaff@gmail.com");

            expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
        });
    });

    describe("Role", () => {
        test("gets role of employee", () => {
            const employee = new Employee("Tiffany", 6, "tifftaff@gmail.com");

            expect(employee.getRole()).toEqual("Employee");
        });
    });
}); 