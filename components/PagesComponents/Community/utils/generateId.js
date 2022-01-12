function id(prefix = 'id') {
  let lastId = 0;
  return function () {
    lastId++;
    return `${prefix}${lastId}`;
  }
}

export const generateId = id()