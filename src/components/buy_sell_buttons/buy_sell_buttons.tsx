import Button from 'react-bootstrap/Button';

import './buy_sell_buttons.scss';

interface BuySellButtonsProps {
    setCalculatedValues: (operation: string) => void;
}

const BuySellButtons = ({setCalculatedValues}: BuySellButtonsProps) => {
    const calculateValueBuy = () => {
        if (setCalculatedValues) {
            setCalculatedValues('SUBSTRACT')
        }
    }

    const calculateValueSell = () => {
        if (setCalculatedValues) {
            setCalculatedValues('ADD')
        }
    }

    return ( 
        <div className='BuySellButtons'>
            <Button
                variant='danger'
                size='lg'
                onClick={calculateValueSell}
                className='sell'
            >
                Sell
            </Button>
            <Button
                variant='primary'
                size='lg'
                onClick={calculateValueBuy}
                className='buy'
            >
                Buy
            </Button>
        </div>
     );
}
 
export default BuySellButtons;