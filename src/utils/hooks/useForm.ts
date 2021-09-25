import { useState } from 'react'

const useForm = (initialData = {}) => {
  const [formData, setFormData] = useState<any>(initialData)

  const setValue = (name: string, value: any) => {
    setFormData({ ...formData, [name]: value })
  }

  const clear = () => setFormData(initialData)

  return {
    formData,
    setValue,
    clear,
  }
}

export default useForm
