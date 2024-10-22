import React, { useState } from "react";
import FileBase64 from "react-file-base64";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  TextField,
  Select,
  Input,
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createPost } from "../actions/post";
// const schools = require("../school");

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
  textField: {
    marginBottom: theme.spacing(2),
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
const sinif = ["Mezun", "1", "2", "3", "4", "Yuksek Lisans"];

const postSchema = yup.object().shape({
  name: yup.string().max(30).required(),
  surname: yup.string().max(30).required(),
  content: yup.string().min(20).required(),
  tag: yup.mixed().oneOf(tags),
  sinif: yup.mixed().oneOf(sinif),
  // twitter:yup.string().url(),
  // linkedin: yup.string().url(),
  // company: yup.string().required(),
  school: yup.string().required(),
  // blog: yup.string().url(),
});

const AddPostForm = ({ open, handleClose, props }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);

  //schools
  // const getSchools = (schools) => {
  //   let a = schools.map((liste) => liste);

  //   for (let i = 0; i <= a.length; i++) {
  //     const res = a[i].universities.map((list) => list.name);
  //     return res;
  //   }
  // };

  // useForm yup
  const { register, handleSubmit, control, errors, reset } = useForm({
    resolver: yupResolver(postSchema),
  });

  //data react-hook-form 'dan geliyor form submit olunca bir action dispatch edilecek
  const onSubmit = (data) => {
    dispatch(createPost({ ...data, image: file }));
    clearForm();
  };

  const clearForm = () => {
    reset();
    setFile(null);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle> Yeni Yazı Oluştur</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Buraya yeni gelecek arkadaslar icin kenid bilgilerinizi doldurunuz
          lutfen !
        </DialogContentText>
        <div className={classes.root}>
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
            />
            <TextField
              id="linkedin"
              label="linkedin account"
              name="linkedin"
              variant="outlined"
              className={classes.textField}
              size="small"
              inputRef={register}
              fullWidth
            />
            <TextField
              id="twitter"
              label="twitter account"
              name="twitter"
              variant="outlined"
              className={classes.textField}
              size="small"
              inputRef={register}
              fullWidth
            />
           {/* <Controller
              as={
                <Select
                  input={<Input />}
                  className={classes.textField}
                  fullWidth
                >
                  {schools.map((liste,index) => (
                    <MenuItem key={index} value={liste}>
                      {liste[index]}
                    </MenuItem>
                  ))}
                </Select>
              }
              name="school"
              control={control}
              error={errors.sinif ? true : false}
            /> */}
            <TextField
              id="school"
              label="school"
              name="school"
              variant="outlined"
              className={classes.textField}
              size="small"
              inputRef={register}
              fullWidth
            />
            <TextField
              id="blog"
              label="blog"
              name="blog"
              variant="outlined"
              className={classes.textField}
              size="small"
              inputRef={register}
              fullWidth
            />
            <TextField
              id="content"
              label="your about"
              name="content"
              multiline
              size="small"
              inputRef={register}
              rows={4}
              className={classes.textField}
              variant="outlined"
              error={errors.content ? true : false}
              fullWidth
            />
            <Controller
              as={
                <Select
                  input={<Input />}
                  className={classes.textField}
                  fullWidth
                >
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
              defaultValue={sinif[0]}
            />

            <Controller
              as={
                <Select
                  input={<Input />}
                  className={classes.textField}
                  fullWidth
                >
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
              defaultValue={tags[0]}
            />
            <FileBase64
              multiple={false}
              onDone={({ base64 }) => setFile(base64)}
            />
          </form>
        </div>
      </DialogContent>

      <DialogActions>
        <Button onClick={clearForm} variant="contained" color="primary">
          Vazgeç
        </Button>
        <Button
          type="submit"
          onClick={() => handleSubmit(onSubmit)()}
          color="secondary"
          variant="contained"
        >
          Yayınla
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddPostForm;
