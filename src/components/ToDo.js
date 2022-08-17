import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function ToDo(props) {
  const [modelIsOpen, SetModalOpen] = useState(false);

  function deleteHandler() {
    SetModalOpen(true);
  }

  function cancleHandler() {
    SetModalOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modelIsOpen && (
        <Modal OnCancel={cancleHandler} OnConfirm={cancleHandler} />
      )}
      {modelIsOpen && <Backdrop OnCancel={cancleHandler} />}
    </div>
  );
}

export default ToDo;
