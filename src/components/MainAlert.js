import Alert from 'react-bootstrap/Alert';
import React, { useState } from 'react';

function MainAlert(props) {
  return (
    <div>
        {props.status && <Alert 
          children={props.text}
          variant={props.variant}
        />}
    </div>
  );
}

export default MainAlert;
