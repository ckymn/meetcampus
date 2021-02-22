import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts } from "./actions/post";
import {fade, makeStyles } from "@material-ui/core/styles";
import {BrowserRouter as Router,Switch,Route,Redirect,} from "react-router-dom";
import {Container,Grid,AppBar,Toolbar,Typography,Button,IconButton,} from "@material-ui/core";
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import PenIcon from "@material-ui/icons/Create";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import PostsList from "./components/PostsList";
import AddPostForm from "./components/AddPostForm";
import PostDetails from "./components/PostDetails";
import Home from "./components/Home";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  container: {
    marginTop: theme.spacing(3),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }, inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  
}));

const App = () => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        <AppBar position="static" color="primary" elevation={0}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <SupervisedUserCircleIcon />
            </IconButton>

            <Typography
              variant="h6"
              color="inherit"
              className={classes.title}
            >
              <a href="http://localhost:3000/posts">MEETCAMPUS</a>
            </Typography>
            <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
            <Button
              color="inherit"
              variant="outlined"
              startIcon={<PenIcon />}
              onClick={handleOpen}
            >
              YOUR PROFILE
            </Button>
          </Toolbar>
        </AppBar>
        <Grid container className={classes.container}>
          <Grid item xs={12}>
            <Router>
              <Switch>
                <Route exact path="/myposts" component={Home} />
                <Route exact path="/posts" component={PostsList} />
                <Route exact path="/posts/:id" component={PostDetails} />
              </Switch>
              <Redirect from="/" to="/posts" />
            </Router>
          </Grid>
        </Grid>

        <AddPostForm open={open} handleClose={handleClose} />
      </Container>
    </div>
  );
};

export default App;
