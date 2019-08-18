const input = '12:45:54PM'

const getDateFormat = (date) => {

    return date.slice(date.length-2)
}

const getHourFromDate = (date) => {
    return date.slice(0,2)
}

const timeConversion = (date) => {

    let timeFormat = getDateFormat(date)
    let dateSize = date.length
    let hour = getHourFromDate(date)

    if(timeFormat === 'PM'){    

        let updatedHour = (String(parseInt(hour, 10)+12))
        updatedHour = updatedHour === '24' ? '12' : updatedHour

        return date.replace(hour, updatedHour).slice(0, dateSize-2)
    }

    if(hour === '12'){

        return date.replace(hour, "00").slice(0, dateSize-2)
    }

    return date.slice(0, dateSize-2)

}

const result = timeConversion(input)
console.log(result)
console.log(typeof result)