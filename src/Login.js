import React from "react";
import Modal from "react-modal";
import bcrypt from "bcrypt";

const customStyles = {
  content: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    color: "rgba(255, 255, 255, 1)"
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)"
  }
};
const textStyle = {
  color: "black"
};
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      email: "",
      password: ""
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }
  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    this.subtitle.style.color = "#black";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handleEmailChange(event) {
    let value = event.target.value.trim();
    this.setState({ email: value });
  }

  handlePasswordChange(event) {
    let value = event.target.value.trim();
    this.setState({ password: value });
  }

  handleSubmit(event) {
    this.onLogin();
  }

  onLogin() {
    let newLogin = {
      email: this.state.email,
      password: this.state.password
    };
    console.log("NEW LOGIN", newLogin);
    this.props.sendNewLogin(newLogin);
    this.closeModal();
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Login</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Login"
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>Login</h2>
          <form>
            <ul>
              <input
                style={textStyle}
                id="email"
                type="text"
                placeholder="email"
                value={this.state.value}
                onChange={this.handleEmailChange}
              />
              <br />
              <br />
              <input
                style={textStyle}
                id="password"
                type="password"
                placeholder="password"
                value={this.state.value}
                onChange={this.handlePasswordChange}
              />
            </ul>
            <button type="button" style={textStyle} onClick={this.handleSubmit}>
              Submit
            </button>
          </form>
        </Modal>
      </div>
    );
  }
}

// ReactDOM.render(<Login />);
export default Login;
