import {useEffect, useContext} from 'react';
import {GlobalContext} from '../../context/GlobalState';
import {AddTransaction} from './transcomponents/AddTransaction';
import { TransactionList } from './transcomponents/TransactionList';
import {ListAmount} from './transcomponents/ListAmount';
import { TransactionCalculation } from './transcomponents/TransactionCalculation';
import Navigation from './Navigation';




function TransPage() {
    const { getTransactions } =useContext(GlobalContext);
    const modalText="U formi sa leve strane se može opisati trošak, njegov iznos i kategorija. Klikom na 'dodaj' će se on pojaviti u odgovarajućoj koloni sa desne strane.Takođe, ako uneseš svoj bužet i ukoliko je on manji od ukupnih troškova, prikazaće ti se razika. ";
    const modalTitle='Na ovoj stranici napravi plan troškova';

    useEffect(()=> {
        getTransactions();
    }, []);

    return (
        <div>
            
            <Navigation modalText={modalText} modalTitle={modalTitle}/>
        <div className="trans-container">
            <div className="trans-list trans-list-1"><AddTransaction/><TransactionCalculation/></div>
            <div className="trans-list trans-list-2"><h3 className="trans-title-h3">Transport</h3><ListAmount extp={"trans"}/><TransactionList pom={"trans"}/></div>
            <div className="trans-list trans-list-3"><h3 className="trans-title-h3">Hotel</h3><ListAmount extp={"hotel"}/><TransactionList pom={"hotel"}/></div>
        <div className="trans-list trans-list-4"><h3 className="trans-title-h3">Izleti</h3><ListAmount extp={"dt"}/><TransactionList pom={"dt"}/></div>
        <div className="trans-list trans-list-5"><h3 className="trans-title-h3">Hrana</h3><ListAmount extp={"fc"}/><TransactionList pom={"fc"}/></div>
        <div className="trans-list trans-list-6"><h3 className="trans-title-h3">Razno</h3><ListAmount extp={"misc"}/><TransactionList pom={"misc"}/></div>
        </div>
        </div>
        )
}


export default TransPage;