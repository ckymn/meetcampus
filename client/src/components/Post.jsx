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

const Post = ({}) => {
  const classes = useStyles();
  
  const convertRelativeTime = (date) => {
    return moment(date).fromNow();
  };

  return (
    <Card className={classes.root}>
      <CardHeader avatar={<Avatar src={props?.image}></Avatar>}
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={props?.name}
        subheader={convertRelativeTime(props?.createdAt)}
      />
      <CardMedia
        className={classes.media}
        image={props?.image || noImage}
        title={props?.name}
      />
      <CardContent>
        <Typography variant="h6" component="p" gutterBottom>
          {props?.name} {props?.surname}
        </Typography>{" "}
        <Typography variant="overline" component="p" gutterBottom>
          {props?.location}
        </Typography>{" "}
        <Typography variant="body2" component="p">
          {props?.content?.substring(0, 250) + "..."}
        </Typography>
        <Chip label={`# ${props?.tag}`} color="primary" className={classes.chip} />
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined" color="primary">
          <Link to={`/posts/${props?._id}`}>Daha Fazla</Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
