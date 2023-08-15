const findRoot = (firstParameter, secondParameter, mainFunction, numberOfIterations) => {
  
  validateFunction(firstParameter,secondParameter,mainFunction)
  // Declare m
  const meanParameter = (firstParameter + secondParameter) / 2
  
  // Recursion terminal condition
  if (numberOfIterations === 0) { return meanParameter }
  
  // Find the products of f(m) and f(a), f(b)
  const fm = mainFunction(meanParameter)
  const productOfFunctionAndA = fm * mainFunction(firstParameter)
  const productOfFunctionAndB = fm * mainFunction(secondParameter)
  
  // Depending on the sign of the products above, decide which position will m fill (a's or b's)
  if (productOfFunctionAndA > 0 && productOfFunctionAndB < 0) return findRoot(meanParameter, secondParameter, func, --numberOfIterations)
  else if (productOfFunctionAndA < 0 && productOfFunctionAndB > 0) return findRoot(firstParameter, meanParameter, func, --numberOfIterations)
  else throw Error('Unexpected behavior')
}


function validateFunction(firstParameter,secondParameter,mainFunction){
  
  const belongsToDomain = (anyNumber, anyFunction) => {
    const result = anyFunction(anyNumber)
    return !Number.isNaN(result)
  }
  
  const hasRoot = (firstParameter, secondParameter, mainFunction) => {
    return mainFunction(firstParameter) * mainFunction(secondParameter) < 0
  }

  // Check if a given  real value belongs to the function's domain
  if (!belongsToDomain(firstParameter, mainFunction) || !belongsToDomain(secondParameter, mainFunction)) throw Error("Given interval is not a valid subset of function's domain")
  // Bolzano theorem
  if (hasRoot(firstParameter, secondParameter, mainFunction) === false) { throw Error('Product f(a)*f(b) has to be negative so that Bolzano theorem is applied') }

}


export { findRoot }
