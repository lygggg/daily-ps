function isPrime(num) {
  if (num === 1 || num === 0) {
    return false;
  } else if (num === 2) {
    return true;
  } else {
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}
