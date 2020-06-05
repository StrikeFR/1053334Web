let topicsArray = [
    "Cyberpunk 2077",
    "死亡擱淺",
    "GTA6",
    "上古卷軸6",
    "楓之谷4K HD Remaked"
];

let startDate = new Date();

function setMonthAndDay(startMonth, startDay){
    startDate.setMonth(startMonth-1, startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(2,21);