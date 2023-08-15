/**
 *
 * @file
 * @brief Find real roots of a function in a specified interval [a, b], where f(a)*f(b) < 0
 *
 * @details Given a function f(x) and an interval [a, b], where f(a) * f(b) < 0, find an approximation of the root
 * by calculating the middle m = (a + b) / 2, checking f(m) * f(a) and f(m) * f(b) and then by choosing the
 * negative product that means Bolzano's theorem is applied,, define the new interval with these points. Repeat until
 * we get the precision we want [Wikipedia](https://en.wikipedia.org/wiki/Bisection_method)
 *
 * @author [ggkogkou](https://github.com/ggkogkou)
 *
 */

const findRoot = (firstParameter, secondParameter, mainFunction, numberOfIterations) => {
  // Check if a given  real value belongs to the function's domain
  const belongsToDomain = (anyNumber, anyFunction) => {
    const result = anyFunction(anyNumber)
    return !Number.isNaN(result)
  }
  if (!belongsToDomain(firstParameter, mainFunction) || !belongsToDomain(secondParameter, mainFunction)) throw Error("Given interval is not a valid subset of function's domain")

  // Bolzano theorem
  const hasRoot = (firstParameter, secondParameter, mainFunction) => {
    return mainFunction(firstParameter) * mainFunction(secondParameter) < 0
  }
  if (hasRoot(firstParameter, secondParameter, mainFunction) === false) { throw Error('Product f(a)*f(b) has to be negative so that Bolzano theorem is applied') }

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

export { findRoot }
