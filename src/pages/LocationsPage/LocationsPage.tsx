import { LocationList } from "../../components/LocationList/LocationList";

import "./LocationsPage.scss";

export const LocationsPage = () => (
  <div className="locations-page">
    <nav className="navigation">
      <h1 className="page-name">All locations</h1>
      <h2 className="category">Acme locations</h2>
    </nav>
    <section className="locations-results">
      <LocationList />
    </section>
  </div>
);
