const { google } = require('googleapis');

const cal = google.calendar({
    version: 'v3',
    auth: process.env.CALENDAR_AUTH
});

const calendar = '8enqceun1tjelr7ologo30th2c@group.calendar.google.com';

const event = cal.calendar.createAllDayEvent('Apollo 11 Landing',
    new Date('January 20, 2019'));
    console.log(event);
