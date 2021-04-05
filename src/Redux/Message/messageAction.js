import { ADD_MESSAGE } from "./messageActiontTypes";
const addMessage = (text, sender, receiver) => {
  return {
    type: ADD_MESSAGE,
    payload: {
      text,
      sender,
      receiver,
    },
  };
};

export default addMessage;
