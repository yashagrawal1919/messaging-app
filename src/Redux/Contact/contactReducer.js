const initialContactState = {
  contacts: [
    { mobileNo: 9999999999, name: "User 1" },
    { mobileNo: 8888888888, name: "User 2" },
    { mobileNo: 7777777777, name: "User 3" },
    { mobileNo: 6666666666, name: "User 4" },
    { mobileNo: 5555555555, name: "User 5" },
    { mobileNo: 4444444444, name: "User 6" },
    { mobileNo: 3333333333, name: "User 7" },
  ],
};

const contactReducer = (state = initialContactState, action) => {
  return state;
};

export default contactReducer;
