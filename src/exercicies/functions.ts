type MapStringsCallBack = (item: string) => string;

function mapStrings(array: string[], callbackfn: MapStringsCallBack): string[] {
  const newArray: string[] = [];
  for (let i = 0; i < array.length; i++) {
    const newItem = array[i];
    newArray.push(callbackfn(newItem));
  }
  return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMapped = mapStrings(abc, (item) => item.toUpperCase());
console.log(abcMapped);
