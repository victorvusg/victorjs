const object = {
  1: 'first',
  2: 'second',
  3: 'third',
};

object[Symbol.iterator] = function () {
  let index = 0;
  return {
    next: () => {
      if (index >= Object.keys(object).length) {
        return {
          done: true,
          value: undefined,
        };
      } else {
        const key = Object.keys(object)[index++];
        return {
          done: false,
          value: object[key],
        };
      }
    },
  };
};

for (const element of object) {
  console.log(element);
}
