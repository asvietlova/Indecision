import React from "react";
import Modal from 'react-modal';
import ReactModal from "react-modal";

const OptionModal = (props) => (
    <ReactModal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
        ariaHideApp={false}
        onRequestClose={props.handleDeleteSelectedOption}
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.handleDeleteSelectedOption}>Okey</button>
    </ReactModal>
);

export default OptionModal;