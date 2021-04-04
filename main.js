'use strict'

const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const timer = document.getElementById('timer');

let startTime    
// スタートボタンを押した時間
let TimeoutId
// setTimeoutを代入
let elapsedTimer = 0;
// 経過時間を保持
function setButtonStateInitial() {
  start.classList.remove('inactive');
  stop.classList.add('inactive');
  reset.classList.add('inactive');
}
function setButtonStaterunning() {
  start.classList.add('inactive');
  stop.classList.remove('inactive');
  reset.classList.add('inactive');
}
function setButtonStatestoped() {
  start.classList.remove('inactive');
  stop.classList.add('inactive');
  reset.classList.remove('inactive');
}

setButtonStateInitial();
function countUp() {
  const d = new Date(Date.now() - startTime + elapsedTimer);
  
  const m = String(d.getMinutes()).padStart(2,'0');
  const s = String(d.getSeconds()).padStart(2,'0');
  const ms = String(d.getMilliseconds()).padStart(3,'0');
  timer.textContent = `${m}:${s}.${ms}`;

  TimeoutId = setTimeout(() => {
    countUp()
  },10)
}
start.addEventListener('click',() => {
  if(start.classList.contains('inactive') === true){
    return
  }
  startTime = Date.now();
  countUp();
  setButtonStaterunning()
})
stop.addEventListener('click',() => {
  if(stop.classList.contains('inactive') === true){
    return
  }
  clearInterval(TimeoutId);
  elapsedTimer += Date.now() - startTime
  setButtonStatestoped()
})
reset.addEventListener('click',() => {
  if(reset.classList.contains('inactive') === true){
    return
  }
  timer.textContent = '00:00.000'
  elapsedTimer = 0
  setButtonStateInitial()
})
// console.log(Date.now())
// let today = new Date();
// console.log(today);

// new Date()の引数に日時とかミリ秒を入れる。するとそこから秒数とかふんすうとか時間がとれる