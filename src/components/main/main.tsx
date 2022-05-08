import { useState } from 'react';

import PipInput from '../pip_input/pip_input';
import BuySellButtons from '../buy_sell_buttons/buy_sell_buttons';
import CalculatedValues from '../calculated_values/calculated_values';
import TargetInput from '../target_input/target_input';


import './main.scss';
import { Alert } from 'react-bootstrap';

export type CalculatedValueType = {
    value: string;
    copied: boolean;
    index: number;
}
 
const Main = () => {
    const DECIMALS = 5;
    const PIPS_VALUE = '0.00230';

    const [values, setValues] = useState<Array<CalculatedValueType>>([]);
    const [pipsValue, setPipsValue] = useState<string>(PIPS_VALUE);
    const [targetValue, setTargetValue] = useState<string>('')
    const [error, setError] = useState<string>('')
    

    const calculateResultValues = (operation: string) => {
        setValues([]);
        const tempValuesArray = [];
        if (!targetValue) {
            setErrorMessage('Ingrese un valor a calcular');
            return;
        }
        let tempNum = parseFloat(Number(targetValue).toFixed(DECIMALS));
        for (let i = 1; i < 6; i++) {
            if (operation === 'ADD') {
                tempNum = Number(tempNum) + parseFloat(Number(pipsValue).toFixed(DECIMALS));
            } else if (operation === 'SUBSTRACT') {
                tempNum = Number(tempNum) - parseFloat(Number(pipsValue).toFixed(DECIMALS));
            }
            tempValuesArray.push({
                value: tempNum.toFixed(DECIMALS),
                copied: false,
                index: i,
            });
        }
        setValues(tempValuesArray);
    }

    const setErrorMessage = (msg: string) => {
        setError(msg);
        setTimeout(() => {
            setError('');
        }, 3000);
    }

    const setPipValueFn = (newPipValue: number) => {
        setPipsValue(newPipValue.toFixed(DECIMALS));
        setValues([]);
    }

    const resetTargetValue = () => {
        setTargetValue('');
        setValues([]);
        setError('');
    }

    const setTargetValueFn = (value: string) => {
        setTargetValue(value);
        setError('');
    }

    const markAsCopied = (index: number) => {
        const updatedValues = values.map((value: CalculatedValueType) => {
            const tempValue = value;
            if (value.index === index) {
                tempValue.copied = true;
            }
            return tempValue;
        });
        setValues(updatedValues);
    }

    return ( 
        <div className='Main'>
            <div className='pip-input'>
                <PipInput
                    pipValue={Number(pipsValue).toFixed(DECIMALS)}
                    setPipValue={setPipValueFn}
                />
            </div>
            <div className='target-input'>
                <TargetInput
                    targetValue={targetValue}
                    setTargetValue={setTargetValueFn}
                    resetTargetValue={resetTargetValue}
                />
            </div>
            <div className='buy-sell-btns'>
                <BuySellButtons
                    setCalculatedValues={calculateResultValues}
                />
            </div>
            {error !== '' && <div className='error-notification'>
                <Alert key={'error'} variant='danger'>
                    {error}
                </Alert>
            </div>}
            <div className='values-list'>
                <CalculatedValues
                    calculatedValues={values}
                    markAsCopied={markAsCopied}
                />
            </div>
        </div>
     );
}
 
export default Main;