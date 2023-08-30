export default function FormattedDate(props) {
    let time = props.date;
    let days = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];
    let day = days[time.getDay()-1];
    let hour = time.getHours();
    let minutes = time.getMinutes();
    if (minutes < 10){
        minutes = `0${minutes}`;
    }
    if (hour < 10){
        hour = `0${hour}`;
    }
    return(`${day}, ${hour}:${minutes}`)
}