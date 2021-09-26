import { useNavigate } from 'react-router-dom'
import Button from 'components/Button'
import { NoContentWrapper } from './NoContent.style'

const NoContent = () => {
  const navigate = useNavigate()

  return (
    <NoContentWrapper data-testid="no-content">
      <p>There are no submitted links yet.</p>
      <Button
        variant="primary"
        onClick={() => navigate('/add')}
        data-testid="no-content-button"
      >
        Submit a link
      </Button>
    </NoContentWrapper>
  )
}

export default NoContent
