import Sped from '../models/sped';

const oneHour = 3600000;
const oneDay = 86400000;

const getSpedsFromPastHour = () => Sped.find({ timestamp: { $gte: new Date() - oneHour } });

const getSpedsFromPastDay = () => Sped.find({ timestamp: { $gte: new Date() - oneDay } });

export { getSpedsFromPastHour, getSpedsFromPastDay };