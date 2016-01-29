import React, { PropTypes } from 'react';
import { translate } from '../translate';
import { Link } from 'react-router';
import styles from './PageHeader.less';

const PageHeader = ({ pageTitle, returnPage }) =>
(
  <span>
    <h2 className={`${styles.wrapper} emi-u-clearfix`}>{translate(pageTitle)}</h2>
    { returnPage ? <Link to={returnPage}>&times</Link> : null }
  </span>
);

PageHeader.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  returnPage: PropTypes.string
};

export default PageHeader;
