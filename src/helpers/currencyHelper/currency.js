import { useSelector } from "react-redux"

export const AmountWithSymboal = (amount, isSymbol = true, isShortenedAmount = false) => {
  const { currency } = useSelector((store) => store.currency)
  if (currency) {
    const convertedAmount = amount * currency?.rate

    // Shorten the amount if it's greater than or equal to 1000 and isShortenedAmount is true
    if (isShortenedAmount && convertedAmount >= 1000) {
      const shortenedAmount = Math.round(convertedAmount / 1000) + "k"
      return isSymbol ? `${currency?.symbol} ${shortenedAmount}` : shortenedAmount
    }
    return isSymbol
      ? `${currency?.symbol} ${convertedAmount.toLocaleString("en-IN")}`
      : `${convertedAmount}`
  }
  return `$ ${amount}`
}
