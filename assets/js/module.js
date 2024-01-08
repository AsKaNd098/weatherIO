'use strict';

export const weekDayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
export const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];


/**
 * 
 * @param {number} dateUnix unix date in seconds
 * @param {number} timezone Timezone shift from UTC in second
 * @returns {string} Date string. format: "Sunday 10, Jan"
 */
export const getDate = function(dateUnix, timezone) {
    const date = new Date((dateUnix + timezone) * 1000);
    const WeekDayName = weekDayNames[date.getUTCDay()];
    const monthName = monthNames[date.getUTCMonth()];

    return `${WeekDayName} ${date.getUTCDate()}, ${monthName}`;
}


/**
 * 
 * @param {number} timeUnix unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Time string. format : "HH:MM AM/PM"
 */

export const getTime = function(timeUnix, timezone){
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const period = hours >= 12 ? "PM":"AM";

    return `${hours % 12 || 12}:${minutes} ${period}`;
}


/**
 * 
 * @param {number} timeUnix unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Time string. format : "HH AM/PM"
 */

export const getHours = function(timeUnix, timezone){
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const period = hours >= 12 ? "PM":"AM";

    return `${hours % 12 || 12} ${period}`;
}


/**
 * 
 * @param {number} mps Meter per second  
 * @returns {number} kilometer per hours
 */
export const mps_to_kmh = mps => {
    const mph = mps * 3600;
    return mph / 1000;
}


export const aqiText = {
    1: {
        level : "Good",
        message : "Air Quality is considered satisfactory, and air pollution posses little or no risk"
    },
    2: {
        level : "Fair",
        message : "Air Quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are usually sensative to air pollution"
    },
    3: {
        level : "Moderate",
        message : "Members of sensative group may experience health effects. The general public is not likely to be affected"
    },
    4: {
        level : "Poor",
        message : "Everyone may begin to experience health effects; members of sensative group may experience more serious health issues"
    },
    5: {
        level : "Very Poor",
        message : "Health warnings of emergency condition. The entire population is more likely to be affected"
    }
}