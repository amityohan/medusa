import { describe, expect, it } from "vitest"
import { getUnfulfilledItemTotals } from "./get-unfulfilled-item-totals"

describe("getUnfulfilledItemTotals", () => {
  it("returns the full line total when none of the item is fulfilled", () => {
    expect(
      getUnfulfilledItemTotals({
        quantity: 2,
        fulfilledQuantity: 0,
        unitPrice: 449,
      })
    ).toEqual({ quantity: 2, total: 898 })
  })

  it("returns the remaining quantity and total after partial fulfillment", () => {
    expect(
      getUnfulfilledItemTotals({
        quantity: 2,
        fulfilledQuantity: 1,
        unitPrice: 449,
      })
    ).toEqual({ quantity: 1, total: 449 })
  })

  it("preserves fractional unit prices in the remaining total", () => {
    expect(
      getUnfulfilledItemTotals({
        quantity: 3,
        fulfilledQuantity: 2,
        unitPrice: 12.34,
      })
    ).toEqual({ quantity: 1, total: 12.34 })
  })
})