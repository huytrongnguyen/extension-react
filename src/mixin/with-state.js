export default (target, name, descriptor) => {
  const fn = descriptor.value;

  if (typeof fn !== 'function') {
    throw new Error(`@withState decorator is only applied to functions not: ${typeof fn}`);
  }

  descriptor.value = function() {
    return fn.bind(this)(this.state);
  };
  return descriptor;
}