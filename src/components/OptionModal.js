import React from "react";
import Modal from 'react-modal';
import ReactModal from "react-modal";

const OptionModal = (props) => (
    <ReactModal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
        ariaHideApp={false}
        onRequestClose={props.handleDeleteSelectedOption}
    >
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleDeleteSelectedOption}>Okey</button>
    </ReactModal>
);

export default OptionModal;