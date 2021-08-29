let today = new Date();
let date = '';
if (today.getMonth() < 10){
    date = today.getDate()+'-0'+(today.getMonth()+1)+'-'+today.getFullYear();
}
else{
    date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
}
document.getElementById("sys_date").innerText = date;

let time = today.getHours() + ":" + today.getMinutes();
document.getElementById("sys_time").innerText = time;

function open_start() {
    start = document.querySelector("start");
    if (start.className == 'win_start_hid') {
        start.className = 'win_start';
    } else{
        start.className = 'win_start_hid';
    }
}