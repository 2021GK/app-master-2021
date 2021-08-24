import React, {useContext, useState, useEffect} from 'react'
import {GlobalContext} from '../../../context/GlobalState';

export const TransactionCalculation = () => {
    const {transactionlist} =useContext(GlobalContext);
    
    const [budget, setBudget]=useState(0);
    const [msg, setMsg]=useState('');
    const [sum, setSum]=useState(0);

    const chTrxM=transactionlist.filter(trx => trx.expensetype === "misc");
    const misc_amounts = chTrxM.map(trx => trx.amount);
    const sum1=misc_amounts.reduce((acc, item) => (acc+=parseFloat(item)),0);

    const chTrxT=transactionlist.filter(trx => trx.expensetype === "trans");
    const trans_amounts = chTrxT.map(trx => trx.amount);
    const sum2=trans_amounts.reduce((acc, item) => (acc+=parseFloat(item)),0);

    const chTrxDT=transactionlist.filter(trx => trx.expensetype === "dt");
    const dt_amounts = chTrxDT.map(trx => trx.amount);
    const sum3=dt_amounts.reduce((acc, item) => (acc+=parseFloat(item)),0);

    const chTrxFC=transactionlist.filter(trx => trx.expensetype === "fc");
    const fc_amounts = chTrxFC.map(trx => trx.amount);
    const sum4=fc_amounts.reduce((acc, item) => (acc+=parseFloat(item)),0);

    const chTrxH=transactionlist.filter(trx => trx.expensetype === "hotel");
    const hotel_amounts = chTrxH.map(trx => trx.amount);
    const sum5=hotel_amounts.reduce((acc, item) => (acc+=parseFloat(item)),0);




    
    const onSubmit =(e) => {
        e.preventDefault()
    }

    useEffect(()=> {
            const ss=sum1+sum2+sum3+sum4+sum5;
            setSum(ss);

            setMsg(budget>sum ? `Ukupni troškovi ${sum}€` : `Budžet manji za: ${budget-sum}€`);
    },[budget,sum,sum1,sum2,sum3,sum4,sum5]);

    return (
        <>
        <div className="trans-total-div">
            <span className="trans-total-span">{msg}</span>
        </div>

<h3 className="trans-bottom-title-h3">Unesi budžet</h3> 
<form onSubmit={onSubmit} className="trans-pom-form">
    <div className="trans-form-div-2">
         <input className="trans-form_input_2" type="number" min="0" value={budget} placeholder=" " onChange={e => setBudget(e.target.value)}/>
         <label className="trans-form_label_2" htmlFor="">Budžet</label><br/>
    </div>
   <div className="p-flex"><input type='submit' value='Potvrdi budžet' className="trans-btn-expense-2"/></div> 
</form>
</>
    )
}