import React, {useContext} from 'react';
import { TiDeleteOutline } from "react-icons/ti";
import {GlobalContext} from '../../../context/GlobalState';

export const Transaction = ({transaction}) => {

    const {deleteTransaction} =useContext(GlobalContext);
    return (
        <div className="trans-trx trans-trx-d">
            <h4 className="trans-inv-trx trans-trx-s">{transaction.text} {transaction.amount}</h4>
            <TiDeleteOutline className='trans-del-icon' onClick={() => deleteTransaction(transaction._id)}/>
            </div>
            
    )
}