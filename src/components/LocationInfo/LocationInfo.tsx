import { Location } from "../../common/types/Location";
import usersIcon from "../../assets/icons/Users.svg";
import timezoneIcon from "../../assets/icons/Timezone.svg";
import viewsIcon from "../../assets/icons/Views.svg";

import "./LocationInfo.scss";

type TProps = {
  data: Location;
  views: number;
};

const formatDateToCustomFormat = (isoDate: string): string => {
  const date: Date = new Date(isoDate);

  let hours: number = date.getHours();
  const minutes: number = date.getMinutes();

  const ampm: string = hours >= 12 ? "pm" : "am";
  hours = hours % 12 || 12; // handle 12pm

  // get timezone offset
  const timezoneOffsetMinutes: number = date.getTimezoneOffset();
  const timezoneOffsetHours: number = timezoneOffsetMinutes / 60;
  const timezoneOffsetFormatted: string =
    (timezoneOffsetHours <= 0 ? "+" : "-") +
    ("0" + Math.abs(timezoneOffsetHours)).slice(-2) +
    ":" +
    ("0" + Math.abs(timezoneOffsetMinutes % 60)).slice(-2);

  return `${hours}:${("0" + minutes).slice(
    -2
  )}${ampm} (GMT${timezoneOffsetFormatted})`;
};

export const LocationInfo = ({ data, views }: TProps) => {
  const usersAmount: string = `${data.userCount} ${
    +data.userCount === 1 ? " User" : " Users"
  }`;
  const viewsAmount: string = `${views} ${views === 1 ? " View" : " Views"}`;

  return (
    <div className="location-details">
      <div className="content-option user-count">
        <img src={usersIcon} alt="Users count" className="icon" />
        <p className="text">{usersAmount}</p>
      </div>
      <div className="content-option creation-date">
        <img src={timezoneIcon} alt="Creation date" className="icon" />
        <p className="text">{formatDateToCustomFormat(data.createdAt)}</p>
      </div>
      <div className="content-option views">
        <img src={viewsIcon} alt="Views amount" className="icon" />
        <p className="text">{viewsAmount}</p>
      </div>
    </div>
  );
};
