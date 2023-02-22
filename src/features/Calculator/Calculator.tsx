import * as React from 'react';
import ItemRow from '../../components/ItemRow/ItemRow';
import { Box, Button, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import './Calculator.scss';
import { GlobalContext } from '../../context/GlobalContext';
import { DrinkTypes } from '../../utils/types';
import { calculateMyBeer } from '../../utils/helpers';
import styled from 'styled-components';
import { grey5 } from '../../utils/colors';
import { Edit } from 'iconsax-react';
import SizeOptions from '../../components/Radio/Sizes';

const StyledBox = styled(Box)`
  display: flex;
  padding: 50px;
  border: solid 1px ${grey5};
  border-radius: 12px
`

const Calculator: React.FunctionComponent<Props> = (
  props: Props
) => {
  const { invitees, duration, myBeer, setSize, setModalOn, size, level } = React.useContext(GlobalContext)

  return (
    <StyledBox className='calculator'>
      <Box display={'flex'} flexDirection={'column'} margin={'50px 0'} gap={'50px'} width={'65%'}>
        <Box display={'flex'} flexDirection={'column'}>
          <Box display={'flex'} gap={'30px'} alignItems={'flex-end'} justifyContent={'space-between'}>
            <ItemRow setModal={props.setModalOn} type={DrinkTypes.Beer} beersQty={calculateMyBeer(invitees, duration, size, level)} myBeer={myBeer} size={size} />
            {myBeer ?
              <Box display={'flex'} flexDirection={'column'} alignSelf={'end'}>
                <Box display={'flex'} alignItems={'center'} gap={'10px'} justifyContent={'center'}>
                <h2>{myBeer}</h2>
                <Edit onClick={() => setModalOn(true)}/>
                </Box>
                <SizeOptions />
              </Box>
              : null}
          </Box>
        </Box>
        <Box display={'flex'}>
          <Button
            className='add-other'
            variant={'contained'}
          >
            ADICIONAR OUTRAS BEBIDAS
          </Button>
        </Box>
      </Box>
      <Box width={'35%'} padding={'0 2rem'} textAlign={'justify'}>
        <article>
          <h2>Como nossa calculadora funciona?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque pellentesque at amet congue integer eget. At a, ante nullam tempus, mattis in aenean a. Volutpat bibendum sit egestas ultrices  Neque pellentesque at amet congue integer eget. At a, ante nullam tempus, mattis...</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque pellentesque at amet congue integer eget. At a, ante nullam tempus, mattis in aenean a. Volutpat bibendum sit egestas ultrices  Neque pellentesque at amet congue integer eget. At a, ante nullam tempus, mattis...</p>
        </article>
      </Box>
    </StyledBox>
  )
}

interface Props {
  setModalOn: (modalOn: boolean) => void
}

export default Calculator