import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid'
import Layout from 'components/Layout'
import Button from 'components/Button'
import { useForm } from 'utils/hooks'
import { useGlobal, useToaster } from 'utils/context'
import TextField from 'components/TextField'

const initialForm = {
  name: '',
  url: '',
}

const Add = () => {
  const { dispatch } = useGlobal()
  const { formData, setValue, clear } = useForm(initialForm)
  const navigate = useNavigate()
  const { addToast } = useToaster()

  const onAdd = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const id = nanoid(10)
    const link = {
      id,
      ...formData,
      points: 0,
      created: new Date().getTime(),
      updated: new Date().getTime(),
    }
    dispatch({ type: 'ADD_LINK', payload: link })
    addToast(
      <span>
        <strong>{link.name}</strong> added.
      </span>,
    )
    clear()
  }

  return (
    <Layout>
      <h2>Add New Link</h2>
      <br />
      <form onSubmit={onAdd}>
        <TextField
          name="name"
          label="Link Name"
          placeholder="e.g. Alphabet"
          value={formData.name}
          onChange={(e) => setValue('name', e.target.value)}
          autoComplete="off"
          data-testid="name-input"
          required
          autoFocus
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
          data-testid="url-input"
        />
        <Button
          variant="primary"
          type="submit"
          margin="0 1.6rem 0 0"
          data-testid="add-button"
        >
          ADD
        </Button>
        <Button
          variant="subtle"
          onClick={() => navigate('/')}
          data-testid="return-button"
        >
          RETURN TO LIST
        </Button>
      </form>
    </Layout>
  )
}

export default memo(Add)
