import { fade, makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Paper,
} from "@material-ui/core";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import PenIcon from "@material-ui/icons/Create";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  container: {
    marginTop: theme.spacing(3),
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const NavBar = ({ handleOpen, darkMode, setDarkMode }) => {
  const classes = useStyles();
  // const [search, setSearch] = useState("");
  // const postsList = useSelector((state) => state.post.posts);

  // const filterPost = () => {
  //   const regex = new RegExp(search, "gi");
  //   const result = [...postsList].reduce((acc, post) => {
  //     if (
  //       (post.value.name && post.value.name.match(regex)) ||
  //       (post.value.tag && post.value.tag.match(regex))
  //     )
  //       acc.push(post);
  //     return acc;
  //   }, []);
  //   return result;
  // };

  // const renderPosts = search !== "" ? filterPost : "";

  return (
    <div className={classes.root}>
      <Paper elevation="15">
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

            <Typography variant="h6" color="inherit" className={classes.title}>
              <a href="http://localhost:3000/posts">MEETCAMPUS</a>
            </Typography>
            <Button onClick={() => setDarkMode(!darkMode)}>
              <Brightness4Icon />
            </Button>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search...."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
                name="serach"
              />
            </div>
            <Button
              color="inherit"
              variant="outlined"
              startIcon={<PenIcon />}
              onClick={handleOpen}
            >
              BİLGİLERİNİZ
            </Button>
          </Toolbar>
        </AppBar>
      </Paper>
    </div>
  );
};

export default NavBar;
