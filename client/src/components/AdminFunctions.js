import axios from "axios";

export const addProject = newProject => {
  return axios
    .post("http://localhost:3001/projects/create", {
      name: newProject.name,
      description: newProject.description,
      image: newProject.image,
      auteur: newProject.auteur,
      date: newProject.date
    })
    .then(res => {
      console.log("Project Add");
    });
};
