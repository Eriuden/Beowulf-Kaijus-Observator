import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getKaiju } from "../actions/kaiju.action";
import DeleteButton from "./DeleteButton";
import UpdateKaijuForm from "./UpdateKaijuForm";

export default function KaijuCard({ kaiju }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getKaiju(kaiju._id));
  });
  return (
    <div>
      <h2>{kaiju.name}</h2>
      <img src={kaiju.picture} alt="" />
      <DeleteButton kaijuID={kaiju._id} />
      <UpdateKaijuForm
        kaiju={kaiju}
        /*il serai bon d'en faire un modal de cet update*/
      />
    </div>
  );
}
