function CurrencyInput({currency, amount, onChange}) {
  return (
    <>
        <span>{currency}</span>
        <input
            type='text'
            value={amount}
            onChange={(event) => onChange(currency, event.target.value)}
        />
    </>
  )
}

export default CurrencyInput