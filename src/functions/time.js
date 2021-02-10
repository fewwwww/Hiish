function time(t){
    let past = new Date(t)
    let current = new Date()

    let time = past.getDay()
    let hour = past.getHours()
    let minute = past.getMinutes()
    let year = past.getFullYear()
    let month = past.getMonth()+1
    let day = past.getDate()

    let n_time = current.getDay()
    let n_hour = current.getHours()
    let n_minute = current.getMinutes()
    let n_year = current.getFullYear()
    let n_month = current.getMonth()+1
    let n_day = past.getDate()

    if (day === n_day && year === n_year && month == n_month){
        if (hour<10){
            hour = '0' + hour
        }
        if (minute<10){
            minute = '0' + minute
        }
        return hour+':'+minute
    } if (day+1 === n_day && year === n_year && month == n_month){
        if (hour<10){
            hour = '0' + hour
        }
        if (minute<10){
            minute = '0' + minute
        }
        return '前天'+ hour+':'+minute
    } else{
        return year + '/' + month + '/' + day
    }
}

export default time;