import './App.css';
import React from 'react';
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
  pageState: 'signin',
  signInState: 'no',
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
    const raw = JSON.stringify({
      inputs: [
        {
          data: {
            image: {
              url: imageUrl,
            },
          },
        },
      ],
    });

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 7dd352e7546e4369812f85f7503a5b26',
      },
      body: raw,
    };

    fetch(
      `https://api.clarifai.com/v2/models/face-detection/versions/6dc7e46bc9124c5c8824be4822abe105/outputs`,
      requestOptions
    )
      .then((response) => response.json())
      .then((response) => {
        this.faceBoxArea(this.calcutelateBoxLocation(response));
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
        <div className='grid-container shadow-3'>
          <Logo />
          <Navbar
            pageStateChanger={this.pageStateChanger}
            signInState={this.signInState}
            page={this.state.pageState}
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
