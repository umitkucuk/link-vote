import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid'
import Layout from 'components/Layout'
import Button from 'components/Button'
import { useForm } from 'utils/hooks'
import { useGlobal } from 'utils/context'
import TextField from 'components/TextField'

const initialForm = {
  name: '',
  url: '',
}

const Add = () => {
  const { dispatch } = useGlobal()
  const { formData, setValue, clear } = useForm(initialForm)
  const navigate = useNavigate()

  const onAdd = () => {
    const id = nanoid(10)
    const link = {
      id,
      ...formData,
      points: 0,
      created: new Date().getTime(),
      updated: new Date().getTime(),
    }
    dispatch({ type: 'ADD_LINK', payload: link })
    clear()
  }

  return (
    <Layout>
      <Button variant="primary" onClick={() => navigate('/')}>
        GO BACK
      </Button>
      <h1>Add new link</h1>
      <TextField
        name="name"
        label="Link Name"
        placeholder="e.g. Alphabet"
        value={formData.name}
        onChange={(e) => setValue('name', e.target.value)}
        autoComplete="off"
      />
      <br />
      <br />
      <TextField
        name="url"
        label="Link URL"
        placeholder="e.g. https://abc.xyz"
        value={formData.url}
        onChange={(e) => setValue('url', e.target.value)}
        autoComplete="off"
      />
      <Button variant="primary" onClick={onAdd}>
        ADD
      </Button>
    </Layout>
  )
}

export default memo(Add)
