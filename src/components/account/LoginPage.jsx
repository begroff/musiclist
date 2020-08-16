import React from 'react';
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import { Button, Label } from 'reactstrap';

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    // component state
    this.state = {
      email: '',
      password: '',
    };

    // bound functions
    this.handleValidSubmit = this.handleValidSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  // update state as email value changes
  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  // catch enter clicks
  handleKeyPress(target) {
    if (target.charCode === 13) {
      this.compileFormData();
    }
  }

  // update state as password value changes
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  // Handle submission once all form data is valid
  handleValidSubmit() {
    const { loginFunction } = this.props;
    const formData = this.state;
    loginFunction(formData);
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-10 col-sm-7 col-md-5 col-lg-4">
          <AvForm onValidSubmit={this.handleValidSubmit}>
            <AvGroup>
              <Label for="exampleEmail">Email</Label>
              <AvInput
                id="userEmail"
                name="email"
                onChange={this.handleEmailChange}
                onKeyPress={this.handleKeyPress}
                placeholder="noreply@musiclist.com"
                required
                type="email"
                value={this.state.email}
              />
              <AvFeedback>A valid email is required to log in.</AvFeedback>
            </AvGroup>
            <AvGroup>
              <Label for="userPassword">Password</Label>
              <AvInput
                id="userPassword"
                name="password"
                onChange={this.handlePasswordChange}
                onKeyPress={this.handleKeyPress}
                placeholder="password"
                required
                type="password"
                value={this.state.password}
              />
              <AvFeedback>Password is required to log in</AvFeedback>
            </AvGroup>
            <Button color="primary">Log In</Button>
          </AvForm>
        </div>
      </div>
    );
  }
}
