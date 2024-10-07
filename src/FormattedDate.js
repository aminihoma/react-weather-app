import React from "react";

export default function FormattedDate(props) {
  let day = props.date.getDay();
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  function Dayname(num) {
    let week = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return week[num];
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      {Dayname(day)} {hours}:{minutes}
    </div>
  );
}
