import React, { useState } from 'react'

export default function CalculadoraTimbres() {
  const [monto, setMonto] = useState('')
  const [resultado, setResultado] = useState(null)

  const calcularTimbres = () => {
    const valor = parseFloat(monto)
    if (isNaN(valor)) {
      setResultado(null)
      return
    }
    const impuesto = Math.max(0.000332 * valor, 1)
    setResultado(impuesto.toFixed(2))
  }

  return (
    <div>
      <label>Monto del Pagaré (CLP):</label>
      <input
        type="number"
        value={monto}
        onChange={(e) => setMonto(e.target.value)}
      />
      <button onClick={calcularTimbres}>Calcular</button>
      {resultado !== null && (
        <p>Impuesto aproximado: ${resultado} CLP</p>
      )}
    </div>
  )
}