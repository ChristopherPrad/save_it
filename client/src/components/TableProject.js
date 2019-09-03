import React, { Component } from "react";
import axios from "axios";
import "./style.css";

export class TableProject extends Component {
  state = {
    isClicked: false,
    valueInput: "",
    name: this.props.name,
    description: this.props.description,
    auteur: this.props.auteur,
    id: this.props.id
  };

  onChangeValue = e => {
    this.setState({ [e.target.name]: e.target.value });
    if (e.key === "Enter") {
      console.log(this);
      this.setState({ isClicked: false });
      axios
        .put("http://localhost:3001/projects/modify/" + this.state.id, {
          name: this.state.name,
          description: this.state.description
        })
        .then(response => {
          console.log(response.data);
          this.setState({ data: response.data, loading: false });
        })
        .catch(err => console.log(err));
    }
  };

  handleClick = () => {
    this.setState({ isClicked: !this.state.isClicked });
  };

  // handleClickBtn = () => {
  //   axios
  //     .delete("http://localhost:3001/projects/del/" + this.state.id)
  //     .then(res => this.setState({ caChange: true }))
  //     .catch(err => console.log(err));
  //   console.log("depuis le bouton");
  // };

  render() {
    return (
      <div>
        <table className="table col-md-6 mx-auto">
          <tbody>
            <tr>
              <td>Name</td>
              {this.state.isClicked ? (
                <td>
                  <input
                    onKeyPress={this.onChangeValue}
                    onChange={this.onChangeValue}
                    name="name"
                    type="text"
                    value={this.state.name}
                  />
                </td>
              ) : (
                <td onClick={this.handleClick}>{this.state.name}</td>
              )}
            </tr>
            <tr>
              <td>Description</td>
              {this.state.isClicked ? (
                <td>
                  <input
                    onKeyPress={this.onChangeValue}
                    onChange={this.onChangeValue}
                    name="description"
                    type="text"
                    value={this.state.description}
                  />
                </td>
              ) : (
                <td onClick={this.handleClick}>{this.state.description}</td>
              )}
              {/* <td>{this.props.description}</td> */}
            </tr>
            {/* <tr>
              <td>Image</td>

              <td>{this.props.image}</td>
            </tr> */}
            <tr>
              <td>Auteur</td>

              {this.state.isClicked ? (
                <td>
                  <input
                    onKeyPress={this.onChangeValue}
                    onChange={this.onChangeValue}
                    name="auteur"
                    type="text"
                    value={this.state.auteur}
                  />
                </td>
              ) : (
                <td onClick={this.handleClick}>{this.state.auteur}</td>
              )}
            </tr>
            <tr>
              <td>Date</td>
              <td>{this.props.date}</td>
            </tr>
            <tr>
              <td>Id</td>
              <td>{this.props.id}</td>
            </tr>
          </tbody>
        </table>
        <button
          className="button"
          onClick={() => this.props.handleClickBtn(this.props.id)}
        >
          X
        </button>
      </div>
    );
  }
}

export default TableProject;
