import React from "react";
import { useDispatch } from "react-redux";
import { deleteKaiju } from "../actions/kaiju.action";

export default function DeleteButton(kaijuID) {
  const dispatch = useDispatch();
  const killKaiju = () => {
    dispatch(deleteKaiju(kaijuID));
  };
  return (
    <div>
      <button onClick={killKaiju()}>Supprimer</button>
    </div>
  );
}
