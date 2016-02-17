import React, { PropTypes } from 'react';
import styles from './Banner.less';

const Banner = ({ children, isTransparent = true }) => {
  let bannerStyle = `${styles.wrapper}`;
  if (!isTransparent) bannerStyle += ` ${styles.hasBackground}`;
  return (
    <div className={bannerStyle}>
      {children}
    </div>
  );
};

Banner.propTypes = {
  children: PropTypes.object,
  isTransparent: PropTypes.bool
};

export default Banner;
