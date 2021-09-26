import { useState } from 'react'

const useForm = (initialData?: any) => {
  const [formData, setFormData] = useState<any>(initialData || {})

  const setValue = (name: string, value: any) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const clear = () => setFormData(initialData)

  return {
    formData,
    setValue,
    clear,
  }
}

export default useForm
