const checkType = (target) => {
  const CONSTRUCTOR_TYPE = {
    "[object Array]": copyArray,
    "[object Object]": copyObject,
    "[object Map]": copyMap,
    "[object Set]": copySet,
    "[object Date]": copyDate,
    "[object RegExp]": copyRegExp,
  };
  const type = Object.prototype.toString.call(target);
  return CONSTRUCTOR_TYPE[type];
};

const copyObjectDeep = (target) => {
  const isObject = checkType(target);
  if (isObject) return isObject(target);
  return target;
};

function copyObject(target) {
  const result = {};
  for (let key of Object.keys(target)) {
    result[key] = copyObjectDeep(target[key]);
  }
  return result;
}

function copyArray(target) {
  const result = [];
  for (let index in target) {
    result[index] = copyObjectDeep(target[index]);
  }
  return result;
}

function copyMap(target) {
  const result = new Map();
  target.forEach((value, key) => result.set(key, copyObjectDeep(value)));
  return result;
}

function copySet(target) {
  const result = new Set();
  target.forEach((prop) => result.add(copyObjectDeep(prop)));
  return result;
}

function copyRegExp(target) {
  return new RegExp(target.source, target.flags);
}

function copyDate(target) {
  return new Date(target.getTime());
}

const obj = {
  bigInt: BigInt(1),
  date: Date(),
  string: "ss",
  number: 123,
  reg: new RegExp("ab/c"),
  isNaN: 123 / "a",
  infinity: 123 / 0,
  arr: [1],
  undefined: undefined,
  null: null,
  symbol: Symbol(1),
  obj1: {
    obj2: {
      test: 100,
      obj3: [1, 2, 3],
    },
  },
  fun: function () {
    return 100;
  },
};

test("객체 안에 객체안에 객체가 있어도 복사할 수 있다.", () => {
  const copyObj = copyObjectDeep(obj);
  expect(copyObj.obj1.obj2.test).toEqual(100);
});

test("Map,Set를 복사할 수 있다.", () => {
  const map = new Map();
  map.set(1, "a");
  const set = new Set();
  set.add("응애");
  expect(copyObjectDeep(map)).toEqual(map);
  expect(copyObjectDeep(set)).toEqual(set);
});

test("객체 안에 배열을 복사할 수 있다.", () => {
  const copyObj = copyObjectDeep(obj);
  expect(copyObj.obj1.obj2.obj3).toEqual([1, 2, 3]);
});

test("객체에 함수를 복사할 수 있다.", () => {
  const copyObj = copyObjectDeep(obj);
  expect(copyObj.fun()).toBe(100);
});

test("객체에 Date객체, 정규표현식, Infinity등을 복사할 수 있다.", () => {
  const copyObj = copyObjectDeep(obj);
  expect(copyObj).toEqual(obj);
});

test("객체의 불변성을 테스트한다.", () => {
  const copyObj = copyObjectDeep(obj);
  const recursiveDeepTest = (obj, copyObj) => {
    for (let key in obj) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        expect(obj[key] === copyObj[key]).toBe(false);
        recursiveDeepTest(obj[key], copyObj[key]);
      }
    }
  };
  recursiveDeepTest(obj, copyObj);
});
