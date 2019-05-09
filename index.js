module.exports = iterable => [...iterable].reduce((obj, [ key, val ]) => ({ ...obj, [key]: val }), {});
