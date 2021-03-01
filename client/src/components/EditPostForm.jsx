import React, { useState } from "react";
import FileBase64 from "react-file-base64";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Select, Input, MenuItem, Button } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { updatePost } from "../actions/post";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginBottom: theme.spacing(2),
  },
  buttons: {
    marginTop: theme.spacing(2),
  },
}));

const tags = [
  "C",
  "C++",
  "C#",
  "Java",
  "Pyhton",
  "JavaScript",
  "GO",
  "Dart",
  "Android",
  "Flutter",
  "PhP",
  "ASP.Net",
];
const sinif = ["Mezun", "1", "2", "3", "4","Yuksek Lisans"];

//validation
const postSchema = yup.object().shape({
  name: yup.string().max(30).required(),
  surname: yup.string().max(30).required(),
  content: yup.string().min(20).required(),
  tag: yup.mixed().oneOf(tags),
  sinif: yup.mixed().oneOf(sinif),
  twitter:yup.string().url(),
  linkedin: yup.string().url(),
  company: yup.string().required(),
  school: yup.string().required(),
  blog: yup.string().url(),
  createdOn: yup.date().default(function() {
    return new Date();
  }),
});

const EditPostForm = ({ post, closeEditMode }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [file, setFile] = useState(post?.image);

  const { register, handleSubmit, control, errors, reset } = useForm({
    resolver: yupResolver(postSchema),
  });

  //data react-hook-form 'dan geliyor form submit olunca bir action dispatch edilecek
  const onSubmit = (data) => {
    console.log(data);

    const updatedPost = {
      _id: post._id,
      ...data,
      image: file,
    };

    dispatch(updatePost(post._id, updatedPost));

    reset();
    setFile(null);
    closeEditMode();
  };

  return (
    <div>
      <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="name"
          label="name"
          name="name"
          variant="outlined"
          className={classes.textField}
          size="small"
          inputRef={register}
          error={errors.name ? true : false}
          fullWidth
          defaultValue={post.name}
        />
        <TextField
          id="surname"
          label="surname"
          name="surname"
          variant="outlined"
          className={classes.textField}
          size="small"
          inputRef={register}
          error={errors.surname ? true : false}
          fullWidth
          defaultValue={post.surname}
        />
        <TextField
          id="your_company"
          label="company"
          name="your_company"
          variant="outlined"
          className={classes.textField}
          size="small"
          inputRef={register}
          fullWidth
          defaultValue={post.your_company}
        />
        <TextField
          id="location"
          label="location"
          name="location"
          variant="outlined"
          className={classes.textField}
          size="small"
          inputRef={register}
          fullWidth
          defaultValue={post.location}
        />
        <TextField
          id="linkedin"
          label="account"
          name="linkedin"
          variant="outlined"
          className={classes.textField}
          size="small"
          inputRef={register}
          fullWidth
          defaultValue={post.linkedin}
        />
        <TextField
          id="twitter"
          label="account"
          name="twitter"
          variant="outlined"
          className={classes.textField}
          size="small"
          inputRef={register}
          fullWidth
          defaultValue={post.linkedin}
        />
        <Controller
          as={
            <Select input={<Input />} className={classes.textField} fullWidth>
              {sinif.map((sinif, index) => (
                <MenuItem key={index} value={sinif}>
                  {sinif}
                </MenuItem>
              ))}
            </Select>
          }
          name="class"
          control={control}
          error={errors.sinif ? true : false}
          defaultValue={post.class}
        />

        <Controller
          as={
            <Select input={<Input />} className={classes.textField} fullWidth>
              {tags.map((tag, index) => (
                <MenuItem key={index} value={tag}>
                  {tag}
                </MenuItem>
              ))}
            </Select>
          }
          name="tag"
          control={control}
          error={errors.tag ? true : false}
          defaultValue={post.tag}
        />

        <TextField
          id="content"
          label="İçerik"
          name="content"
          multiline
          size="small"
          inputRef={register}
          rows={5}
          className={classes.textField}
          variant="outlined"
          error={errors.content ? true : false}
          fullWidth
          defaultValue={post.content}
        />
        <FileBase64 multiple={false} onDone={({ base64 }) => setFile(base64)} />
        <div className={classes.buttons}>
          <Button color="primary" variant="outlined" onClick={closeEditMode}>
            Give Up
          </Button>{" "}
          <Button color="secondary" variant="outlined" type="submit">
            Update
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditPostForm;
