import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  dateWrapper: {
    margin: "20px auto",
    width: "100px",
  },
  date: {
    alignSelf: "center",
  },
}));

const Date = (props) => {
  const classes = useStyles();
  const { date, month } = props;
  const monthsMap = {
    0: "January",
    1: "february",
    2: "March",
    3: "April",
    4: "may",
    5: "june",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  };
  return (
    <div className={classes.dateWrapper}>
      <div className={classes.date}>
        <span>{date}</span>
        {"   "}
        <span>{monthsMap[month]}</span>
      </div>
    </div>
  );
};

export default Date;
