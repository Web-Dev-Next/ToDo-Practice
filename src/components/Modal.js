function Modal(props) {
  function OnCancelHandler() {
    props.OnCancel();
  }
  function OnConfirmHandler() {
    props.OnConfirm();
  }
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={OnCancelHandler}>
        Cancel
      </button>
      <button className="btn" onClick={OnConfirmHandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
