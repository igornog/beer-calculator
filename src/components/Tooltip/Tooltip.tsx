import * as React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

const Tooltips: React.FunctionComponent<Props> = (
  props: Props
) => {
  return (
    <div>
      <Tooltip TransitionComponent={Zoom} title={props.text}>
        <Button>{props.text}</Button>
      </Tooltip>
    </div>
  )
}

interface Props {
  text: string
}

export default Tooltips