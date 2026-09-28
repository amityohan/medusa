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
})