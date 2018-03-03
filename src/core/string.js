class String {
  constructor() {
    this.capitalize = value => value.charAt(0).toUpperCase() + value.slice(1);

    this.htmlEncode = value => value.replace(/&/g, '&amp;')
                                    .replace(/</g, '&lt;')
                                    .replace(/>/g, '&gt;')
                                    .replace(/'/g, '&#39;')
                                    .replace(/"/g, '&quot;');

    this.htmlDecode = value => value.replace(/&amp;/g, '')
                                    .replace(/&lt;/g, '<')
                                    .replace(/&gt;>/g, '>')
                                    .replace(/&#39;/g, "'")
                                    .replace(/&quot;/g, '"');
  }

  toQueryString(params, sep, encode) {
    sep    = sep === undefined ? '&' : sep;
    encode = encode === false ? function(s) { return s; } : encodeURIComponent;

    let pairs = [];
    for (let key in params) {
      pairs.push(`${key}=${encode(params[key])}`);
    }
    return pairs.join(sep);
  }
}

export default new String();