'use strict'

/**
 * @namespace mathAlgebra
 */
const abs = Math.abs

function gaussian (A) {
  /**
* Gaussian elimination
* @param  array A matrix + vector
* @return array x solution vector
*/
  let i, k, j
  const len = A.length

  for (i = 0; i < len; i++) {
    // Search for maximum in this column
    let [maxEl, maxRow] = [abs(A[i][i]), i]
    for (k = i + 1; k < len; k++) {
      if (abs(A[k][i]) > maxEl) {
        maxEl = abs(A[k][i])
        maxRow = k
      }
    }
    // Swap maximum row with current row (column by column)
    for (k = i; k < len + 1; k++) {
      const tmp = A[maxRow][k]
      A[maxRow][k] = A[i][k]
      A[i][k] = tmp
    }
    // Make all rows below this one 0 in current column
    for (k = i + 1; k < len; k++) {
      const c = -A[k][i] / A[i][i]
      for (j = i; j < len + 1; j++) {
        if (i === j) {
          A[k][j] = 0
        } else {
          A[k][j] += c * A[i][j]
        }
      }
    }
  }
  // 解恒等式 Ax=b
  const x = '0'.repeat(len).split('')
  for (i = len - 1; i > -1; i--) {
    x[i] = A[i][len] / A[i][i]
    for (k = i - 1; k > -1; k--) {
      A[k][len] -= A[k][i] * x[i]
    }
  }
  return x
}
module.exports = {
  gaussian
}