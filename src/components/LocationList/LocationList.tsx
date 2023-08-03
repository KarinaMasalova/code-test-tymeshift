import { LocationCard } from "../LocationCard/LocationCard";
import { Loader } from "../../common/components/Loader/Loader";
import { useFetchData } from "../../common/hooks/useFetchData";
import { Location } from "../../common/types/Location";

import "./LocationList.scss";

const URL: string = "https://6033c4d8843b15001793194e.mockapi.io/api/locations";

export const LocationList = () => {
  const { loading, error, data: locations } = useFetchData<Location[]>(URL);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <ul className="location-list">
      {locations.map((location: Location) => (
        <LocationCard key={location.id} location={location}></LocationCard>
      ))}
    </ul>
  );
};
