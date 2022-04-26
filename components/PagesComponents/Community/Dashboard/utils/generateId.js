function id(prefix = 'id') {
  let lastId = 0;
  return function () {
    lastId += 1;
    return `${prefix}${lastId}`;
  };
}

export const generateId = id();