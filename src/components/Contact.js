import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var message = this.props.data.contactMessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">
            <p className="lead">{message}</p>
            <h1>test</h1>
            <h4>test</h4>
         </div>

      </section>
    );
  }
}

export default Contact;
