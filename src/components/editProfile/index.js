import { Box, makeStyles, Typography } from '@material-ui/core';
import React, { useRef, useState } from 'react';
import ImageIcon from '@material-ui/icons/Image';
import img from '../../assets/pic.png';
import { useDispatch, useSelector } from 'react-redux';
import {
  editProfile,
  updateProfilePic,
} from '../../redux/users/updatedata/userdataupdat.action';
import { baseURL } from '../../Http/config';
import { useFormik } from 'formik';
const EditProfile = () => {
  const imageRef = useRef();

  const {
    singleuser: { userInfo },
  } = useSelector((state) => state.singleuserSlicer);

  const [image, setProfileImage] = useState();
  const dispatch = useDispatch();
  const uploadProfilePic = (e) => {
    console.log(e.target.files[0]);
    setProfileImage(e.target.files[0]);
    const fd = new FormData();
    fd.append('file', e.target.files[0]);

    fd.append('userId', userInfo.userId);

    dispatch(updateProfilePic(fd));
  };

  const formik = useFormik({
    initialValues: {
      description: userInfo.description,
      cnic: userInfo.cnic,
      location: userInfo.location,
      email: userInfo.email,
      userId: userInfo.userId,
    },
    onSubmit: (values) => {
      dispatch(editProfile(values));
    },
  });

  const classes = useStyles();
  return (
    <Box className={classes.main}>
      <Box>
        <Typography varient="h1" className={classes.heading}>
          Update your personal data
        </Typography>
        <div style={{ height: 300 }}></div>
        <div className={classes.imgBox}>
          <img
            className="image"
            src={
              !image
                ? `${baseURL}assets/profilePicture/${userInfo.image}`
                : URL.createObjectURL(image)
            }
            alt="profile"
          />
          <div className={classes.uploadProfile}>
            <label className={classes.imgLable}>
              <ImageIcon className={classes.icon} />
              <input
                ref={imageRef}
                onChange={uploadProfilePic}
                type="file"
                className={classes.imgInput}
              />
            </label>
          </div>
        </div>
      </Box>

      <form onSubmit={formik.handleSubmit}>
        <Box>
          <Box className={classes.row}>
            <Box>
              <input
                type="text"
                placeHolder="Email"
                className={classes.input}
                name="email"
                value={formik.values.email}
                disabled
              />
            </Box>
            <Box>
              <input
                type="text"
                placeHolder="CNIC"
                className={classes.input}
                name="cnic"
                onChange={formik.handleChange}
                value={formik.values.cnic}
              />
            </Box>
          </Box>
          <Box className={classes.row}>
            <Box>
              <input
                type="text"
                placeHolder="Location"
                className={classes.input}
                name="location"
                value={formik.values.location}
                onChange={formik.handleChange}
              />
            </Box>
          </Box>
          <Box className={classes.desc}>
            <Box>
              <textarea
                type="text"
                placeHolder="Description"
                className={classes.descInput}
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
              />
            </Box>
            <Box className={classes.endsection}>
              <button type="submit" className={classes.submitBtn}>
                Update Now
              </button>
            </Box>
          </Box>
        </Box>
      </form>
    </Box>
  );
};
export default EditProfile;
const useStyles = makeStyles((theme) => ({
  main: {
    width: '100%',

    marginTop: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
    },
  },
  heading: {
    marginBottom: '30px',
    fontSize: '35px',
    color: '#1BA665',
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
    },
  },
  input: {
    width: '350px',
    height: '40px',
    marginTop: '20px',
    paddingLeft: '12px',
    fontSize: '22px',
    border: '2px solid #1BA665',
    borderRadius: '5px',
    [theme.breakpoints.down('xs')]: {
      width: '280px',
    },
  },

  row: {
    width: '50%',

    display: 'flex',
    gap: 10,
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
  },

  desc: {
    width: '50%',
    display: 'flex',

    flexDirection: 'column',

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
  },
  descInput: {
    resize: 'none',
    width: '750px',
    height: '250px',
    marginTop: '20px',
    border: '2px solid #1BA665',
    fontSize: '22px',
    [theme.breakpoints.down('md')]: {
      width: '540',
    },
    [theme.breakpoints.down('xs')]: {
      width: '290px',
    },
  },
  submitBtn: {
    width: '100%',
    marginTop: '20px',
    padding: '15px 0px',
    backgroundColor: '#1BA665',
    color: 'white',
    border: 'none',
    fontSize: '22px',
    borderRadius: '15px',
    [theme.breakpoints.down('sm')]: {
      width: '360px !important',
    },
    [theme.breakpoints.down('sm')]: {
      width: '250px',
    },
    '&:hover': {
      cursor: 'pointer',
    },
  },
  endsection: {
    paddingBottom: 69,

    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  ////
  imgBox: {
    width: 250,
    height: 250,
    borderRadius: '50%',
    position: 'absolute',
    bottom: -50,
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    border: '4px solid #1BA665',
    [theme.breakpoints.down('md')]: {
      bottom: 189,
    },
    [theme.breakpoints.down('xs')]: {
      bottom: -40,
      marginBottom: 20,
    },

    '& .image': {
      width: 250,
      height: 250,
      borderRadius: '50%',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
  },
  uploadProfile: {
    position: 'inherit',
    borderRadius: '50%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: '250px',
    height: '250px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s ease-in',
    opacity: 0,
    '&:hover': {
      opacity: 1,
    },
  },
  icon: {
    fontSize: 82,
    color: 'white',
    cursor: 'pointer',
  },
  imgInput: {
    display: 'none',
  },
}));
