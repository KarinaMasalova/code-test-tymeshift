import { Modal } from "antd";

import { LocationInfo } from "../LocationInfo/LocationInfo";
import { Location } from "../../common/types/Location";

import "./LocationDetailsModal.scss";

type TProps = {
  locationInfo: Location;
  isModalOpen: boolean;
  closeModal: () => void;
  viewsAmount: number;
};

const modalStyles = {
  maskStyle: { backgroundColor: "#00112299" },
  okButtonStyle: { backgroundColor: "#37B24D" },
  cancelButtonStyle: { display: "none" },
};

export const LocationDetailsModal = ({
  locationInfo,
  isModalOpen,
  closeModal,
  viewsAmount,
}: TProps) => {
  return (
    <Modal
      className="location-details-modal"
      title={locationInfo.name}
      open={isModalOpen}
      onOk={closeModal}
      onCancel={closeModal}
      okText="Done"
      cancelButtonProps={{ style: modalStyles.cancelButtonStyle }}
      okButtonProps={{ shape: "round", style: modalStyles.okButtonStyle }}
      maskStyle={modalStyles.maskStyle}
      centered
    >
      <LocationInfo data={locationInfo} views={viewsAmount} />
      <div className="description-section">
        <p className="title">Description</p>
        <p className="description">{locationInfo.description}</p>
      </div>
    </Modal>
  );
};
