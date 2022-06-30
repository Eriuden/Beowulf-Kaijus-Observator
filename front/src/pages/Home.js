import React, { useState } from "react";
import KaijuCard from "../components/KaijuCard";
import { useSelector } from "react-redux";
import { UidContext } from "../components/AppContext";
import { useContext } from "react";
import { isEmpty } from "../components/Utils";
import ConnexionForm from "../components/ConnexionForm";
import AddKaijuForm from "../components/AddKaijuForm";
import ShowKaiju from "../components/ShowKaiju";

export default function Home(kaiju) {
  const [showKaiju, setShowKaiju] = useState("false");
  setTimeout(() => {
    document.querySelector(".preloader").style.display = "none";
  }, 10000);

  const kaijus = useSelector((state) => state.kaijusReducer);
  const uid = useContext(UidContext);

  //Tout d'abord, il faut le formulaire de connexion, pas d'entrée sur le dossier sans connexion
  //Après, on se retrouve sur la page avec les cartes des dossiers
  //Quand on clique sur une, ca affiche un component plus haut, avec l'image du kaiju en background, et les différentes infos

  //Il faudra mettre tout en haut un component d'affichage des infos

  /*Au jour du 30 juin 2022,
 
  La pire partie, tout tester, reste à faire
  Tout le css à faire, la plus longue, j'essaierai tailwind !
  En matière de pur code, le projet est bon pour git, on verra plus tard, mais alors avec une mention without css alors
  
  */

  return (
    <>
      <div>
        {uid ? (
          <>
            <div className="preloader">
              <h1>
                Dossiers top secret, ces informations peuvent mettre votre vie
                en danger
              </h1>
              <span className="loader"></span>
            </div>
            <AddKaijuForm />
            {showKaiju && <ShowKaiju kaiju={kaiju} />}

            <ul>
              {!isEmpty(kaijus) &&
                kaijus.map((kaiju) => {
                  return (
                    <KaijuCard
                      onClick={() => setShowKaiju(!showKaiju)}
                      kaiju={kaiju}
                      key={kaiju._id}
                    />
                  );
                })}
            </ul>
          </>
        ) : (
          <ConnexionForm />
        )}
      </div>
    </>
  );
}
