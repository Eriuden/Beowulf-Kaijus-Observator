import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateKaiju } from "../actions/kaiju.action";

export default function UpdateKaijuForm(kaijuId) {
  const [text, setText] = useState(false);
  const [edit, setEdit] = useState(false);
  const [pics, setPics] = useState(false);
  const [desc, setDesc] = useState(false);
  const [hThreat, setHThreat] = useState(false);
  const [eThreat, setEThreat] = useState(false);
  const dispatch = useDispatch();

  const editKaiju = (e) => {
    e.preventDefault();

    //Avec useDispatch, on peut accéder a la fonction dispatch de Redux, c'est pourquoi on appelle d'abord la variable où il est contenue
    //Puis l'action , avec en paramètres les éléments postId (le nom de la props lors de l'appel du composant dans CardComment)
    //, pour savoir quel est le post du comment, puis l'id du comment pour le trouver, puis le text pour le modifier
    if (text || pics || desc || hThreat || eThreat) {
      dispatch(updateKaiju(kaijuId, text, pics, desc, hThreat, eThreat));
      setText("");
      setPics("");
      setDesc("");
      setHThreat("");
      setEThreat("");
      setEdit(false);
    }
  };
  return (
    <div className="edit-kaiju">
      {
        /* Reste à compléter, changer noms hooks */ edit && (
          <form action="" onSubmit={editKaiju}>
            <input
              type="text"
              name="name"
              onChange={(e) => setText(e.target.value)}
            />
            <input
              type="file"
              name="pics"
              onChange={(e) => setPics(e.target.value)}
            />
            <input
              type="text"
              name="description"
              onChange={(e) => setDesc(e.target.value)}
            />
            <input
              type="text"
              name="hThreat"
              onChange={(e) => setHThreat(e.target.value)}
            />
            <input
              type="text"
              name="eThreat"
              onChange={(e) => setEThreat(e.target.value)}
            />

            <input type="submit" value="valider les modifications" />
          </form>
        )
      }
    </div>
  );
}
