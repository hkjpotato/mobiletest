import React from 'react';
import LocationsContainer from './LocationsContainer';

const SearchResultsContainer = () =>
  <div className="hc-u-grid-container">
    <div className="hc-u-grid-row">
      <aside className="hc-u-column-sm-3">
        Search Filters
      </aside>
      <section className="hc-u-column-sm-7">
        <LocationsContainer />
      </section>
      <aside className="hc-u-column-sm-2">
      </aside>
    </div>
  </div>
;

export default SearchResultsContainer;
