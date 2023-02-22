import * as React from 'react';
import ItemRow from '../../components/ItemRow/ItemRow';
import { Box, Button, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import './Calculator.scss';
import { GlobalContext } from '../../context/GlobalContext';
import { DrinkTypes } from '../../utils/types';
import { calculateMyBeer } from '../../utils/helpers';
import styled from 'styled-components';
import { grey5 } from '../../utils/colors';

const StyledBox = styled(Box)`
  display: flex;
  padding: 50px;
  border: solid 1px ${grey5};
  border-radius: 12px
`

const Calculator: React.FunctionComponent<Props> = (
  props: Props
) => {
  const { invitees, duration, myBeer, setSize, size, level } = React.useContext(GlobalContext)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSize(event.target.value);
  };

  return (
    <StyledBox className='calculator'>
      <Box display={'flex'} flexDirection={'column'} margin={'50px 0'} gap={'50px'} width={'65%'}>
        <Box display={'flex'} flexDirection={'column'}>
          <ItemRow setModal={props.setModalOn} type={DrinkTypes.Beer} beersQty={calculateMyBeer(invitees, duration, size, level)} />
          {myBeer ?
            <Box display={'flex'} flexDirection={'column'} alignSelf={'end'}>
              <p>{myBeer}</p>
              <FormControl>
                {/* <FormLabel id="radio-buttons-group-label">Tamanho</FormLabel> */}
                <RadioGroup
                  defaultValue="Lata"
                  value={size}
                  onChange={handleChange}
                >
                  <Box display={'flex'} flexDirection={'row'}>
                    <FormControlLabel value="355" control={<Radio />} label="Lata (355ml)" />
                    <FormControlLabel value="330" control={<Radio />} label="Long Neck (330ml)" />
                    <FormControlLabel value="600" control={<Radio />} label="Garrafa (600ml)" />
                  </Box>
                </RadioGroup>
              </FormControl>
            </Box>
            : null}
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