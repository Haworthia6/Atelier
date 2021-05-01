export default (array) => {
  var styleRows = [];
  var rows = Math.ceil(array.length / 4);
  var currentEle = 0;
  for (var i = 0; i < rows; i++)  {
    var row = [];
    if (i !== rows - 1) {
      for (var j = 0; j < 4; j++) {
        row.push(array[currentEle]);
        currentEle ++;
      }
    } else {
      while(currentEle !== array.length) {
        row.push(array[currentEle]);
        currentEle ++;
      }
    }
    styleRows.push(row);
  }
  return styleRows;
};
