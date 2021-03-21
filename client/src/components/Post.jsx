import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  Chip,
  Button,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Avatar,
  CardHeader,
  IconButton,
} from "@material-ui/core";
import ShareIcon from '@material-ui/icons/Share';
import noImage from "../images/noimage.svg";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 374,
    position: "relative",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },

  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
  },
  chip: {
    marginTop: theme.spacing(1),
  },
}));

const Post = ({name,surname,location,tag,content,_id,image,createdAt,}) => {
  const classes = useStyles();
  console.log(name);
  const convertRelativeTime = (date) => {
    return moment(date).fromNow();
  };

  return (
    <Card className={classes.root}>
      <CardHeader avatar={<Avatar src={image}></Avatar>}
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={name}
        subheader={convertRelativeTime(createdAt)}
      />
      <CardMedia
        className={classes.media}
        image={image || noImage}
        title={name}
      />
      <CardContent>
        <Typography variant="h6" component="p" gutterBottom>
          {name} {surname}
        </Typography>{" "}
        <Typography variant="overline" component="p" gutterBottom>
          {location}
        </Typography>{" "}
        <Typography variant="body2" component="p">
          {content?.substring(0, 200) + "..."}
        </Typography>
        <Chip label={`# ${tag}`} color="primary" className={classes.chip} />
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined" color="primary">
          <Link to={`/posts/${_id}`}>Daha Fazla</Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
