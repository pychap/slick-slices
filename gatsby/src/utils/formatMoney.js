const formatter = Intl.NumberFormat('en-US', {
  style: 'currency',
  // below will format as it's needed
  currency: 'USD',
})

export default function  formatMoney(cents) {
  return formatter.format(cents / 100);
}