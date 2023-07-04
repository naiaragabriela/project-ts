type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean;

export function myfilter<T>(array: T[], callbackfn: FilterCallback<T>): T[] {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayFilterOrigin = array1.filter((value) => value < 5);
console.log(arrayFilterOrigin);

const arrayFilter = myfilter(array1, (value) => value < 5);
console.log(arrayFilter);
