export const qs = {
  stringURL: (url) => {
    return "?" + qs.convertQueryString(url);
  },

  convertQueryString: (data: object | any) => {
    if (!Object.keys(data).length) return "";
    const pairs: string[] = [];
    for (let prop in data) {
      if (data.hasOwnProperty(prop)) {
        let k = prop;
        let v: string = data[prop];
        pairs.push(`${k}=${v}`);
      }
    }
    return pairs.join("&");
  },

  convertStringObject: (searchString) => {
    if (!searchString) return false;
    return searchString
      .substring(1)
      .split("&")
      .reduce((result, next) => {
        let pair = next.split("=");
        result[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        return result;
      }, {});
  },
};
