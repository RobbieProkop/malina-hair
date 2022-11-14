const Modal = () => {
  const closeModal = (e) => {
    e.preventDefault();

    // const modalContainer = (document.getElementById("modal").style.display =
    //   "none");
  };

  return (
    <div className="modal-container" id="modal">
      <div className="modal">
        <button className="close-btn" id="close" onClick={closeModal}>
          <strong>X</strong>
        </button>
        <div className="modal-header">
          <h3>Sign Up</h3>
        </div>
        <div className="modal-content">
          <p>
            Register to get weekly updates and tips for proper hair treatment
          </p>

          <form className="modal-form">
            <div>
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                className="form-input"
                placeholder="Enter Your Name"
              />
            </div>
            <div>
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="Enter Your Email"
              />
            </div>
            <div>
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                className="form-input"
                placeholder="Enter Your Password"
              />
            </div>
            <div>
              <label for="password2">Confirm Password</label>
              <input
                type="password"
                id="password2"
                className="form-input"
                placeholder="Confirm Your Password"
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
