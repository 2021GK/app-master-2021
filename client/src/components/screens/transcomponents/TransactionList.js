import React, {useContext} from 'react'
import {GlobalContext} from '../../../context/GlobalState';
import {Transaction} from './Transaction';
import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";

export const TransactionList = ({pom}) => {
    const {transactionlist } =useContext(GlobalContext);

    
    

    const choosenTrx = transactionlist.filter(trans=> trans.expensetype ===pom);

  


    return (
        <>
        <SimpleBarReact style={{ maxHeight: 490 }}> 
            {choosenTrx.map(transaction => (<Transaction key={transaction._id} transaction={transaction}/>))}
        </SimpleBarReact>
        </>
    )
}