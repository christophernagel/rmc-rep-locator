import React, { useState } from "react";
import RepCard from "./RepCard";

const RepLocator = () => {
  const [selectedState, setSelectedState] = useState("");

  // States array for dropdown
  const states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ].sort();

  // Sample rep data (replace with your actual data)
  const representatives = [
    {
      id: 1,
      name: "John Smith Sales Group",
      address: "123 Business Ave, Suite 101, Phoenix, AZ 85001",
      phone: "(555) 123-4567",
      state: "Arizona",
    },
    {
      id: 2,
      name: "Southwest Industrial Solutions",
      address: "456 Commerce St, Tucson, AZ 85701",
      phone: "(555) 234-5678",
      state: "Arizona",
    },
    {
      id: 3,
      name: "Pacific Coast Representatives",
      address: "789 Industrial Way, Los Angeles, CA 90015",
      phone: "(555) 345-6789",
      state: "California",
    },
  ];

  // Filter representatives based on selected state
  const filteredReps = selectedState
    ? representatives.filter((rep) => rep.state === selectedState)
    : representatives;

  return (
    <div className="rep-locator-container">
      <div className="rep-locator-layout">
        <div className="rep-locator-content">
          {/* State Select Dropdown */}
          <div className="rep-state-select">
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="rep-state-dropdown"
            >
              <option value="">All States</option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          {/* Rep Cards Grid */}
          {filteredReps.length === 0 ? (
            <div className="rep-grid-empty">
              <p>No representatives found for the selected state.</p>
            </div>
          ) : (
            <div className="rep-cards-grid">
              {filteredReps.map((rep) => (
                <RepCard
                  key={rep.id}
                  name={rep.name}
                  address={rep.address}
                  phone={rep.phone}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RepLocator;
