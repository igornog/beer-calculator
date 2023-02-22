
import { Box, Button, Card } from '@mui/material';
import * as React from 'react';
import { GlobalContext } from '../../context/GlobalContext';

const BrandCard: React.FunctionComponent<Props> = (
  props: Props
) => {
  const { setMyBeer } = React.useContext(GlobalContext)

  const setBeer = () => {
    setMyBeer(props.brand)
    props.onClose(false)
  }

  return (
    <Button onClick={setBeer}>
    <Card>
      <Box padding={'30px 0'}>
        <h4>{props.brand}</h4>
      </Box>
    </Card>
    </Button>
  )
}

interface Props {
  brand: string
  onClose: (modalOn: boolean) => void
}

export default BrandCard