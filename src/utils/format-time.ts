export default (time: string) => {
    const date = new Date(time);

    console.log('DATE', time, date, date.getHours())

    return `${date.getHours()}:${date.getMinutes()}`;
}
