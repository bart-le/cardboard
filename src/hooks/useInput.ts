import { useState } from 'react'

export const useInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue)

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(event.currentTarget.value)
  }

  const resizeCoefficient =
    value.length >= 30 ? Math.floor(value.length / 30) : 0

  const size = resizeCoefficient < 14 ? 14 - resizeCoefficient : 1

  return {
    handleChange,
    value,
    size,
  }
}
