import useStyles from './styles';
import React from 'react';
const Location = () => {
  const classes = useStyles();
  return (
    <div className={classes.locationMain}>
      <div>
        <div></div>
      </div>
      <div>
        <iframe
          title="location"
          width="100%"
          height="500px"
          frameborder="0"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.210235325378!2d73.01912507580636!3d33.65171407331032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9547e73f14af%3A0xabd0a2f0e165cd6e!2sBahria%20University%20(BSEAS)%20Islamabad%20H-11%2F4%20Campus!5e0!3m2!1sen!2s!4v1697653755777!5m2!1sen!2s"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
