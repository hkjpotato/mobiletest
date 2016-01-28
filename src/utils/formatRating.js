/*
 * Convert starRatingId from api to a rating number and type
 * starRatingId is one of:
 * [
 *  "BLANK",
 *  "ONE_DIAMOND",
 *  "TWO_DIAMONDS",
 *  "THREE_DIAMONDS",
 *  "FOUR_DIAMONDS",
 *  "FIVE_DIAMONDS",
 *  "FORBES_ONE_STAR",
 *  "FORBES_TWO_STAR",
 *  "FORBES_THREE_STAR",
 *  "FORBES_FOUR_STAR",
 *  "FORBES_FIVE_STAR",
 *  "ONE_STAR",
 *  "ONE_STAR_AND_HALF",
 *  "TWO_STAR",
 *  "TWO_STAR_AND_HALF",
 *  "THREE_STAR",
 *  "THREE_STAR_AND_HALF",
 *  "FOUR_STAR",
 *  "FOUR_STAR_AND_HALF",
 *  "FIVE_STAR",
 *  "FIVE_STAR_AND_HALF"
 * ]
 */

const formatRating = (ratingId) => {
  let ratingNumber = 0;
  if (ratingId.indexOf('ONE') !== -1) {
    ratingNumber = 1;
  } else if (ratingId.indexOf('TWO') !== -1) {
    ratingNumber = 2;
  } else if (ratingId.indexOf('THREE') !== -1) {
    ratingNumber = 3;
  } else if (ratingId.indexOf('FOUR') !== -1) {
    ratingNumber = 4;
  } else if (ratingId.indexOf('FIVE') !== -1) {
    ratingNumber = 5;
  }

  if (ratingId.indexOf('HALF') !== -1) {
    ratingNumber = ratingNumber + 0.5;
  }

  return {
    number: ratingNumber,
    type: ratingId.indexOf('STAR') !== -1 ? 'star' : 'diamond'
  };
};

export default formatRating;
