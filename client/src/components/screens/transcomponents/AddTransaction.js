import {useState, useContext} from 'react'
import {GlobalContext} from '../../../context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] =useState("");
    const [amount, setAmount] = useState(0);
    const [expensetype, setExType] = useState("misc");
    const currentEmail= localStorage.getItem("currentEmail");

    const {addTransaction} =useContext(GlobalContext);


    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            currentEmail: currentEmail,
            currentData: {
            _id: Math.floor(Math.random() *1000000),
            text,
            expensetype,
            amount
        }}

         addTransaction(newTransaction);
         setText('')
         setAmount(0)
    }
    

    return (
        <>
           <h3 className="trans-title-h3">Dodaj novi trošak</h3> 
           <form className="trans-form" onSubmit={onSubmit}>
               <div className="trans-form-div">
                   <input className="trans-form_input" type="text" value={text} placeholder=" " onChange={e => setText(e.target.value)}/>
                   <label htmlFor="" className="trans-form_label">Naziv</label>
               </div>
               <div className="trans-form-div">
                    <input className="trans-form_input" type="number" min="0" value={amount} placeholder=" " onChange={e => setAmount(e.target.value)}/>
                    <label className="trans-form_label" htmlFor="">Iznos</label>
               </div>
               <div className="trans-radio">
                <input className="trans-radio_input" type="radio" id="cat1" name="ex-type" value="trans" onChange={e => setExType(e.target.value)}/>
                 <label className="trans-radio_label" htmlFor="cat1">Transport</label>
                 <input className="trans-radio_input" type="radio" id="cat2" name="ex-type" value="hotel"  onChange={e => setExType(e.target.value)}/>
                 <label className="trans-radio_label" htmlFor="cat2">Hotel</label>
                <input className="trans-radio_input" type="radio" id="cat3" name="ex-type" value="dt" onChange={e => setExType(e.target.value)}/>
                <label className="trans-radio_label" htmlFor="cat3">Izleti</label>
                <input className="trans-radio_input" type="radio" id="cat4" name="ex-type" value="fc" onChange={e => setExType(e.target.value)}/>
                <label className="trans-radio_label" htmlFor="cat4">Hrana</label> 
                <input className="trans-radio_input" type="radio" id="cat5" name="ex-type" value="misc" onChange={e => setExType(e.target.value)}  />
                <label  className="trans-radio_label" htmlFor="cat5">Razno</label>
               </div>
               <button className="trans-btn-expense">Dodaj</button>
           </form>
        </>
    )
}