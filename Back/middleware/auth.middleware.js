const jwt = require("jsonwebtoken");
const agentModel = require("../models/agent.model");

//c'est appelé à même le serveur pour la génération de JWT
// on requiert le JWT
//si le token existe, on le vérifie voir si il correspond au secret
//Si ca marche pas, on invalide le JWT
//sinon, on cherche l'id
//On lui passe les infos et le token unique

module.exports.checkAgent = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        res.cookie("jwt", "", { maxAge: 1 });
        next();
      } else {
        let agent = await agentModel.findById(decodedToken);
        res.locals.user = agent;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

module.exports.requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
      if (err) {
        console.log(err);
      } else {
        console.log(decodedToken.id);
        next();
      }
    });
  } else {
    console.log("pas de token");
  }
};
