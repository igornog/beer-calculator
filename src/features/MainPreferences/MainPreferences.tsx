import { Box, TextField } from '@mui/material';
import * as React from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import DurationSlider from '../../components/Slider/DurationSlider';
import PreferenceSlider from '../../components/Slider/PreferenceSlider';
import styled from 'styled-components'
import DrinkerLevelSlider from '../../components/Slider/DrinkerLevelSlider';
import { grey5 } from '../../utils/colors';
import InfoBox from '../../components/InfoBox/InfoBox';

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 250px;
  margin: 0 0 50px;
  padding: 5px;
  align-items: center;
  justify-content: center;
  border: solid 1px ${grey5};
  border-radius: 12px;
  
  h4 {
    margin-top: 0;
  }
`
const StyledTextField = styled(TextField)`
  border-radius: 4px;
`

const MainPreferences: React.FunctionComponent = () => {
  const { setInvitees, setDuration, setLevel, setPreferences, invitees, duration, preferences, level } = React.useContext(GlobalContext)

  return (
    <Box display={'flex'} justifyContent={'space-around'} gap={'10px'} alignItems={'flex-start'}>
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
        {!invitees ?
          <InfoBox text={'Comece adicionando os convidados aqui'} />
          : null}
      </StyledBox>

      <StyledBox>
        <h4>Duração do churras (horas)</h4>
        <DurationSlider disabled={invitees === 0} setDuration={setDuration} />
        {duration === 0 && invitees ?
          <InfoBox text={'Selecione a duração do churras'} />
          : null}
      </StyledBox>

      <StyledBox >
        <h4>Preferências</h4>
        <PreferenceSlider disabled={invitees === 0 || duration === 0} setPreferences={setPreferences} preferences={preferences} />
        {invitees && duration !== 0 && preferences === 0 ?
          <InfoBox text={'Equilibre a preferência da galera'} />
          : null}
      </StyledBox>

      <StyledBox >
        <h4>Nível</h4>
        <DrinkerLevelSlider disabled={invitees === 0 || duration === 0 || preferences === 0} setLevel={setLevel} />
        {invitees && duration !== 0 && preferences !== 0 && level === 0 ?
          <InfoBox text={'Ajuste o nível da animação do rolê'} />
          : null}
      </StyledBox>

    </Box>
  )
}
export default MainPreferences