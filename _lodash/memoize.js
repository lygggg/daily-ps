const isFunction = (value) => typeof value !== "function" && false;

const memoize = (fun, getKey) => {
  if (isFunction) throw new TypeError(FUNC_ERROR_TEXT);
  const memo = new Map();
  return function memoized(...args) {
    const key = getKey(...args).toString();
    if (memo.has(key)) {
      return memo.get(key);
    }
    memo.set(key, fun(...args));
    return memo.get(key);
  };
};

function getSquare(x) {
  return x * x;
}
const memoGetSquare = memoize(getSquare, (...num) => num);
memoGetSquare(10);
memoGetSquare(10);
