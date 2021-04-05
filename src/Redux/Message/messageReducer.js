import { ADD_MESSAGE } from "./messageActiontTypes";
const initialMessageState = {
  messages: [
    {
      text: "Random",
      sender: 9999999999,
      receiver: 6666666666,
      time: new Date(),
    },
    {
      text: "Random",
      sender: 9999999999,
      receiver: 6666666666,
      time: new Date(),
    },
    {
      text:
        "Randomkdjfkhsdkjfhds jkfhsdjkfhjk dshf kjdshf jkshfj khsdjk fhkhfjks dhfjk hsdjkfh sdjkfhkjdfh",
      sender: 6666666666,
      receiver: 9999999999,
      time: new Date(),
    },
    {
      text: "Random",
      sender: 9999999999,
      receiver: 6666666666,
      time: new Date(),
    },
  ],
};

const messageReducer = (state = initialMessageState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let messages = [...state.messages];
      let message = { ...action.payload, time: new Date() };
      messages = [...messages, message];
      return {
        messages,
      };

    default:
      return state;
  }
};

export default messageReducer;
