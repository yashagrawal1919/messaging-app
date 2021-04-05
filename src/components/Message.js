import { makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import Date from "./Date";
const Message = (props) => {
  const { date, month, prevDate, prevMonth, updateDate } = props;
  const [showDate, setShowDate] = useState(false);
  useEffect(() => {
    if (date != prevDate || month != prevMonth) {
      updateDate(date, month);
      setShowDate(true);
    }
  }, []);
  const { message, loggedInUser, user2 } = props;
  const useStyles = makeStyles(() => ({
    alignright: {
      backgroundColor: "#632c4b",
      borderTopLeftRadius: "30px",
      alignSelf: "flex-end",
      color: "#fff",
    },
    alignleft: {
      borderTopRightRadius: "30px",
      backgroundColor: "#ccc",
      alignSelf: "flex-start",
    },
    messagesWrapper: {
      display: "flex",
      flexDirection: "column",
      padding: "10px",
      boxSizing: "border-box",
    },
    message: {
      maxWidth: "50%",
      padding: "25px",
      borderBottomLeftRadius: "30px",
      borderBottomRightRadius: "30px",
    },
    time: {
      fontSize: "11px",
      textAlign: "right",
      marginTop: "5px",
    },
  }));
  const classes = useStyles();
  return (
    <>
      {showDate ? <Date date={props.date} month={props.month} /> : null}
      <div className={classes.messagesWrapper}>
        <div
          className={`${classes.message} ${
            message.sender === loggedInUser ? classes.alignright : ""
          } 
        ${message.sender === user2 ? classes.alignleft : ""}`}
        >
          {message.text}
          <div className={classes.time}>
            {message.time.getHours()}:{message.time.getMinutes()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
