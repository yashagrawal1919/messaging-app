import SendIcon from "@material-ui/icons/Send";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import useInput from "../hooks/useInput";
import SearchIcon from "@material-ui/icons/Search";
import { TextField } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme) => ({
  searchWrapper: {
    padding: "10px 30px",
  },
  inputBase: {
    border: "1px solid #999",
    padding: "5px 20px",
    width: "70%",
    borderRadius: "20px",
    boxSizing: "border-box",
    display: "inline-block",
    marginLeft: "20px",
    color: "#eee",
  },
  backArrow: {
    cursor: "pointer",
    color: "#eee",
  },
}));
const Search = (props) => {
  const classes = useStyles();
  const [search, clearSearch, setSearch] = useInput("");
  const handleInputChange = (e) => {
    setSearch(e.target.value);
    props.updateSearch(e.target.value);
    props.updateIsSearchActive(true);
  };
  const closeSearch = (e) => {
    clearSearch();
    props.updateSearch(search);
    props.updateIsSearchActive(false);
  };
  return (
    <div className={classes.searchWrapper}>
      <form noValidate autoComplete="off">
        <div>
          {props.isSearchActive && (
            <ArrowBackIcon
              className={classes.backArrow}
              onClick={closeSearch}
            />
          )}
          <InputBase
            className={classes.inputBase}
            onChange={handleInputChange}
            value={search}
            placeholder="Search"
          />
        </div>
      </form>
    </div>
  );
};
export default Search;
