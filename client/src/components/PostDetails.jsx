import React, { useState, useEffect } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Paper,
  Divider,
  Button,
  Chip,
  Grid,
  Avatar,
  List,
  ListItemText,
  ListItem,
  ListItemAvatar,
} from "@material-ui/core";
import EditLocationOutlinedIcon from "@material-ui/icons/EditLocationOutlined";
import DeleteSweepTwoToneIcon from "@material-ui/icons/DeleteSweepTwoTone";
import EditPostForm from "./EditPostForm";
import { fetchSinglePost, deletePost } from "../actions/post";
import noImage from "../images/noimage.svg";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(8),
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  content: {
    marginTop: theme.spacing(3),
  },
  image: {
    width: "35%",
    borderRadius: 5,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(4),
  },
  chip: {
    marginTop: theme.spacing(1),
  },
}));

// history , location , match/id : bunlar porps ile geliyor
const PostDetails = ({ history, location, match }) => {
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();

  const { id } = match.params;
  const currentPost = useSelector((state) => state.post.currentPost);

  //bu islem sadece sectigimiz bir degsiken degisince calisir
  useEffect(() => {
    dispatch(fetchSinglePost(id));
  }, [dispatch, id]);

  const convertRelativeTime = (date) => {
    return moment(date).fromNow();
  };

  // burda actionCreato fonksiyonunu firlaticaz
  const removePost = () => {
    dispatch(deletePost(currentPost._id));
    history.push("/posts"); // history'deki default url'i change ediyor
  };

  const openEditMode = () => {
    setEditMode(true);
  };

  const closeEditMode = () => {
    setEditMode(false);
  };

  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} elevation="15">
            {editMode ? (
              <EditPostForm post={currentPost} closeEditMode={closeEditMode} />
            ) : (
              <div>
                <div className={classes.header}>
                  <Typography variant="h5" gutterBottom>
                    {`${currentPost?.name} ${currentPost?.surname}`}
                  </Typography>
                  <div>
                    <Button
                      color="primary"
                      variant="contained"
                      startIcon={<EditLocationOutlinedIcon />}
                      onClick={openEditMode}
                    >
                      Edit
                    </Button>{" "}
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={removePost}
                      startIcon={<DeleteSweepTwoToneIcon />}
                    >
                      Delete
                    </Button>
                  </div>
                </div>

                <Divider />
                <Typography variant="caption" component="p" gutterBottom>
                  {convertRelativeTime(currentPost?.createdAt)} by{" "}
                  {currentPost?.name}
                </Typography>
                <Chip
                  label={`# ${currentPost?.tag}`}
                  color="primary"
                  variant="default"
                  className={classes.chip}
                />

                <div className={classes.content}>
                  <img
                    src={currentPost?.image || noImage}
                    alt="Post"
                    className={classes.image}
                  />
                  <Typography variant="body1" gutterBottom>
                    {currentPost?.content}
                  </Typography>
                </div>
              </div>
            )}
          </Paper>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Paper className={classes.paper} elevation="15">
            <List className={classes.root}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar src={currentPost?.image} /> 
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="h5" color="primary">
                      INFORMATION
                    </Typography>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="overline"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        {currentPost?.name}
                      </Typography>
                      {" — I'll be in your neighborhood doing errands this…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default PostDetails;

// ? : varsa