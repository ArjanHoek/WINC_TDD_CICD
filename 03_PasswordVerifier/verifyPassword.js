// Utility functions
const isNotNull = str => str !== null;

const hasRightLength = str => str.length < 9;

const hasUpperCaseCharacter = str => str.toLowerCase() !== str;

const hasLowerCaseCharacter = str => str.toUpperCase() !== str;

const hasDigit = str => str.split("").some(c => !isNaN(c));

const minimumConditionsReached = conditions => conditions.filter(bool => bool).length >= 3;

const verifyPassword = password => {
  const conditions = [
    isNotNull(password),
    hasRightLength(password),
    hasUpperCaseCharacter(password),
    hasLowerCaseCharacter(password),
    hasDigit(password)
  ];

  const result =
    minimumConditionsReached(conditions) && hasLowerCaseCharacter(password);

  return result;
};

module.exports = {
  verifyPassword,
  hasRightLength,
  isNotNull,
  hasUpperCaseCharacter,
  hasLowerCaseCharacter,
  hasDigit,
  minimumConditionsReached
};
