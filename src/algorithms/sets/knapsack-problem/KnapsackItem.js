export default class KnapsackItem {
  /**
   * @param {Object} itemSettings - knapsack item settings,
   * @param {number} itemSettings.value - value of the item.
   * @param {number} itemSettings.weight - weight of the item.
   * @param {number} itemSettings.itemsInStock - how many items are available to be added.
   */
  constructor({ value, weight, itemsInStock = 1 }) {
    this.value = value;
    this.weight = weight;
    this.itemsInStock = itemsInStock;
    // Actual number of items that is going to be added to knapsack.
    this.quantity = 1;
  }
  // 在“类”内部使用get和set关键字，对于属性设置存、取值函数，拦截该属性的存取行为
  get totalValue() {
    return this.value * this.quantity;
  }

  get totalWeight() {
    return this.weight * this.quantity;
  }

  // 系数显示一个单位的重量的值对于目前的项
  // This coefficient shows how valuable the 1 unit of weight is
  // for current item.
  get valuePerWeightRatio() {
    return this.value / this.weight;
  }

  toString() {
    return `v${this.value} w${this.weight} x ${this.quantity}`;
  }
}
