import "./App.css";
import axios from "axios";

import React from "react";

class App extends React.Component {
  state = {
    user: "",
    userName: "",
    userPic: [],
    userArea: "",
    userCreation: "",
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/gamboaldo")
      .then((res) => {
        console.log(res.data);

        this.setState({
          user: res.data.login,
          userPic: res.data.avatar_url,
          userName: res.data.name,
          userArea: res.data.location,
          userCreation: res.data.created_at,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleChange = (e) => {
    this.setState({
      user: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.user}`)
      .then((res) => {
        console.log(res);
        this.setState({
          user: res.data.login,
          userPic: res.data.avatar_url,
          userName: res.data.name,
          userArea: res.data.location,
          userCreation: res.data.created_at,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.user}
            onChange={this.handleChange}
            placeholder="enter user"
          />
          <button>Get Me The Dogs</button>
        </form>
        <h1>******github users*******</h1>
        <h2>{[this.state.user]}</h2>
        <h2>{[this.state.userName]}</h2>
        <h2>{this.state.userArea}</h2>
        <img src={this.state.userPic} alt="" />
        <h1>{this.state.userCreation}</h1>
      </div>
    );
  }
}

export default App;
