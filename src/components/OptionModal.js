import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
   <Modal
     isOpen={!!props.selectedOption}
     contentLabel="Selected Options"
     onRequestClose={props.handleCloseModal}
   >
     <h3>Selected Options</h3>
     {props.selectedOption && <p>{props.selectedOption}</p>}
     <button onClick={props.handleCloseModal}>Ok</button>
   </Modal>
);

export default OptionModal;
