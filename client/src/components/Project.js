import React, { Component } from "react";
import { addProject } from "./AdminFunctions";

class Project extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
      image: "",
      auteur: "",
      date: "",
      id: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const project = {
      name: this.state.name,
      description: this.state.description,
      // image: this.state.image,
      auteur: this.state.auteur,
      date: this.state.date,
      id: this.state.id
    };
    addProject(project)
      .then(res => {
        this.props.history.push("/project");
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">
                Enter your project Chris
              </h1>
              <div className="form-group">
                <label htmlFor="name">Name </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Enter Name of project"
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description </label>
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  placeholder="Enter description of project"
                  value={this.state.description}
                  onChange={this.onChange}
                />
              </div>

              {/* <div className="form-group">
                <label htmlFor="image">Image</label>
                <input
                  type="email"
                  className="form-control"
                  name="image"
                  placeholder="Enter photo"
                  value={this.state.image}
                  onChange={this.onChange}
                />
              </div> */}

              <div className="form-group">
                <label htmlFor="auteur">Auteur</label>
                <input
                  type="text"
                  className="form-control"
                  name="auteur"
                  placeholder="Enter auteur"
                  value={this.state.auteur}
                  onChange={this.onChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  //   render() {
  //     return (
  //       <div className="container">
  //         <h1 className="text-center">Project</h1>

  //         <table className="table col-md-6 mx-auto">
  //           <tbody>
  //             <tr>
  //               <td>Name</td>
  //               <td>{this.state.name}</td>
  //             </tr>
  //             <tr>
  //               <td>Description</td>
  //               <td>{this.state.description}</td>
  //             </tr>
  //             <tr>
  //               <td>Image</td>
  //               <td>{this.state.image}</td>
  //             </tr>
  //             <tr>
  //               <td>Auteur</td>
  //               <td>{this.state.auteur}</td>
  //             </tr>
  //             <tr>
  //               <td>Date</td>
  //               <td>{this.state.date}</td>
  //             </tr>
  //           </tbody>
  //         </table>
  //       </div>
  //     );
  //   }
}
export default Project;
