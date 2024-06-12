export const formatNumber = (num: number) => {
  if (num === 0) return '0'
  const absNum = Math.abs(num)

  let formatted = ''

  if (absNum > 100000) {
    formatted = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num)
  } else if (absNum > 1 && absNum <= 100000) {
    formatted = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num)
  } else if (absNum <= 1) {
    formatted = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 5,
      maximumFractionDigits: 5,
    }).format(num)
  }

  return formatted.replace(/,/g, ' ')
}
