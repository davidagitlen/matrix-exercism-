//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(numbers) {
    this.numbers = numbers.split('\n');
  }

  get rows() {
    return this.numbers.map(nums => nums.split(' ').map(num => parseInt(num)))
  }

  get columns() {
    return this.rows[0].map((firstValue, i) => this.rows.map(value => value[i]))
  }
}
