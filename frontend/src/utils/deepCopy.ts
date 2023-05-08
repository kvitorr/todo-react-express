export function deepCopy<T>(obj: T): T {
    if (typeof obj !== "object" || obj === null) {
      return obj;
    }
  
    let copy: any;
  
    if (obj instanceof Array) {
      copy = [];
      for (let i = 0; i < obj.length; i++) {
        copy[i] = deepCopy(obj[i]);
      }
      return copy;
    } else {
      copy = {};
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          copy[key] = deepCopy(obj[key]);
        }
      }
      return copy;
    }
  }
  