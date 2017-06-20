/**
* Converts a string with underscore to camelCase
* @param {String} string with underscores
*/

export function camelizeUnderscore(string) {
  return string.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
}

/**
* Converts an object with underscore props to camelCase props
* @param {Object} object with underscore props
*/

export function camelizeUnderscoreObjProps(obj) {
  return applyPropsConversion(obj, camelizeUnderscore);
}

/**
* Converts an object with uppercase props to lowercase props
* @param {Object} object with uppercase props
*/

export function lowercaseProps(obj) {
  return applyPropsConversion(obj, (key) => key.toLowerCase());
}

function applyPropsConversion(obj, conversion) {
  if (!obj || typeof obj !== 'object') {
    return obj;
  }

  if (obj instanceof Array) {
    return obj.map((prop) => applyPropsConversion(prop, conversion));
  }

  return Object.keys(obj).reduce((result, key) => {
    let prop = obj[key];
    prop = applyPropsConversion(prop, conversion);

    // eslint-disable-next-line no-param-reassign
    result[conversion(key)] = prop;

    return result;
  }, {});
}
