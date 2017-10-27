var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
  greeting = 'Good <br/>Evening'
} else if (hourNow > 12) {
  greeting = 'Good <br/>Afternoon!'
} else if (hourNow > 0) {
  greeting = 'Good <br/>Morning!'
} else {
  greeting = 'welcome';
}

document.write('<h3>' + greeting + '</h3>')