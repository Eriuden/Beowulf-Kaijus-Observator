const AgentModel = require("../models/agent.model");

const ObjectId = require("mongoose").Types.ObjectId;

//le -password est en fait super simple, c'ets une précision pour select, prendre toutes les infos SAUF le password
module.exports.getAllAgents = async (req, res) => {
  const users = await AgentModel.find().select("-password");
  res.status(200).json(users);
};

//Permet de voir les info de l'utilisateurs

module.exports.agentInfo = (req, res) => {
  console.log(req.params);
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  //on le cherche par l'id
  AgentModel.findById(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("id unknown: " + err);
  }).select("-password");
};

module.exports.updateAgent = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);
  try {
    //on appelle la bien nommée fonction permettant de trouver puis d'update
    //on cherche par l'id
    //puis on met des changements en bio
    await AgentModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          bio: req.body.bio,
        },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true },
      // on a renvoyé le tout
      (err, docs) => {
        if (!err) return res.send(docs);
        if (err) return res.status(500).send({ message: err });
      }
    );
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

module.exports.deleteAgent = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);
  try {
    //on appelle le modele avec une fonction remove, avant d'exécuter la requète, on précise que c'est l'id le guide
    await AgentModel.remove({ _id: req.params.id }).exec();
    res.status(200).json({ message: "l'agent en sait trop" });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};
