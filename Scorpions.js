//константе присваиваем html элемент 'video'
const video = document.querySelector('video');
//вешаем оброботчик на html элемент video на событие timeupdate
video.addEventListener('timeupdate', (event) => {
  //вызываем функцию короллайн и пердаем текущее время видео
  colorLine(video.currentTime);
});

//присваиваем константе все элементы п
const ps = document.querySelectorAll('p');
//вызываем функцию колорлайн с аргументом time
function colorLine(time) {
  //цикл по  массиву пс
  //ай индекс  массива
  for (let i in ps) {
    //получаем идекс массива и загоняем в переменную п
    let p = ps[i];
    //проверка на существование атрибута
    if (!p.attributes) continue;
    //получение атрибута data-time
    let dta = p.attributes['data-time'];
    //проверка на существоание атрибута
    if (!dta) continue;
    //присваиваем валю в переменую дтс
    let dts = dta.value;
    //приобразовываем в число и присваем в переменую дт
    let dt = parseFloat(dts);
    //если время видео больше чем то которое в атрибуте
    if (time > dt) {
      //цвет текста сделать красным
      p.style.color = "red";
    }

  }
}
