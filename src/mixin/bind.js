export default (target, name, descriptor) => {
  const fn = descriptor.value;

  if (typeof fn !== 'function') {
    throw new Error(`@bind decorator is only applied to functions not: ${typeof fn}`);
  }

  return {
    configurable: true,
    get() {
      return fn.bind(this);
    }
  };
}