import * as React from 'react';
import ItemRow from '../../components/ItemRow/ItemRow';
import { Box, Button } from '@mui/material';
import './Calculator.scss';
import { GlobalContext } from '../../context/GlobalContext';
import { DrinkTypes } from '../../utils/types';
import { calculateMyBeer } from '../../utils/helpers';
import styled from 'styled-components';
import { grey5, purple, white } from '../../utils/colors';
import { Edit } from 'iconsax-react';
import SizeOptions from '../../components/Radio/Sizes';

const StyledBox = styled(Box)`
  display: flex;
  padding: 50px;
  border: solid 1px ${grey5};
  border-radius: 12px
`

const StyledArticle = styled(Box)`
  background-color: ${white};
  width: 35%;
  margin: 0 0 0 2rem;
  padding: 0 2rem;
  border-radius: 12px;
`


const StyledDrinkBox = styled(Box)`
  display: flex;
  align-items: center;
  gap: 15px;
  border: solid 1px ${purple};
  border-radius: 12px;
  padding: 24px;

  svg {
    color: #7e22ce;
    width: 20px;
    cursor: pointer;
  }
`

const Calculator: React.FunctionComponent<Props> = (
  props: Props
) => {
  const { invitees, duration, myBeer, setModalOn, size, level } = React.useContext(GlobalContext)

  return (
    <StyledBox className='calculator'>
      <Box display={'flex'} flexDirection={'column'} gap={'50px'} width={'65%'}>
        <StyledDrinkBox>
          <Box display={'flex'} flexDirection={'row'} gap={'30px'} alignItems={'center'} justifyContent={'space-between'}>
            <ItemRow setModal={props.setModalOn} type={DrinkTypes.Beer} beersQty={calculateMyBeer(invitees, duration, size, level)} myBeer={myBeer} size={size} />
            {myBeer ?
              <Box display={'flex'} flexDirection={'column'} alignSelf={'end'}>
                <Box display={'flex'} alignItems={'center'} gap={'10px'} justifyContent={'center'}>
                  <h3>{myBeer}</h3>
                  <Edit onClick={() => setModalOn(true)} />
                </Box>
                <SizeOptions />
              </Box>
              : null}
          </Box>
        </StyledDrinkBox>
        {/* <StyledDrinkBox>
          <Box display={'flex'} flexDirection={'row'} gap={'30px'} alignItems={'flex-end'} justifyContent={'space-between'}>
            <ItemRow setModal={props.setModalOn} type={DrinkTypes.Beer} beersQty={calculateMyBeer(invitees, duration, size, level)} myBeer={myBeer} size={size} />
            {myBeer ?
              <Box display={'flex'} flexDirection={'column'} alignSelf={'end'}>
                <Box display={'flex'} alignItems={'center'} gap={'10px'} justifyContent={'center'}>
                  <h3>{myBeer}</h3>
                  <Edit onClick={() => setModalOn(true)} />
                </Box>
                <SizeOptions />
              </Box>
              : null}
          </Box>
        </StyledDrinkBox>
        <StyledDrinkBox>
          <Box display={'flex'} flexDirection={'row'} gap={'30px'} alignItems={'flex-end'} justifyContent={'space-between'}>
            <ItemRow setModal={props.setModalOn} type={DrinkTypes.Beer} beersQty={calculateMyBeer(invitees, duration, size, level)} myBeer={myBeer} size={size} />
            {myBeer ?
              <Box display={'flex'} flexDirection={'column'} alignSelf={'end'}>
                <Box display={'flex'} alignItems={'center'} gap={'10px'} justifyContent={'center'}>
                  <h3>{myBeer}</h3>
                  <Edit onClick={() => setModalOn(true)} />
                </Box>
                <SizeOptions />
              </Box>
              : null}
          </Box>
        </StyledDrinkBox> */}
        <Box display={'flex'}>
          <Button
            className='add-other'
            variant={'contained'}
          >
            ADICIONAR OUTRAS BEBIDAS
          </Button>
        </Box>
      </Box>
      <StyledArticle >
        <article>
          <h2>Como nossa calculadora funciona?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque pellentesque at amet congue integer eget. At a, ante nullam tempus, mattis in aenean a. Volutpat bibendum sit egestas ultrices  Neque pellentesque at amet congue integer eget. At a, ante nullam tempus, mattis...</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque pellentesque at amet congue integer eget. At a, ante nullam tempus, mattis in aenean a. Volutpat bibendum sit egestas ultrices  Neque pellentesque at amet congue integer eget. At a, ante nullam tempus, mattis...</p>
        </article>
      </StyledArticle>
    </StyledBox>
  )
}

interface Props {
  setModalOn: (modalOn: boolean) => void
}

export default Calculator