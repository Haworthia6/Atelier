
// Rounds number to nearest quarter
function roundRating (num) {
  return Number((Math.round(num * 4) / 4).toFixed(2));
}

export default roundRating;
