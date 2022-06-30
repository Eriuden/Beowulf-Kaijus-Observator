import React, { useState } from "react";
import axios from "axios";

export default function ConnexionForm() {
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");
  //Pour des raisons de Lore, il ne sera possible que de se connecter, pas de s'inscrire !
  const handleLogin = (e) => {
    e.preventDefault();
    const pseudoError = document.querySelector(".pseudo.error");
    const passwordError = document.querySelector(".password.error");

    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/agent/login`,
      withCredentials: true,
      data: {
        pseudo,
        password,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.errors) {
          pseudoError.innerHTML = res.data.errors.pseudo;
          passwordError.innerHTML = res.data.errors.password;
        } else {
          window.location = "/";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form action="" onSubmit={handleLogin}>
      <label htmlFor="pseudo">Matricule</label>
      <br />

      <input
        type="text"
        name="pseudo"
        id="pseudo"
        onChange={(e) => setPseudo(e.target.value)}
        value={pseudo}
      />
      <div className="pseudo error"></div>

      <br />

      <label htmlFor="password">Mot de passe</label>
      <br />

      <input
        type="password"
        name="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <div className="password error"></div>

      <br />

      <input type="submit" value="Connexion" />
    </form>
  );
}
