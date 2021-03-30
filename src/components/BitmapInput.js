import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import React, { useState } from 'react';

function BitmapInput({handleClick, handleOnChange}) {
  const [input, setInput] = useState({bitmap: [], status: false})

  return (
    <div>
        <InputGroup className="mb-3">
          <FormControl
            onChange={handleOnChange}
            placeholder="32 38 07 81 20 C5 82 34"
          />
          <InputGroup.Append>
            <Button
              onClick={handleClick}
              as="input" 
              type="button"
              variant="secondary"
              value="Calculate"
            />
          </InputGroup.Append>
        </InputGroup>
    </div>
  );
}

export default BitmapInput;
