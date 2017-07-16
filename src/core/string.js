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

  /**
   * Convert certain characters (&, <, >, ', and ") to their HTML character equivalents for literal display in web pages.
   *
   * @param {*} value
   */
  htmlEncode(value) {
    return value.replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/'/g, '&#39;')
                .replace(/"/g, '&quot;');
  }

  /**
   * Convert certain characters (&, <, >, ', and ") from their HTML character equivalents.
   *
   * @param {*} value
   */
  htmlDecode(value) {
    return value.replace(/&amp;/g, '')
                .replace(/&lt;/g, '<')
                .replace(/&gt;>/g, '>')
                .replace(/&#39;/g, "'")
                .replace(/&quot;/g, '"');
  }
}

export default new String;