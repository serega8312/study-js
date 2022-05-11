//константе присваиваем html элемент 'video'
const video = document.querySelector('audio');
//вешаем оброботчик на html элемент video на событие timeupdate
video.addEventListener('timeupdate', (event) => {
  //вызываем функцию короллайн и пердаем текущее время видео
  colorLine(video.currentTime);
});

//присваиваем константе все элементы п

const currentLine = document.getElementById('currentLine');
const currentLineRu = document.getElementById('currentLineRu');
//вызываем функцию колорлайн с аргументом time
function colorLine(time) {
  const ps = document.querySelectorAll('p');
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
    let dt = parseSeconds(dts);
    //если время видео больше чем то которое в атрибуте
    if (time > dt) {
      //цвет текста сделать красным
      p.style.color = "red";
      currentLine.innerText = p.innerText;
      currentLineRu.innerText = p.getAttribute("data-ru");
    }

  }
}
//парсит в секунды из строки в формате ,например "1'22.24"- будет 82.24
//определяем функцию parseSeconds которая принимает аргумент str
function parseSeconds(str) {
  //разрезать строку на минуты и секунды 
  const splitted = str.split("'");
  if (splitted.length == 1) return parseFloat(splitted[0]);
  return splitted[0] * 60 + parseFloat(splitted[1]);

}
const searchParams = new URLSearchParams(location.search);
const songId = searchParams.get("v")

$.getJSON(`${songId}.json`, function (json) {

  for (let i in json) {
    const a = json[i].split('~')
    $('#content').append(`<p data-ru="${a[1]}" data-time="${a[2]}">${a[0]}</p>`);


  }


});
