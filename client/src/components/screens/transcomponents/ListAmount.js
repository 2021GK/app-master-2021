  
import React, {useContext} from 'react'
import {GlobalContext} from '../../../context/GlobalState';

export const ListAmount = ({extp}) => {
    const {transactionlist} = useContext(GlobalContext);
    



    const chTrx=transactionlist.filter(trx => trx.expensetype === extp);

    const amounts = chTrx.map(trx => trx.amount);
    let sum=0;
    for (let i=0; i<amounts.length; i++) {
        sum+=parseFloat(amounts[i]);
    }
 



    return (
        <div className='trans-list-amount'>
            <h4>{sum}€</h4>
        </div>
    )
}