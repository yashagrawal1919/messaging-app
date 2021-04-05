import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "90vh",
    background: "#632c4b",
    overflow: "auto",
  },
  inline: {
    display: "inline",
  },
  link: {
    textDecoration: "none",
    color: "#000",
  },
  typographyheading: {
    color: "#fff",
    fontWeight: "800",
  },
  typographytext: {
    color: "#eee",
  },
}));
const Recent = () => {
  const classes = useStyles();
  const recentChats = useSelector((state) => state.recent.recentChats);
  return (
    <List className={classes.root}>
      {recentChats.map((recentChat) => (
        <Link
          className={classes.link}
          to={`/${recentChat.mobileNo}`}
          key={recentChat.mobileNo}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary={recentChat.name}
              //   style={{ color: "#fff" }}
              className={`${classes.typographyheading}`}
              secondary={
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    className={`${classes.inline} ${classes.typographytext}`}
                    // style={{ color: "#fff" }}
                  >
                    {recentChat.lastMessage}
                  </Typography>
                </>
              }
            />
          </ListItem>
          <Divider variant="middle" component="li" />
        </Link>
      ))}
    </List>
  );
};

export default Recent;
