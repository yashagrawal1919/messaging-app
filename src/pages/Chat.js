import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppBar } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import Message from "../components/Message";
import SendMessage from "../components/SendMessage";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import Date from "../components/Date";
import Paper from "@material-ui/core/Paper";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "90vh",
    background: "#632c4b",
    overflow: "auto",
    color: "green",
  },
  inline: {
    display: "inline",
  },
  paper: {
    backgroundColor: "#eee",
    position: "fixed",
    width: "100%",
    top: "0px",
  },
}));
const Chat = (props) => {
  const { userMobileNo } = useParams();
  const messages = useSelector((state) => state.messages.messages);
  const recent = useSelector((state) => state.recent);
  const contacts = useSelector((state) => state.contact.contacts);
  const contactIndex = contacts.findIndex((c) => c.mobileNo == userMobileNo);
  const [date, setDate] = useState();
  const [month, setMonth] = useState();

  const receiverName = contacts[contactIndex].name;

  const loggedInUser = 9999999999;
  const user2 = userMobileNo;

  const chats = messages.filter((message) => {
    return (
      (message.sender === loggedInUser && message.receiver === user2) ||
      (message.sender === user2 && message.receiver === loggedInUser)
    );
  });

  const classes = useStyles();
  const updateDate = (date, month) => {
    setDate(date);
    setMonth(month);
  };
  return (
    <div>
      <div>
        <Paper className={classes.paper} variant="outlined">
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary={receiverName}
              //   style={{ color: "#fff" }}
              className={`${classes.typographyheading}`}
              secondary={
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    className={`${classes.inline} ${classes.typographytext}`}
                  >
                    {user2}
                  </Typography>
                </>
              }
            />
          </ListItem>
        </Paper>
      </div>
      <div style={{ marginTop: "90px" }}>
        {chats.map((message) => {
          return (
            <>
              <Message
                user2={user2}
                loggedInUser={loggedInUser}
                message={message}
                updateDate={updateDate}
                prevDate={date}
                prevMonth={month}
                month={message.time.getMonth()}
                date={message.time.getDate()}
              />
            </>
          );
        })}
      </div>

      <SendMessage
        sender={loggedInUser}
        receiver={user2}
        receiverName={receiverName}
      />
    </div>
  );
};

export default Chat;
