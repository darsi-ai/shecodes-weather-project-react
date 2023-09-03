export default function FormattedDate(props) {
    const time = props.date;
    const days = ["sunday", "monday","tuesday","wednesday","thursday","friday","saturday"];
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
    
    let day = days[time.getDay()];
    let month = months[time.getMonth()];
    let dayDate = time.getDate();
    return(`${day}, ${month} ${dayDate}`)
}