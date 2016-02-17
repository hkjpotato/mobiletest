import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './PageHeader.less';

const PageHeader = ({ pageTitle, returnPage }) =>
(
  <div>
    <h2 className={`${styles.wrapper} emi-u-clearfix`}>{pageTitle}</h2>
    { returnPage ? <Link to={returnPage}>&times</Link> : null }
  </div>
);

PageHeader.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  returnPage: PropTypes.string
};

export default PageHeader;
