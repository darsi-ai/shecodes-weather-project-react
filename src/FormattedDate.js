export default function FormattedDate(props) {
    const time = props.date;
    const days = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];
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
    
      let day = days[time.getDay()-1];
    let month = months[time.getMonth()];
    let dayDate = time.getDate();
    return(`${day}, ${month} ${dayDate}`)
}