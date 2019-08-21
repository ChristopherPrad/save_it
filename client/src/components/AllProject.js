import React, { Component } from "react";
import axios from "axios";

class allProject extends Component {
  constructor(props) {
    super(props);

    this.state = { isCliked: false, data: [], loading: true, value: "" };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  // state = {
  //   loading: true,
  //   data: [],
  //   isCliked: false;

  // };

  componentDidMount() {
    axios
      .get("http://localhost:3001/projects/all")
      .then(response => {
        this.setState({ data: response.data, loading: false });
        console.log(this.state.data[0].name);
      })
      .catch(err => console.log(err));
  }

  handleClick() {
    this.setState(state => ({
      isCliked: !state.isCliked
    }));
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    if (this.state.loading === true) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div>
          {this.state.data.map((value, index) => {
            return (
              <div className="container" key={index}>
                <h1 className="text-center">Project</h1>
                <table className="table col-md-6 mx-auto">
                  <tbody>
                    <tr onClick={this.handleClick}>
                      <td>Name</td>
                      {this.state.isCliked ? (
                        <td>
                          <input
                            type="text"
                            onChange={this.handleChange}
                            value={value.name}
                          />
                        </td>
                      ) : (
                        <td>{value.name}</td>
                      )}
                    </tr>
                    <tr>
                      <td>Description</td>
                      <td>{value.description}</td>
                    </tr>
                    <tr>
                      <td>Image</td>
                      <td>{value.image}</td>
                    </tr>
                    <tr>
                      <td>Auteur</td>
                      <td>{value.auteur}</td>
                    </tr>
                    <tr>
                      <td>Date</td>
                      <td>{value.date}</td>
                    </tr>
                    <tr>
                      <td>Id</td>
                      <td>{value.id}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          })}
        </div>
      );
    }
  }
}

export default allProject;
