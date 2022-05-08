import { ListGroup } from "react-bootstrap";

import CalculatedValueItem from "./calculated_value_item";
import { CalculatedValueType } from "../main/main";

import './calculated_values.scss';

interface CalculatedValuesProps {
    calculatedValues: CalculatedValueType[];
    markAsCopied: Function;
}

const CalculatedValues = ({
    calculatedValues,
    markAsCopied,
}: CalculatedValuesProps) => {
    return (
        <ListGroup as="ul" className='CalculatedValues'>
            {calculatedValues.map((calculatedValue: CalculatedValueType, index: number) => {
                return (
                    <CalculatedValueItem
                        itemValue={calculatedValue.value}
                        key={index}
                        copied={calculatedValue.copied}
                        markAsCopied={markAsCopied}
                        index={index}
                    />
                )
            })}
        </ListGroup>
    );
}
 
export default CalculatedValues;