import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { Grid, Button } from "@material-ui/core";
import gridFour from "../images/grid_four.svg";
import gridThree from "../images/grid_three.svg";
import Post from "./Post";

//hazir stiller
const useStyles = makeStyles((theme) => ({
  layoutShifter: {
    float: "right",
    margin: theme.spacing(2),
  },
}));

const PostsList = () => {
  const classes = useStyles();
  const [layout, setLayout] = useState("gridThree");

  // get redux-store state values
  const posts = useSelector((state) => state.post.posts);

    // yatayda post sayisi
  const calculateMd = () => {
    return layout === "gridThree" ? 3 : 4;
  };

  return (
    <div>
      {/* Layout Shifter */}
      <div className={classes.layoutShifter}>
        <Button
          variant="text"
          size="small"
          onClick={() => setLayout("gridThree")}
        >
          <img
            src={gridThree}
            style={{ background: layout === "gridThree" ? "#ccc" : "" }}
            alt="Three Columns Grid Icon"
          />
        </Button>
        <Button
          variant="text"
          size="small"
          onClick={() => setLayout("gridFour")}
        >
          <img
            src={gridFour}
            style={{ background: layout === "gridFour" ? "#ccc" : "" }}
            alt="Four Columns Grid Icon"
          />
        </Button>
      </div>
      <Grid container spacing={2} alignContent="stretch">
        {posts.length > 0 &&
          posts.map((post) => (
            <Grid item key={post?._id} xs={12} md={calculateMd()}>
              <Post {...post} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default PostsList;
