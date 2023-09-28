// const IMAGE_URL = "https://samples.clarifai.com/metro-north.jpg";
import './App.css';

import Navbar from './components/navrbar/Navbar';
import Logo from './components/logo/Logo';
import Rank from './components/Rank/Rank';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import ImageLink from './components/imagelink/ImageLink';
import Image from './components/Image/Image';
import { Component } from 'react';

const initialState = {
  input: '',
  imageUrl: '',
  box: {},
  signInState: 'no',
  pageState: 'signIn',
  user: {
    id: '',
    name: '',
    entries: '',
  },
};
class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  componentDidMount() {
    fetch('http://localhost:3000').then((response) => response.json());
  }

  changeUserState = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        entries: data.entries,
      },
    });
  };

  inputFunction = (event) => {
    this.setState({ input: event.target.value });
  };

  calcutelateBoxLocation = (data) => {
    const foundFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    return {
      left: foundFace.left_col * 100,
      right: 100 - foundFace.right_col * 100,
      bottom: 100 - foundFace.bottom_row * 100,
      top: foundFace.top_row * 100,
    };
  };

  faceBoxArea = (box) => {
    this.setState({ box: box });
  };

  buttonFunction = () => {
    const imageUrl = this.state.input;
    this.setState({ imageUrl: this.state.input });
    fetch('http://localhost:3000/api', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input: imageUrl,
      }),
    })
      .then((response) => response.json()) // Parse the response as JSON
      .then((response) => {
        if (response) {
          fetch('http://localhost:3000/image', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: this.state.user.id,
            }),
          })
            .then((response) => response.json())
            .then((count) => {
              this.setState(Object.assign(this.state.user, { entries: count }));
            });
          this.faceBoxArea(this.calcutelateBoxLocation(response));
        }
      })
      .catch((err) => console.error(err));
  };
  buttonFunction = () => {
    const imageUrl = this.state.input;
    this.setState({ imageUrl: this.state.input });
    fetch('http://localhost:3000/api', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input: imageUrl,
      }),
    })
      .then((response) => response.json()) // Parse the response as JSON
      .then((response) => {
        if (response) {
          fetch('http://localhost:3000/image', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: this.state.user.id,
            }),
          })
            .then((response) => response.json())
            .then((count) => {
              this.setState(Object.assign(this.state.user, { entries: count }));
            });
          this.faceBoxArea(this.calcutelateBoxLocation(response));
        }
      })
      .catch((err) => console.error(err));
  };

  pageStateChanger = (state) => {
    if (state === 'home') {
      this.setState({ signInState: 'yes' });
    } else if (state === 'signUp') {
      this.setState(initialState);
    } else if (state === 'signIn') {
      this.setState(initialState);
    }
    this.setState({ pageState: state });
  };

  render() {
    return (
      <div className='App'>
        <div className='grid-container'>
          <Logo />
          <Navbar
            pageStateChanger={this.pageStateChanger}
            signInState={this.signInState}
          />
        </div>
        {this.state.pageState === 'home' ? (
          <div>
            <Rank count={this.state.user.entries} name={this.state.user.name} />
            <ImageLink
              Detecting={this.inputFunction}
              buttonActionFunction={this.buttonFunction}
            />
            <Image imageUrl={this.state.imageUrl} box={this.state.box} />
          </div>
        ) : this.state.pageState === 'signIn' ? (
          <SignIn
            changeUserState={this.changeUserState}
            pageStateChanger={this.pageStateChanger}
          />
        ) : (
          <SignUp
            changeUserState={this.changeUserState}
            pageStateChanger={this.pageStateChanger}
          />
        )}
      </div>
    );
  }
}
export default App;
