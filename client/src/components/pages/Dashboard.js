import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentUser } from "../../actions/authActions";
import "./styles.css";
// const clean = require("../../img/cleaning.jpg");
const student = require("../../img/Studentt.png");
const staff = require("../../img/stafflogo.png");
const bedRoom = require("../../img/service.png");
class Dashboard extends Component {
  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  render() {
    const { user } = this.props.auth;
    return (
      <div className="mid container">
        <div className="text-center" style={{ fontSize: "25px" }}>
          Welcome {user.name}!
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '2rem' }}>

          <div className="card hoverable" style={{ width: "18rem", hover: '', height: '27rem',background:'rgba(45,45,45,0.2)',borderRadius:"10px" }}>
            <img src={student} className="card-img-top" alt="Cleaning" />
            <div className="card-body" style={{ height: '10rem',textAlign:"center" }}>
              <h5 className="card-title">Student</h5>
              <button>

              <a style={{textDecoration:'none',color:'rgba(255,255,255,0.7)'}} href="/student" className="card-text">
                Add new Student and allot Room or Check Info
              </a>
              </button>
            </div>
          </div>

          <div className="card" style={{ width: "18rem", hover: '', height: '27rem',background:'rgba(45,45,45,0.2)',borderRadius:"10px" }}>
            <img style={{height:"345px"}} src={bedRoom} className="card-img-top" alt="Cleaning" />
            <div className="card-body" style={{textAlign:"center"}}>
              <h5 className="card-title">Room Service</h5>
              <button>

              <a style={{textDecoration:'none',color:'rgba(255,255,255,0.7)'}} href="/block">
                Add Room Repair/Cleaning or Check Info
                </a>
              </button>
            </div>
          </div>

          <div className="card" style={{ width: "18rem", hover: '', height: '27rem',background:'rgba(45,45,45,0.2)',borderRadius:"10px" }}>
            <img src={staff} className="card-img-top" alt="Cleaning" />
            <div className="card-body">
              <h5 style={{textAlign:"center"}} className="card-title">Staff Info</h5>
              <button>
              <a style={{textDecoration:'none',color:'rgba(255,255,255,0.7)'}} href="/staff">
                Add more Staff or Check their info
              </a>
              </button>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  // getCurrentUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps
  ,
  { getCurrentUser }
)(Dashboard);
