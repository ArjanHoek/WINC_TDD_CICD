// const functions = require("./functions");

// // beforeEach(() => initDatabase());
// // afterEach(() => closeDatabase());

// // beforeAll(() => initDatabase());
// // afterAll(() => closeDatabase());

// // const initDatabase = () => console.log("Database initialized...")
// // const closeDatabase = () => console.log("Database closed...")

// const nameCheck = () => console.log("Checking name...")

// describe("Checking names", () => {
//   beforeEach(() => nameCheck());

//   test("User is Jeff", () => {
//     const user = "Jeff";
//     expect(user).toBe("Jeff")
//   })

//   test("User is Karen", () => {
//     const user = "Karen";
//     expect(user).toBe("Karen")
//   })

// })

// // toBe - usually used for primitive types
// test("Adds 2 + 2 to equal 4", () => {
//   expect(functions.add(2, 2)).toBe(4);
// });

// // toBe
// test("Adds 2 + 2 to not equal 5", () => {
//   expect(functions.add(2, 2)).not.toBe(5);
// });

// // toBeNull
// test("Should be null", () => {
//   expect(functions.isNull()).toBeNull();
// });

// // toBeFalsy
// test("Should be falsy", () => {
//   expect(functions.checkValue(0)).toBeFalsy();
// });

// // toEqual - for reference types
// test("User should be Arjan Hoek object", () => {
//   expect(functions.createUser()).toEqual({
//     firstName: "Arjan",
//     lastName: "Hoek"
//   });
// });

// // less than / greater than
// test("Should be under 1600", () => {
//   const load1 = 800;
//   const load2 = 800;
//   expect(load1 + load2).toBeLessThanOrEqual(1600)
// });

// // Regex
// test("There is no I in team", () => {
//   expect("team").not.toMatch(/I/);
// });

// // Arrays
// test("Admin should be in usernames", () => {
//   const usernames = ["John", "Karen", "Admin"];
//   expect(usernames).toContain("Admin");
// })

// // Working with async data
// test("Name of fetched user should be Leanne Graham", () => {
//   expect.assertions(1);
//   return functions.fetchUser().then(data => {
//     expect(data.name).toEqual("Leanne Graham")
//   });
// })

// // Working with async data (async/await)
// test("Name of fetched user should be Leanne Graham", async () => {
//   expect.assertions(1);
//   const data = await functions.fetchUser();
//   expect(data.name).toEqual("Leanne Graham");
// })