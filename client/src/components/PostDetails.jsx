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
import { fetchSinglePost, deletePost } from "../actions/post";
import noImage from "../images/noimage.svg";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import BusinessIcon from "@material-ui/icons/Business";
import TwitterIcon from "@material-ui/icons/Twitter";
import BookIcon from "@material-ui/icons/Book";
import SchoolIcon from "@material-ui/icons/School";
import EditPostForm from "./EditPostForm";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
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
  secondary: {
    light: "#ff7961",
    main: "#f44336",
    dark: "#ba000d",
    contrastText: "#000",
  },
}));

// history , location , match/id : bunlar porps ile geliyor
const PostDetails = ({ history, location, match }) => {
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();

  const { id } = match.params;
  const currentPost = useSelector((state) => state.post.currentPost);
  console.log(currentPost);

  useEffect(() => {
    dispatch(fetchSinglePost(id));
  }, [dispatch, id]);

  // time
  const convertRelativeTime = (date) => {
    return moment(date).fromNow();
  };

  // actionCreateor
  const removePost = () => {
    dispatch(deletePost(currentPost._id));
    history.push("/posts"); // url cahange
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
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={3}>
            <Paper className={classes.paper} elevation="15">
              {editMode ? (
                <EditPostForm
                  post={currentPost}
                  closeEditMode={closeEditMode}
                />
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
                    <Typography
                      variant="body1"
                      align="justify"
                      paragraph="true"
                      variant="subtitle2"
                    >
                      {currentPost?.content}
                    </Typography>
                  </div>
                </div>
              )}
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} elevation="15">
            <List className={classes.root}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar src={currentPost?.image} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography
                      component="span"
                      variant="overline"
                      color="inherit"
                    >
                      Reach {currentPost?.name}
                    </Typography>
                  }
                />
              </ListItem>
            </List>

            <Grid
              container
              spacing={3}
              direction="column"
              justify="center"
              alignItems="center"
            >
              <List className={classes.root}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <Button style={{ backgroundColor: "blue" }}>
                        <LinkedInIcon />
                      </Button>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Linkedin"
                    secondary={currentPost?.createdAt}
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                    <Button style={{ backgroundColor: "green" }}>
                      <BusinessIcon />
                    </Button>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Company"
                    secondary={`${currentPost?.createdAt}`}
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <Button style={{ backgroundColor: "cyan"}}>
                        <TwitterIcon />
                      </Button>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Twitter"
                    secondary={currentPost?.createdAt}
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                  <Avatar>
                      <Button style={{ backgroundColor: "red"}}>
                        <SchoolIcon />
                      </Button>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="School"
                    secondary={currentPost?.createdAt}
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <Button 
                        style={{ backgroundColor: "fuchsia"}}
                        href={`${currentPost?.linkedin}`}
                        >
                        <BookIcon />
                      </Button>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Blog"
                    secondary={currentPost?.createdAt}
                  />
                </ListItem>
              </List>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default PostDetails;

// ? : varsa
