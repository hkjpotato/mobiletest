import React, { PropTypes } from 'react';
import { translate } from '../translate';
import styles from './PageHeader.less';

const PageHeader = ({
  children
}) => {
  const navListItems = children.map((item, index) =>
    <li
      key={index}
      className={styles.navItem}
    >
      {React.cloneElement(item, {
        activeClassName: styles.activeNavLink,
        className: styles.navLink
      })}
    </li>
  );

  return (
    <header className={`${styles.wrapper} hc-u-clearfix`}>
      <a href="/" className={styles.logo}>{translate('_cvent_supplier_network')}</a>
      <nav className={styles.navListWrapper}>
        <ul className={styles.navList}>
          {navListItems}
        </ul>
      </nav>
    </header>
  );
};

PageHeader.propTypes = {
  children: PropTypes.array
};

export default PageHeader;
