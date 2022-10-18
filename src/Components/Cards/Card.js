import React, { Component } from "react";
import './Card.css';
import { BsFillEnvelopeFill } from "react-icons/bs";
import PropTypes from "prop-types";

class Card extends Component {
  static propTypes = {
    heading: PropTypes.string,
    subHeading: PropTypes.string,
    content: PropTypes.string,
    index: PropTypes.number,
    email: PropTypes.string
  };

  render() {
    const {heading, subHeading, content, index, email} = this.props;
    return (
      <div className='card-container' key={"card"+index}>
          <div className="card-left-wrapper">
            <div className="card-profile-icon">
            </div>
            <div className="card-email-icon">
              <a href={`mailto:${email}`}><BsFillEnvelopeFill/></a>
            </div>
          </div>
          <div className="card-right-wrapper">
            <div className="card-heading">{heading}</div>
            <div className="card-sub-heading">{subHeading}</div>
            <div className="card-details">{content}</div>
          </div>
        
      </div>
    );
  }
}

export default Card;