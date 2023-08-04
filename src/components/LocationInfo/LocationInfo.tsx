import moment from "moment";

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
  const date = moment(isoDate);

  // format to 12-hour format (e.g., 2:32pm)
  const time: string = date.format("h:mmA");

  // get the timezone offset (e.g., +01:00)
  const timezoneOffsetFormatted: string = date.format("Z");

  return `${time} (GMT${timezoneOffsetFormatted})`;
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
