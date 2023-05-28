type MyObject = { id: number } & unknown;

export function removeObjectById(arr: MyObject[], id: number) {
  const objWithIdIndex = arr.findIndex((obj) => obj.id === id);

  if (objWithIdIndex > -1) {
    arr.splice(objWithIdIndex, 1);
  }

  return arr;
}
