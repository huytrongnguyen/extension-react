export default (target, name, descriptor) => {
  const fn = descriptor.value;

  if (typeof fn !== 'function') {
    throw new Error(`@injectProps decorator is only applied to functions not: ${typeof fn}`);
  }

  descriptor.value = function() {
    return fn.bind(this)(this.props);
  };
  return descriptor;
}