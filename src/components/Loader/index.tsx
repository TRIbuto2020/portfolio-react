import { PulseLoader } from 'react-spinners'

import { colors } from '../../styles'

import { Container } from './styles'

const Loader = () => {
  return (
    <Container>
      <PulseLoader color={colors.ocBlue} />
    </Container>
  )
}

export default Loader
