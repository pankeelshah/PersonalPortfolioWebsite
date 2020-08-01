import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var title = this.props.data.contactTitle;
      var message = this.props.data.contactMessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">
            <h1>{title}</h1>
            <p className="lead">{message}</p>
         </div>

      </section>
    );
  }
}

export default Contact;