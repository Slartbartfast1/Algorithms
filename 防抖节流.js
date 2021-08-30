function debounce(wait, cb) {
  let timeout;
  return function () {
    timeout = setTimeout(() => cb(), wait);
  }
}
function throttle(time, cb) {
  let valid = true;
  return function () {
    if (!valid) {
      return false
    } else {
      valid = false
      setTimeout(() => {
        cb();
        valid = false;
      }, time)
    }

  }
}