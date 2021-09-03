import React, {Component} from 'react'
import Button from 'react-bootstrap/Button'
import { Form } from 'react-bootstrap-validation'
import Container from 'react-bootstrap/Container'
import Input, * as inputHelper from 'react-validated-input'



export default class LoginForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      email: '',
      password: ''
    }
  }

  _handleValidSubmit(values) {}
  _handleInvalidSubmit(errors, values) {}

  render() {
    return (
      <div>
        <div className="account">
          <div className="container">
            <div className="page-title">Login</div>
            <div className="page-desc">Email used at sign up</div>
            <Form
              onValidSubmit={this._handleValidSubmit.bind(this)}
              onInvalidSubmit={this._handleInvalidSubmit.bind(this)}>
                        <Input type="text"
                        validate={this.state.validation} 
                        instance={this.state.user} 
                        propertyKey="email" 
                        rules={{presence: true, email: true}} 
                        placeholder="Email Address" 
                        label="Email">
                        </Input>
                        
                        <Input type="password"
                        validate={this.state.validation} 
                        instance={this.state.user} 
                        propertyKey="password" 
                        rules={{presence: true, email: true}} 
                        placeholder="password" 
                        label="password">
                        </Input>

                       
              
            <Button variant="primary">Primary</Button>{' '}
                
            </Form>
          </div>
        </div>
      </div>
    )
  }
}