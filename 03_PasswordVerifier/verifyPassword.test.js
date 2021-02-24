const {
  verifyPassword,
  hasRightLength,
  isNotNull,
  hasUpperCaseCharacter,
  hasLowerCaseCharacter,
  hasDigit,
  minimumConditionsReached
} = require("./verifyPassword");

test('Password has less than 9 characters', () => {
  expect(hasRightLength("wachtWRD")).toBeTruthy()
})

test('Password has less than 9 characters', () => {
  expect(hasRightLength("wachtWOORD")).toBeFalsy()
})

test('Password is not null', () => {
  expect(isNotNull("notNull")).toBeTruthy()
})

test('Password is not null', () => {
  expect(isNotNull(null)).toBeFalsy()
})

test('Password has at least 1 uppercase character', () => {
  expect(hasUpperCaseCharacter("opperKaas")).toBeTruthy()
})

test('Password has at least 1 uppercase character', () => {
  expect(hasUpperCaseCharacter("zonderkaas")).toBeFalsy()
})

test('Password has at least 1 lowercase character', () => {
  expect(hasLowerCaseCharacter("LAURIERkaas")).toBeTruthy()
})

test('Password has at least 1 lowercase character', () => {
  expect(hasLowerCaseCharacter("LAURIERKAAS")).toBeFalsy()
})

test('Password has at least 1 lowercase character', () => {
  expect(hasLowerCaseCharacter("1234")).toBeFalsy()
})

test('Password contains at least 1 number', () => {
  expect(hasDigit("D1g1t")).toBeTruthy()
})

test('Password contains at least 1 number', () => {
  expect(hasDigit("letters")).toBeFalsy()
})

test('henkie1 is a valid password', () => {
  expect(verifyPassword("henkie1")).toBeTruthy()
})

test('1234a is a valid password', () => {
  expect(verifyPassword("1234a")).toBeTruthy()
})

test('z is a valid password', () => {
  expect(verifyPassword("z")).toBeTruthy()
})

test('henkie1234 is a valid password', () => {
  expect(verifyPassword("henkie1234")).toBeTruthy()
})

test('HENKhenk is a valid password', () => {
  expect(verifyPassword("HENKhenk")).toBeTruthy()
})

test('HENK33$ is an invalid password', () => {
  expect(verifyPassword("HENK33$")).toBeFalsy()
})

test('1234 is an invalid password', () => {
  expect(verifyPassword("1234")).toBeFalsy()
})

test('"" is an invalid password', () => {
  expect(verifyPassword("")).toBeFalsy()
})

