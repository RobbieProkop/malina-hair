const Modal = () => {
  const closeModal = (e) => {
    e.preventDefault();

    if (
      e.target.id === "modal" ||
      e.target.id === "close" ||
      e.target.parentElement.id === "close"
    )
      document.getElementById("modal").style.display = "none";
    document.body.style.setProperty("overflow", "unset");
  };

  return (
    <div className="modal-container" id="modal" onClick={closeModal}>
      <div className="modal">
        <button className="close-btn" id="close" onClick={closeModal}>
          <strong>X</strong>
        </button>
        <div className="modal-header">
          <h3>Book your next appointment!</h3>
        </div>
        <div className="modal-content">
          <p>How can I help you? Send me a message!</p>

          <form className="modal-form">
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="form-input"
                placeholder="Enter Your Name"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="Enter Your Email"
              />
            </div>
            <div>
              <label htmlFor="textarea">Message</label>
              <textarea
                id="textarea"
                className="form-input textarea"
                placeholder="Write a message"
                rows="5"
              />
            </div>
            <input type="submit" value="Submit" className="submit-btn" />
          </form>
        </div>
      </div>
    </div>
  );
};
export default Modal;
