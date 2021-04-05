import React from "react";
import { useState } from "react";
import SendIcon from "@material-ui/icons/Send";
import InputBase from "@material-ui/core/InputBase";
import { useDispatch } from "react-redux";
import addMessage from "../Redux/Message/messageAction";
import updateRecent from "../Redux/Recent/recentAction";
import useInput from "../hooks/useInput";

const SendMessage = (props) => {
  const [message, clearMessage, setMessage] = useInput("");
  const { sender, receiver, receiverName } = props;
  const dispatch = useDispatch();
  const sendMessage = (e) => {
    e.preventDefault();
    dispatch(addMessage(message, sender, receiver));
    dispatch(updateRecent(receiver, receiverName, message));
    clearMessage();
  };

  const handleInputChange = (e, val) => {
    setMessage(e.target.value);
  };
  return (
    <div
      style={{
        boxSizing: "border-box",
        position: "fixed",
        bottom: "0px",
        boxSizing: "border-box",
        width: "70%",
        backgroundColor: "#eee",
        padding: "20px",
      }}
    >
      <form noValidate autoComplete="off" onSubmit={sendMessage}>
        <div>
          <InputBase
            onChange={handleInputChange}
            value={message}
            style={{
              border: "1px solid black",
              padding: "5px 20px",
              width: "50%",
              borderRadius: "20px",
              boxSizing: "border-box",
              display: "inline-block",
              marginLeft: "30px",
            }}
          />
          <SendIcon
            style={{ display: "inline-block" }}
            onClick={sendMessage}
            style={{ color: "632c4b", marginLeft: "30px" }}
          />
        </div>
      </form>
    </div>
  );
};

export default SendMessage;
