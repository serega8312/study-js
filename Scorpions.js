const video = document.querySelector('video');

video.addEventListener('timeupdate', (event) => {
  colorLine(video.currentTime);
});

const ps = document.querySelectorAll('p');
function colorLine(time) {
 
  for (let i in ps) {
    let p = ps[i];
    //получаем атрибут и получае валю этого атрибута
    if (!p.attributes) continue;
    let dta=p.attributes['data-time'];
    if (!dta) continue;
    let dts = dta.value;
    let dt = parseFloat(dts);
    if (time > dt) {
      p.style.color = "red";
    }
  
  }
}
