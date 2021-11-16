export const updateObjectInArray = (items, itemId, objPropName, newObject) => {
  return items.map((u) => {
    if (u[objPropName] === itemId) {
      return { ...u, ...newObject };
    } else {
      return u;
    }
  });
};
