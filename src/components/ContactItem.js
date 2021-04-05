import { Link } from "react-router-dom";
const ContactItem = (props) => {
  const { mobileNo, name } = props;
  return (
    <Link to={`/${mobileNo}`}>
      <div>{name}</div>
      <div>{mobileNo}</div>
    </Link>
  );
};

export default ContactItem;
