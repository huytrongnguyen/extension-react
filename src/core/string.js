class String {
  toQueryString(params, sep, encode) {
    sep    = sep === undefined ? '&' : sep;
    encode = encode === false ? function(s) { return s; } : encodeURIComponent;

    let pairs = [];
    for (let key in params) {
      pairs.push(`${key}=${encode(params[key])}`);
    }
    return pairs.join(sep);
  }

  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}

export default new String;