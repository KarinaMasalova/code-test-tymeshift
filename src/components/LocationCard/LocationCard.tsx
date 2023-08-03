import { useState } from "react";

import { Card } from "../../common/components/Card/Card";
import { Location } from "../../common/types/Location";
import editIcon from "../../assets/icons/Edit.svg";
import timezoneIcon from "../../assets/icons/Timezone.svg";
import usersIcon from "../../assets/icons/Users.svg";
import viewsIcon from "../../assets/icons/Views.svg";

import "./LocationCard.scss";

export const LocationCard = ({ name, createdAt, userCount }: Location) => {
  const [viewsCount, setViewsCount] = useState<number>(0);
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const handleMouseOver = (): void => {
    setIsHovering(true);
  };

  const handleMouseOut = (): void => {
    setIsHovering(false);
  };
  const onCardClick = (): void => {
    setViewsCount((prevState: number) => prevState + 1);
  };

  return (
    <Card>
      <li
        className={isHovering ? "location-card hovered" : "location-card"}
        onClick={onCardClick}
        onMouseOut={handleMouseOut}
        onMouseOver={handleMouseOver}
      >
        <h3 className="title">{name}</h3>
        {isHovering && (
          <div className="editing">
            <img src={editIcon} alt="Edit" className="icon" />
          </div>
        )}
        <div className="content">
          <div className="content-option user-count">
            <img src={usersIcon} alt="Users count" className="icon" />
            <p className="text">{userCount + " Users"}</p>
          </div>
          <div className="content-option creation-date">
            <img src={timezoneIcon} alt="Creation date" className="icon" />
            <p className="text">{createdAt}</p>
          </div>
          <div className="content-option views">
            <img src={viewsIcon} alt="Views amount" className="icon" />
            <p className="text">{viewsCount + " Views"}</p>
          </div>
        </div>
      </li>
    </Card>
  );
};
