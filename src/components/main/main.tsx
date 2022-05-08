import { useState } from 'react';

import PipInput from '../pip_input/pip_input';
import BuySellButtons from '../buy_sell_buttons/buy_sell_buttons';
import CalculatedValues from '../calculated_values/calculated_values';
import TargetInput from '../target_input/target_input';


import './main.scss';

export type CalculatedValueType = {
    value: number;
    copied: boolean;
    index: number;
}
 
const Main = () => {
    const [values, setValues] = useState<Array<CalculatedValueType>>([]);
    const [pipsValue, setPipsValue] = useState<number>(0.0023)
    const [targetValue, setTargetValue] = useState<number>(1.0054)

    const calculateResultValues = (operation: string) => {
        const tempValuesArray = [];
        let tempNum = parseFloat(targetValue.toFixed(4));
        for (let i = 1; i < 6; i++) {
            if (operation === 'ADD') {
                tempNum = Number(tempNum) + Number(parseFloat(pipsValue.toFixed(4)));
            } else if (operation === 'SUBSTRACT') {
                tempNum = Number(tempNum) - Number(parseFloat(pipsValue.toFixed(4)));
            }
            tempValuesArray.push({
                value: parseFloat(tempNum.toFixed(4)),
                copied: false,
                index: i,
            });
        }
        setValues(tempValuesArray);
    }

    const setPipValueFn = (newPipValue: number) => {
        setPipsValue(parseFloat(newPipValue.toFixed(4)));
    }

    const resetTargetValue = () => {
        setTargetValue(0);
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
                    pipValue={pipsValue}
                    setPipValue={setPipValueFn}
                />
            </div>
            <div className='target-input'>
                <TargetInput
                    targetValue={targetValue}
                    setTargetValue={setTargetValue}
                    resetTargetValue={resetTargetValue}
                />
            </div>
            <div className='buy-sell-btns'>
                <BuySellButtons
                    setCalculatedValues={calculateResultValues}
                />
            </div>
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