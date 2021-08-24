import React from 'react';



export const ModalInfo = ({showModal, setShowModal, modalTitle, modalText}) =>  {
    return (
        <>
        {showModal && (
        <div className="modal-container">
        <div className="modal-wrapper">
        <div className="modal-content">
            <h1>{modalTitle}</h1>
            <p>{modalText}</p>
            <button className="todo-btn" onClick={() => setShowModal(prev => !prev)}>Close </button>
            </div>
        </div>
        </div>)}
        </>
    );
}