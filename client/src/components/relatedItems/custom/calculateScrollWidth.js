
function calculateScrollWidth (scrollSize, numberOfElements, ...otherMeasurements) {
  return ( scrollSize * numberOfElements ) + otherMeasurements.reduce((sum, num) => sum + num);
}

export default calculateScrollWidth;
