import React from 'react';
import classNames from 'classnames';
import formatRating from '../utils/formatRating';
import styles from './Rating.less';

const Rating = ({
  rating
}) => {
  const { number, type } = formatRating(rating);

  const symbolClasses = classNames(styles.symbol, `hc-u-icon-${type.toLowerCase()}`);

  const fullSymbolClasses = classNames(symbolClasses, styles.symbolFull);
  const emptySymbolClasses = classNames(symbolClasses, styles.symbolEmpty);

  const ratingStringArray = number.toString().split('.');
  const wholeSymbols = ratingStringArray[0];
  const symbols = [];
  let i = 0;

  // full symbols
  for (; i < wholeSymbols; i++) {
    symbols.push(<span key={i} className={fullSymbolClasses}></span>);
  }

  // half symbols
  if (ratingStringArray.length > 1) {
    symbols.push(
      <span key={i} className={classNames(emptySymbolClasses, styles.symbolHalfWrapper)}>
        <span className={fullSymbolClasses}></span>
      </span>
    );
    i = i + 1;
  }

  const ratingTypeDisplay = type.charAt(0).toUpperCase() + type.slice(1);

  return (
    <div className={styles.wrapper} title={`${number} ${ratingTypeDisplay}`}>
      {symbols}
    </div>
  );
};

Rating.propTypes = {
  rating: React.PropTypes.string.isRequired
};

export default Rating;
