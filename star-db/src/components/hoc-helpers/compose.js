const compose = (...func) => (comp) => {
  return func.reduceRight((prevResult, f) => {
    return f(prevResult);
  }, comp);
};

export default compose;
