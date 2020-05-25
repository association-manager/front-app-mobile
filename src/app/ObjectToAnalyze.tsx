import { dark as appDarkTheme } from '@eva-design/eva';
var newArr = Object.keys(appDarkTheme);
var mappedArr = newArr.map(function (i) {
  return [i, appDarkTheme[i]] + "\n";
});
console.log(`\nObject Analyze :------------------------->\n\n ${mappedArr}`);
