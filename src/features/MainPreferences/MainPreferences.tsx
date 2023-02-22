import { Box, TextField } from '@mui/material';
import * as React from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import DurationSlider from '../../components/Slider/DurationSlider';
import PreferenceSlider from '../../components/Slider/PreferenceSlider';
import styled from 'styled-components'
import DrinkerLevelSlider from '../../components/Slider/DrinkerLevelSlider';
import { grey5 } from '../../utils/colors';

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 250px;
  padding: 5px;
  align-items: center;
  justify-content: center;
  border: solid 1px ${grey5};
  border-radius: 12px
`
const StyledTextField = styled(TextField)`
  border-radius: 4px;
`

const MainPreferences: React.FunctionComponent = () => {
  const { setInvitees, setDuration, setLevel } = React.useContext(GlobalContext)

  return (
    <Box display={'flex'} justifyContent={'space-around'} gap={'10px'}>
      <StyledBox flexDirection={'column'} width={'100px'}>
        <h4>Convidados</h4>
        <StyledTextField
          InputProps={{
            inputProps: { min: 0 }
          }}
          type="number"
          fullWidth
          onChange={(e) => setInvitees(parseInt(e.currentTarget.value))}
        />
      </StyledBox>

      <StyledBox >
        <h4>Duração do churras (horas)</h4>
        <DurationSlider setDuration={setDuration} />
      </StyledBox>

      <StyledBox >
        <h4>Preferências</h4>
        <PreferenceSlider />
      </StyledBox>

      <StyledBox >
        <h4>Nível</h4>
        <DrinkerLevelSlider setLevel={setLevel} />
      </StyledBox>

    </Box>
  )
}
export default MainPreferences