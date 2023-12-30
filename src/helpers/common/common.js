export const DaysWeekConverter = (time, type) => {
  if (isNaN(time)) {
    return <div>Invalid input</div>
  }

  let result
  let unit
  if (time >= 40) {
    result = Math.floor(time / 40)
    unit = "weeks"
  } else {
    result = Math.floor(time / 8)
    unit = "days"
  }

  const resultWithUnits = `${result} ${unit}`
  const newResult = result

  return type ? newResult : resultWithUnits
}

export const formatCurrency = (amount, currency, isSymbol = true, isShortenedAmount = true) => {
  if (currency) {
    const convertedAmount = amount * currency?.rate

    if (isShortenedAmount && convertedAmount >= 10000000) {
      const shortenedAmount = Math.round(convertedAmount / 1000) + "k"
      return isSymbol ? `${currency?.symbol} ${shortenedAmount}` : shortenedAmount
    }

    return isSymbol
      ? `${currency?.symbol} ${convertedAmount.toLocaleString("en-IN")}`
      : `${convertedAmount}`
  }

  return `$ ${amount}`
}
