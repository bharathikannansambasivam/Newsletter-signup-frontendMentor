import React, { useContext } from "react";
import { emailContext } from "../App";
import Thankyou_tick from "../images/Thankyou-tick.svg";
import { useNavigate } from "react-router-dom";
function Greeting() {
  const [email] = useContext(emailContext);
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  return (
    <div className="bg-CharcoalGrey h-screen w-screen font-roboto  flex flex-col justify-center items-center ">
      <div className="bg-White flex  flex-col gap-3 min-w-96 w-96 p-10 rounded-3xl  ">
        <img src={Thankyou_tick} className="h-16 w-16" alt="" />
        <h1 className="text-4xl font-bold  ">Thanks for subscribing!</h1>
        <p className="text-Grey">
          A confirmation email has been sent to{" "}
          <b className="font-bold text-DarkSlateGrey">{email}. </b>
          Please open it and click the button inside to confirm your
          subscription.
        </p>
        <button
          onClick={handleBack}
          className="bg-DarkSlateGrey text-white p-3 w-full rounded-xl"
        >
          {" "}
          Dismiss message
        </button>
      </div>
    </div>
  );
}

export default Greeting;
