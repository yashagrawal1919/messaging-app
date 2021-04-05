import { UPDATE_RECENT } from "./recentActionTypes";
const updateRecent = (mobileNo, receiver, message) => {
  return {
    type: UPDATE_RECENT,
    payload: {
      mobileNo: mobileNo,
      name: receiver,
      message: message,
    },
  };
};

export default updateRecent;
