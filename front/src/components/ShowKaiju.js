import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getKaiju } from "../actions/kaiju.action";

export default function ShowKaiju(kaiju) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getKaiju(kaiju._id));
  });
  return (
    <div className="kaiju-window">
      <ul className="kaiju-window-ul">
        <li className="kaiju-window-li" id="kaiju-name">
          {kaiju.name}
        </li>
        <li className="kaiju-window-li" id="kaiju-description">
          {kaiju.description}
        </li>
        <li className="kaiju-window-li" id="kaiju-threatForHumanity">
          {kaiju.threatForHumanity}
        </li>
        <li className="kaiju-window-li" id="kaiju-threatForEarth">
          {kaiju.threatForEarth}
        </li>
      </ul>
    </div>
  );
}
