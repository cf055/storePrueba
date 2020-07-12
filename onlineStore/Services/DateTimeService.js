function dateTime() {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1; 
    var year = new Date().getFullYear();
    var hours = new Date().getHours(); 
    var min = new Date().getMinutes();
    var sec = new Date().getSeconds();

    var timeText = date + '/' +  month + '/' + year + ' ' + hours + ':' + min + ':' + sec;
    
    return timeText;
}

export { dateTime };