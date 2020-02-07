const getMinNumber = (A, B, total = 0) => {
    if (A.length === 0) {
      return total;
    }
  
    let high = Math.max.apply(null, A);
    let min = Math.min.apply(null, B);
    
    A.splice(A.indexOf(high), 1);
    B.splice(B.indexOf(min), 1);
  
    return getMinNumber(A, B, total + high * min);
  };
  
  test("getMinNumber", () => {
    expect(getMinNumber([1, 4, 2], [5, 4, 4])).toBe(29);
  });
  