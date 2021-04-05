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
    color: "green",
  },
  inline: {
    display: "inline",
  },
  link: {
    textDecoration: "none",
    color: "#000",
    fontWeight: "800",
  },
}));
const Contact = (props) => {
  const classes = useStyles();
  const contacts = useSelector((state) => state.contact.contacts);
  const { search } = props;
  let filteredContacts;
  if (search) {
    filteredContacts = contacts.filter((contact) => {
      if (
        contact.mobileNo.toString().indexOf(search) != -1 ||
        contact.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
      ) {
        return contact;
      }
    });
  } else {
    filteredContacts = contacts;
  }
  return (
    <List className={classes.root}>
      {filteredContacts.map((contact) => (
        <Link
          className={classes.link}
          to={`/${contact.mobileNo}`}
          key={contact.mobileNo}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary={contact.name}
              style={{ color: "#fff" }}
              secondary={
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    style={{ color: "#fff" }}
                  >
                    {contact.mobileNo}
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

export default Contact;
