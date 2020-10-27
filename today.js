const time_container = document.querySelector(".time-container");
const today = document.getElementById("today");
const whatTime = document.getElementById("time");
const whatDay = document.getElementById("day");


function now() {
    const date = new Date();
    //날짜
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDate();
    const dayNumber = date.getDay();
    //시간
    const hours = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    const yobi = [`Sun`, `Mon`, `Tues`, `Wednes`, `Thurs`, `Fri`, `Satur`];
    const days = yobi[dayNumber];

    // const isHoliday = (dayNumber == 0 || dayNumber == 6);

    // const dayText = isHoliday ? `휴일 ^.^` : `안휴일-.-`;


    // function what(){
    //     const week = [`일`, `월`, `화`, `수`, `목`, `금`, `토`];
    //     const yobi = week[dayNumber];
    //     return yobi;
    // }

    // const dayday = (()=>{
    //     if(isHoliday){
    //         return `휴일 ^.^`;
    //     } else {
    //         `안 휴일^.^`
    //     }
    // })();

    today.innerHTML =
        `1${year} / ${
        month > 9 ? `${month}`:`0${month}`} / ${
            day > 9 ? `${day}`:`0${day}`}`;

    whatDay.innerHTML =
        `${days}Day`;

    whatTime.innerHTML = ` 
            ${hours > 9?`${hours}`:`0${hours}`}:${
                min > 9 ? `${min}`:`0${min}`}:${
                    sec > 9 ?`${sec}`:`0${sec}`}`;
    // console.log(days);
}


function init() {
    now();
    setInterval(now, 1000);
}

init();