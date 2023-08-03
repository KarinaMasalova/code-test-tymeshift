import { LocationCard } from "../LocationCard/LocationCard";
import { useFetchData } from "../../common/hooks/useFetchData";
import { Location } from "../../common/types/Location";

import "./LocationList.scss";

const URL: string = "https://6033c4d8843b15001793194e.mockapi.io/api/locations";

export const LocationList = () => {
  const { loading, error, data: locations } = useFetchData<Location[]>(URL);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <ul className="location-list">
      {locations.map((location: Location) => (
        <LocationCard
          key={location.id}
          name={location.name}
          createdAt={location.createdAt}
          userCount={location.userCount}
        ></LocationCard>
      ))}
    </ul>
  );
};
