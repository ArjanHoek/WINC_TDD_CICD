// Utility functions
const isNotNull = str => str !== null;

const hasRightLength = str => isNotNull(str) && str.length < 9;

const hasUpperCaseCharacter = str => isNotNull(str) && str.toLowerCase() !== str;

const hasLowerCaseCharacter = str => isNotNull(str) && str.toUpperCase() !== str;

const hasDigit = str => isNotNull(str) && str.split("").some(c => !isNaN(c)); // Not sure if this covers all cases

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
