type GetUnfulfilledItemTotalsInput = {
  quantity: number
  fulfilledQuantity: number
  unitPrice: number
}

export const getUnfulfilledItemTotals = ({
  quantity,
  fulfilledQuantity,
  unitPrice,
}: GetUnfulfilledItemTotalsInput) => {
  const unfulfilledQuantity = quantity - fulfilledQuantity

  return {
    quantity: unfulfilledQuantity,
    total: unitPrice * unfulfilledQuantity,
  }
}