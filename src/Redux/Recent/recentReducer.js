import { UPDATE_RECENT } from "./recentActionTypes";
const initialRecentState = {
  recentChats: [
    {
      mobileNo: 9999999999,
      name: "User 1",
      lastMessage: "Last Message 1",
    },
    {
      mobileNo: 8888888888,
      name: "User 2",
      lastMessage: "Last Message 2",
    },
    {
      mobileNo: 7777777777,
      name: "User 3",
      lastMessage: "Last Message 3",
    },
    {
      mobileNo: 6666666666,
      name: "User 4",
      lastMessage: "Last Message 4",
    },
  ],
};

const recentReducer = (state = initialRecentState, action) => {
  switch (action.type) {
    case UPDATE_RECENT:
      let name = action.payload.name;
      const message = action.payload.message;
      if (!action.payload.name) {
        name = action.payload.mobileNo;
      }
      let recent = [...state.recentChats];
      const index = recent.findIndex((obj) => {
        return obj.mobileNo == action.payload.mobileNo;
      });
      if (index != -1) {
        recent.splice(index, 1);
      }
      recent.unshift({
        mobileNo: action.payload.mobileNo,
        name,
        lastMessage: message,
      });

      return { recentChats: recent };
    default:
      return state;
  }
};

export default recentReducer;
