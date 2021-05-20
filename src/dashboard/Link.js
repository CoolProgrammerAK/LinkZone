import React, { Component } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBTypography,
  MDBInput,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBCardText,
  MDBIcon,
} from "mdbreact";
import { deletelink } from "../redux/actions/linkaction";
import { connect } from "react-redux";
import '../styles/link.css'
import { Redirect } from "react-router-dom";
import { validatelink } from "../components/extras";
import { updatedata } from "../redux/actions/linkaction";
class Link extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      handleopen: false,
      title: "",
      link: "",
      error: {},
      uplink: "",
    };
  }
  handleopen = () => {
    this.setState({
      open: true,
    });
  };
  handleclose = () => {
    this.setState({
      open: false,
    });
  };
  handlesubmit = (e) => {
    e.preventDefault();
    this.props.deletelink(this.props.links.id);
    this.setState({
      open: false,
    });
  };

  handle2open = () => {
    this.setState({
      handleopen: true,
    });
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handle2close = () => {
    this.setState({
      handleopen: false,
    });
    this.setState({
      error: {},
    });
  };
  componentDidMount() {
    this.setdatas();
  }
  setdatas = () => {
    this.setState({
      title: this.props.links.title,
      link: this.props.links.links,
    });
  };
  handle2submit = (e) => {
    e.preventDefault();
    e.target.className += " was-validated";
    let link;
    if (
      this.state.link.substring(0, 8) !== "https://" &&
      this.state.link.includes("www.") &&
      this.state.link.substring(0, 7) !== "http://" &&
      this.state.link.includes("www.")
    ) {
      link = `https://${this.state.link}`;
    } else if (
      this.state.link.substring(0, 12) !== "https://www." &&
      this.state.link.substring(0, 11) !== "http://www."
    ) {
      link = `https://www.${this.state.link}`;
    } else {
      link = this.state.link;
    }
    let data = {
      title: this.state.title,
      link: link,
    };
    let errors = validatelink(data).errors;
    let valid = validatelink(data).valid;
    if (!valid) {
      this.setState({
        error: errors,
      });
    } else {
      this.props.updatedata(this.props.links.id, data);
      this.handle2close();
    }
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.link.errors.update) {
      this.setState({ error: nextProps.link.errors.update });
    }
  }

  render() {
    const { links, link, auth } = this.props;
    if (!auth.uid) return <Redirect to="/"></Redirect>;
    const { error } = this.state;
    return (
      <>
        <MDBCard
          className="mx-auto my-2"
          style={{ minWidth: 250, maxWidth: 600 }}
        >
          <MDBCardBody className="text-center" style={{ position: "relative" }}>
            <MDBCardText className="m-0" style={{ fontSize: 18 }}>
              <strong>{links.title}</strong>
            </MDBCardText>
            <div
             id="iconList"
            >
              <MDBIcon
                onClick={this.handle2open}
                style={{ marginRight: 10 }}
                icon="pencil-alt"
              />
              <MDBIcon
                onClick={this.handleopen}
                style={{ marginLeft: 10 }}
                icon="trash-alt"
              />
            </div>
            <div>
              <hr style={{ maxWidth: "70%" }}></hr>
            </div>

            <MDBCardText style={{ fontSize: 17 }}>{links.links}</MDBCardText>
          </MDBCardBody>
        </MDBCard>

        <MDBModal isOpen={this.state.open}>
          <MDBModalHeader className="text-danger border-0">
            <b>Warning </b>
          </MDBModalHeader>
          <MDBModalBody>
            <strong style={{ fontSize: 20 }}>
              Are you sure you want to delete this link?
            </strong>
          </MDBModalBody>
          <MDBModalFooter className="border-0">
            <MDBBtn color="primary" onClick={this.handleclose}>
              Close
            </MDBBtn>
            <MDBBtn color="danger" onClick={this.handlesubmit}>
              Delete
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>

        <MDBModal isOpen={this.state.handleopen}>
          <MDBModalHeader className="text-info border-0">
            <b>Edit </b>
          </MDBModalHeader>
          <MDBModalBody>
            <form className="needs-validation" noValidate>
              <div className="grey-text">
                <MDBInput
                  style={{ marginTop: "2.5rem" }}
                  value={this.state.title}
                  name="title"
                  required
                  onChange={this.handleChange}
                  label="Title"
                  icon="pen"
                  group
                >
                  {error.title && (
                    <div className="invalid-feedback text-center d-block">
                      {error.title}
                    </div>
                  )}
                </MDBInput>
                <MDBInput
                  style={{ marginTop: "2.5rem" }}
                  value={this.state.link}
                  required
                  name="link"
                  onChange={this.handleChange}
                  label="Link"
                  icon="link"
                  group
                  type="url"
                >
                  <div className="invalid-feedback text-center d-block">
                    {error.link}
                  </div>
                </MDBInput>
              </div>

              {link.errors.linkerror && (
                <div className="text-center">
                  <MDBTypography className="text-danger">
                    {link.errors.linkerror}
                  </MDBTypography>
                </div>
              )}
            </form>
          </MDBModalBody>
          <MDBModalFooter className="border-0">
            <MDBBtn color="primary" onClick={this.handle2close}>
              Close
            </MDBBtn>
            <MDBBtn color="success" onClick={this.handle2submit}>
              Save
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </>
    );
  }
}

const mapstatetoprops = (state) => ({
  auth: state.firebase.auth,
  link: state.link,
});

export default connect(mapstatetoprops, { deletelink, updatedata })(Link);
