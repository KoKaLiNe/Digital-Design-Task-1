(function() {
    'use strict';
  
    function trackScroll() {
      var scrolled = window.pageYOffset;
      var coords = document.documentElement.clientHeight;
  
      if (scrolled > coords) {
        goTopBtn.classList.add('topbutton-show');
      }
      if (scrolled < coords) {
        goTopBtn.classList.remove('topbutton-show');
      }
    }
  
    var goTopBtn = document.querySelector('.topbutton');
  
    window.addEventListener('scroll', trackScroll);
  })();




  // Задание 2 Вывод информации о дате

function getDayInfo(date) {

    dateParts = date.split('.');
    date = new Date(dateParts[1] + '-' + dateParts[0] + '-' + dateParts[2]);

    weekDays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Восскресенье'];
    monthNames = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

    weekDay = weekDays[date.getDay()-1];
    weekNumber = Math.ceil(dateParts[0] / 7);
    month = monthNames[date.getMonth()];
    year = dateParts[2];

    console.log(weekDay + ', ' + weekNumber + ' неделя ' + month + ' ' + year + ' года');

}


getDayInfo('01.01.2022');
getDayInfo('15.12.2021');
