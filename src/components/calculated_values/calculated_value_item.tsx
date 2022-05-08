import { useState } from "react";
import { Badge, ListGroup } from "react-bootstrap";
import { copyToClipboardUtility } from "../../utils";

interface CalculatedValueItemProps {
    itemValue: string;
    copied: boolean;

    markAsCopied: Function;
    index: number;
}
 
const CalculatedValueItem = ({
    itemValue,
    copied,
    markAsCopied,
    index,
}: CalculatedValueItemProps) => {
    const [localCopied, setLocalCopied] = useState<boolean>(copied);

    const copyToClipboard = () => {
        setLocalCopied(true);
        console.log(itemValue);
        copyToClipboardUtility(String(itemValue));
        if (markAsCopied) {
            markAsCopied(index);
        }
    }

    return (
        <ListGroup.Item
            as="li"
            onClick={copyToClipboard}
            active={localCopied}
        >
            {itemValue}
            {localCopied && (
                <Badge pill bg="success" className="copied">
                    Copiado
                </Badge>
            )}
        </ListGroup.Item>
    );
}
 
export default CalculatedValueItem;