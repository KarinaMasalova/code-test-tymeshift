import { useEffect } from "react";
import { FrownOutlined } from "@ant-design/icons";

import { LocationCard } from "../LocationCard/LocationCard";
import { ErrorContainer } from "../ErrorContainer/ErrorContainer";
import { Loader } from "../../common/components/Loader/Loader";
import { useFetchData } from "../../common/hooks/useFetchData";
import { useNotification } from "../../common/hooks/useNotification";
import { Location } from "../../common/types/Location";

import "./LocationList.scss";

const URL: string = "https://6033c4d8843b15001793194e.mockapi.io/api/locations";

export const LocationList = () => {
  const { loading, error, data: locations } = useFetchData<Location[]>(URL);

  const { showNotification, contextHolder } = useNotification({
    message: "Oops, something went wrong",
    description: error,
    icon: <FrownOutlined style={{ color: "red" }} />,
  });

  useEffect(() => {
    if (!error) return;
    showNotification();
  }, [error, showNotification]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorContainer>{contextHolder}</ErrorContainer>;
  }

  return (
    <ul className="location-list">
      {locations.map((location: Location) => (
        <LocationCard key={location.id} location={location}></LocationCard>
      ))}
    </ul>
  );
};
