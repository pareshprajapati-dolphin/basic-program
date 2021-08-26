export default function ConfimModel({
  handleClose,
  show,
  message,
  id,
  confirmModal,
}) {
  return (
    <div className={show ? "modal d-block" : "modal d-none"}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Delete modal</h5>
            <button type="button" className="close" onClick={handleClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">{message}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => confirmModal(id)}
            >
              Delete
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
