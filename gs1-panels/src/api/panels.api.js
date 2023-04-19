import { API } from "../config/Api";

const getAllPanels = async () => {
  
    const requestOptions = {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "include",
    };
  
    const url = API.data.getAllPanels;
    const res = await fetch(url, requestOptions);
    const data = await res.json();
  
    const panels = data.map((panel) => {
      return({
        name: panel.name,
        data :panel.data,
        lastUpdate: panel.lastUpdate
      })
    })
    return (panels);
  };

  const getPanelByName = async (parameters) => {
  
    const requestOptions = {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "include",
    };
  
    const url = API.data.getByName + "/" + parameters.name;
    const res = await fetch(url, requestOptions);
    const data = await res.json();
  
    return ({
      name: data.name,
      data :data.data,
      lastUpdate: data.lastUpdate
    });
  };


  export {getAllPanels, getPanelByName}