import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/esm/Form';

import './target_input.scss';

interface TargetInputProps {
    targetValue: number;
    setTargetValue: Function;

    resetTargetValue: () => void;
}
 
const TargetInput= ({
    targetValue,
    setTargetValue,
    resetTargetValue,
}: TargetInputProps) => {

    const reset = () => {
        if (resetTargetValue) {
            resetTargetValue();
        }
    }

    return ( 
        <div className='TargetInput'>
            <div className='input-title'>
                <Form.Text id='target-input-legend' muted>
                    Ingresa el número que quieres calcular
                </Form.Text>
            </div>
            <div className='input-wrapper'>
                <Form.Control
                    type='text'
                    id='target-input'
                    pattern='[+-]?\d+(?:[.,]\d+)?'
                    aria-describedby='target input'
                    placeholder='Ingresa el número que quieres calcular'
                    value={targetValue}
                    autoFocus
                    onChange={(e) => setTargetValue(e.target.value)}
                    onClick={() => reset()}
                />
                <Button
                    variant="success"
                    size={"lg"}
                    onClick={() => reset()}
                >
                    LIMPIAR
                </Button>
            </div>

        </div>
     );
}
 
export default TargetInput;