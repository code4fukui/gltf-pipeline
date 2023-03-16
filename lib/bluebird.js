Promise.each = async (arr, fn) => {
  for (const item of arr) {
    await fn(item);
  }
};
