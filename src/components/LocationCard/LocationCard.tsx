import { useState, MouseEvent } from "react";
import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";

import { LocationInfo } from "../LocationInfo/LocationInfo";
import { LocationDetailsModal } from "../LocationDetailsModal/LocationDetailsModal";
import { Card } from "../../common/components/Card/Card";
import { useModal } from "../../common/hooks/useModal";
import { Location } from "../../common/types/Location";
import editIcon from "../../assets/icons/Edit.svg";

import "./LocationCard.scss";

type TProps = {
  location: Location;
};

export const LocationCard = ({ location }: TProps) => {
  const [viewsCount, setViewsCount] = useState<number>(0);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const { isModalOpen, showModal, closeModal } = useModal();
  const [api, contextHolder] = notification.useNotification();

  const handleMouseOver = (): void => {
    setIsHovering(true);
  };

  const handleMouseOut = (): void => {
    setIsHovering(false);
  };

  const onCardClick = (): void => {
    setViewsCount((prevState: number) => prevState + 1);
    showModal();
  };

  const showNotification = (): void => {
    api.open({
      message: "Editing is not available",
      description:
        "At the moment it's just a stub. The editing function has not yet been implemented, because there was no information on this part in the guidelines.",
      icon: <SmileOutlined style={{ color: "#37B24D" }} />,
    });
  };

  const onEditClick = (event: MouseEvent<HTMLDivElement>): void => {
    event.stopPropagation();
    showNotification();
  };

  return (
    <>
      <Card onClick={onCardClick}>
        <li
          className={isHovering ? "location-card hovered" : "location-card"}
          onMouseOut={handleMouseOut}
          onMouseOver={handleMouseOver}
        >
          <h3 className="title">{location.name}</h3>
          {isHovering && (
            <div className="editing" onClick={onEditClick}>
              <img src={editIcon} alt="Edit" className="icon" />
            </div>
          )}
          <LocationInfo data={location} views={viewsCount} />
        </li>
      </Card>
      <LocationDetailsModal
        locationInfo={location}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        viewsAmount={viewsCount}
      />
      {contextHolder}
    </>
  );
};
