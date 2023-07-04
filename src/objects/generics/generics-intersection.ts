function UnionObjects<O1, O2>(obj1: O1, obj2: O2): O1 & O2 {
  // return { ...obj1, ...objs2 };
  return Object.assign({}, obj1, obj2);
}

const obj1 = { key1: '1' };
const obj2 = { key2: '2' };

const union = UnionObjects(obj1, obj2);
console.log(union);
