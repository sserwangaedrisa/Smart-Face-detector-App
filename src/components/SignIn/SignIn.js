import React from 'react';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: '',
    };
  }
  onChangeEmail = (event) => {
    this.setState({ signInEmail: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ signInPassword: event.target.value });
  };

  changePageStateOnSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          this.props.pageStateChanger('home');
          this.props.changeUserState(data);
        } else {
          alert('SignIn failed');
        }
      });
  };
  render() {
    const { pageStateChanger } = this.props;
    return (
      <article className='br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center shadow-hover'>
        <main className='pa4 black-80'>
          <form className='measure'>
            <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
              <legend className='f2 fw6 ph0 mh0'>Sign-In form</legend>
              <div className='mt3'>
                <label className='db fw6 lh-copy f6' htmlFor='email-address'>
                  Email
                </label>
                <input
                  onChange={this.onChangeEmail}
                  className='pa2 br2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                  type='email'
                  name='email-address'
                  id='email-address'
                />
              </div>
              <div className='mv3'>
                <label className='db fw6 lh-copy f6' htmlFor='password'>
                  Password
                </label>
                <input
                  onChange={this.onChangePassword}
                  className='b pa2 br2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                  type='password'
                  name='password'
                  id='password'
                />
              </div>
            </fieldset>
            <div className=''>
              <input
                onClick={this.changePageStateOnSubmit}
                className='b br3 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
                type='submit'
                value='Sign in'
              />
            </div>
            <div
              className='lh-copy mt3 underline '
              onClick={() => pageStateChanger('signUp')}
            >
              <a href='#0' className='f6 link dim black db f3'>
                Sign up
              </a>
            </div>
          </form>
        </main>
      </article>
    );
  }
}

export default SignIn;
