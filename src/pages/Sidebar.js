import { useState } from "react";
import Contact from "./Contact";
import Recent from "./Recent";
import TabPanel from "../components/TabPanel";
import { AppBar, Tab, Tabs } from "@material-ui/core";
import SearchBar from "../components/SearchBar";
import { makeStyles } from "@material-ui/core/styles";
import Search from "../pages/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#632c4b",
  },
  tab: {
    width: "50%",
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  const [tabIndex, setTabIndex] = useState(0);
  const [isSearchActive, seIsSearchActive] = useState(false);
  const [search, setSearch] = useState("");
  const handleTabChange = (e, val) => {
    setTabIndex(val);
  };
  const updateIsSearchActive = (val) => {
    seIsSearchActive(val);
  };
  const updateSearch = (val) => {
    setSearch(val);
  };
  return (
    <div className={classes.root}>
      <SearchBar
        updateIsSearchActive={updateIsSearchActive}
        updateSearch={updateSearch}
        isSearchActive={isSearchActive}
      />
      {isSearchActive ? (
        <Search search={search} />
      ) : (
        <>
          <Tabs value={tabIndex} onChange={handleTabChange}>
            <Tab className={classes.tab} label="contacts" />
            <Tab className={classes.tab} label="recent" />
          </Tabs>
          <TabPanel value={tabIndex} index={0}>
            <Contact />
          </TabPanel>
          <TabPanel value={tabIndex} index={1}>
            <Recent />
          </TabPanel>
        </>
      )}
    </div>
  );
};

export default Sidebar;
