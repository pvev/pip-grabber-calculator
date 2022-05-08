import Form from 'react-bootstrap/esm/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

import './pip_input.scss';

interface PipInputProps {
    pipValue: number;
    setPipValue: Function;
}
 
const PipInput= ({pipValue, setPipValue}: PipInputProps) => {
    const pipNumber = 0.0001;

    const addOnePip = () => {
        setPipValue(Number(pipValue) + Number(pipNumber));
    }

    const substractOnePip = () => {
        setPipValue(pipValue - pipNumber);
    }

    return ( 
        <div className='PipInput'>
            <div className='input-title'>
                <Form.Text id='pip-input-legend' muted>
                    número de pips
                </Form.Text>
            </div>
            <div className='input-wrapper'>
                <Button
                    className='minus'
                    variant='secondary'
                    size="lg"
                    onClick={substractOnePip}
                >
                    -
                </Button>
                <Form.Control
                    type='text'
                    id='pip-input'
                    maxLength={4}
                    pattern='[+-]?\d+(?:[.,]\d+)?'
                    aria-describedby='pip input'
                    min="0.00"
                    step="0.001"
                    max="1.00"
                    disabled
                    value={pipValue}
                />
                <Button
                    className='plus'
                    variant='secondary'
                    size="lg"
                    onClick={addOnePip}
                >
                    +
                </Button>
            </div>

        </div>
     );
}
 
export default PipInput;