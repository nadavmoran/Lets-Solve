export function resetArray(length) {
  var arr = [];
  for (var i = 0; i < length; i++) {
    arr.push(0);
  }
  return arr;
}

/**
 * Make a string from array elemnts
 * @param arr array to make a string from
 */
export function getTextFromList(arr) {
  var text = "";
  for (var i = 0; i < arr.length; i++) {
    text += arr[i] + ", ";
  }
  return text;
}

export function getKeyByValue(object, value) {
  return Object.keys(object).find(key => arraysEqual(object[key], value));
}

export function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
