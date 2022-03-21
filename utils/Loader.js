import CircularProgress from "@material-ui/core/CircularProgress";
import React from "react";
import { withStyles } from "@material-ui/core/styles";
// import CircularProgress from '@material-ui/core/CircularProgress';
import purple from "@material-ui/core/colors/purple";

const styles = (theme) => ({
  progress: {
    margin: theme.spacing.unit * 2,
    color: "primary",
  },
});
const Loader = () => {
  // const { classes } = props;
  return (
    <div style={{ width: "200px", color: "primary", height: "222px" }}>
      <CircularProgress />
    </div>
  );
};

export default withStyles(styles)(Loader);
