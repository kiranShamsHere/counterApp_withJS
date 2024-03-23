var count = 0;
var timer;
function timecount() {
  count++;
  counting.innerHTML = count;
}
function start() {
  timer = setInterval(timecount, 500);
}
function stop() {
  clearInterval(timer);
}
function reset() {
  clearInterval(timer);
  counting.innerHTML = "0";
  count = 0;
}