import React, { PropTypes } from 'react';
import styles from './Image.less';

const Image = ({
  source,
  ratioOfHeightToWidth
}) => {
  const image = require(`../../resources/images/venue-profile/${source}.jpg`);
  const percentage = `${Math.round(ratioOfHeightToWidth * 100)}%`;
  const positionHelperStyles = {
    paddingTop: percentage
  };

  return (
    <div className={styles.wrapper}>
      <div style={positionHelperStyles}></div>
      <div className={styles.canvas}>
        <img className={styles.image} src={image} alt="" />
      </div>
    </div>
  );
};

Image.propTypes = {
  source: PropTypes.string,
  ratioOfHeightToWidth: PropTypes.number
};

Image.defaultProps = {
  ratioOfHeightToWidth: 0.75
};

export default Image;
