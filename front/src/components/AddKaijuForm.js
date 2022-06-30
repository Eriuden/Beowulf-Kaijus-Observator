import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addKaiju } from "../actions/kaiju.action";

export default function AddKaijuForm() {
  const [name, setName] = useState("");
  const [picture, setPicture] = useState(null);
  const [description, setDescription] = useState("");
  const [threatForHumanity, setThreatForHumanity] = useState("");
  const [threatForearth, setThreatForEarth] = useState("");

  const dispatch = useDispatch();

  const handleKaiju = () => {
    const data = new FormData();
    data.append("name", name);
    data.append("picture", picture);
    data.append("description", description);
    data.append("threatForHumanity", threatForHumanity);
    data.append("threatForEarth", threatForearth);

    dispatch(addKaiju(data));
  };
  return (
    <div>
      <div className="post-form">
        <text
          name="name"
          id="name"
          placeholder="Nom(scientifique ou commun)"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <input
          type="file"
          name="image"
          id="image"
          onChange={(e) => setPicture(e.target.value)}
          value={picture}
        />

        <textarea
          name="description"
          id="description"
          placeholder="Portrait de la cible"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />

        <text
          name="threatForHumanity"
          id="threatForHumanity"
          placeholder="Menaçe pour l'humanite"
          onChange={(e) => setThreatForHumanity(e.target.value)}
          value={threatForHumanity}
        />

        <text
          name="threatForEarth"
          id="threatForEarth"
          placeholder="Menace pour l'écosystème"
          onChange={(e) => setThreatForEarth(e.target.value)}
          value={threatForearth}
        />

        <button onClick={handleKaiju}></button>
      </div>
    </div>
  );
}
