import * as _ from "lodash";
export function getAuthorType(name: string) {
  if (name == "") {
    return "";
  }
  if (name.includes("jeff")) {
    return "Ninja - ";
  } else {
    return "Normal - ";
  }
}
export function numberType(num: number): string {
  if (num % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}
export function getPriorities(isStringKey) {
  return _
    .range(0, 50)
    .map(number => {
      if (isStringKey) {
        return { id: "" + number, name: "" + number };
      } else {
        return { id: number, name: "" + number };
      }
    })
    .reverse();
}
