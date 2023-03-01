
import React from 'react';

const Button: React.FunctionComponent<Props> = (
  props: Props
) => {
  return (
    <div className="list-item">
      <label htmlFor="title" aria-label={props.title}>
        <input type="text" value={props.title} readOnly={true} name="title" />
      </label>
    </div>
  );
}

interface Props {
  title?: string
}

export default Button