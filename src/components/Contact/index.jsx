import React, { Component } from 'react';
import { Element } from 'react-scroll';
import SectionWaypoint from '../SectionWaypoint';
import SectionTitle from '../SectionTitle';
import './Contact.css';


class Contact extends Component {

  state = {
    name: null,
    email: null,
    message: null,
  }

  handleFormChange = (event) => {
    console.log(this.state);
    const formField = event.target.name;
    const value = event.target.value;
    const formData = this.state;
    formData[formField] = value;
    this.setState(formData);
  }

  isEmailValid = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  isFormIncomplete = () => {
    return this.state.name === null 
      || !this.isEmailValid(this.state.email)
      || this.state.message === null
  }

  render() {
    return (
      <Element 
        name='contact' 
        className='contact__wrapper'
      > 
        <SectionTitle 
          title='Contact'
        />
        <div className='contact__form-wrapper'>
          <p className='contact__form-header'>Want to get in touch? Send me a message and I'll get back to you as soon as I can</p>
          <form className='contact__form' method="POST" action="https://formspree.io/alecr1997@gmail.com">
            <label className='contact__form-field'>
              <p className='contact__form-field-text'>Name</p>
              <input 
                type='text' 
                name='name' 
                className='contact__form-field-input' 
                onChange={this.handleFormChange} 
              />
            </label>
            <label className='contact__form-field'>
              <p className='contact__form-field-text'>Email</p>
              <input 
                type='text' 
                name='email' 
                className='contact__form-field-input' 
                onChange={this.handleFormChange} 
              />
            </label>
            <label className='contact__form-field'>
              <p className='contact__form-field-text'>Message</p>
              <textarea 
                type='text' 
                name='message' 
                className='contact__form-field-input contact__form-field-input--large' 
                onChange={this.handleFormChange}
              />
            </label>
            <button 
              className='contact__form-submit-button box-button '
              disabled={this.isFormIncomplete()}
            >
              SEND
            </button>
          </form>
        </div>
        <SectionWaypoint 
          onScrollToWaypoint={() => this.props.onScrollToWaypoint(4)}
        />
      </Element>
    )
  }
}

export default Contact;