import {
  getAll,
  getByName
} from "../services/panels.service.js";

const getAllPanels = async (req, res) => {
  try {
    const panels = await getAll();
    res.send(panels);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getPanelByName = async (req, res) => {
  const pName = req.params.pName;
  try {
    const panel = await getByName(pName);
    if(!panel){
      res.status(404).send({ errorMessage: error.message });
    }else{
      res.send(panel);
    }
  } catch (error) {
    res.status(500).send({ errorMessage: error.message });
  }
};

export { getAllPanels, getPanelByName };
