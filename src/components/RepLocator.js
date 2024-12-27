import React, { useState } from "react";
import RepCard from "./RepCard";

const RepLocator = () => {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedState, setSelectedState] = useState("");

  // Define regions and their states
  const regions = {
    Western: {
      states: [
        "California",
        "Oregon",
        "Washington",
        "Arizona",
        "Utah",
        "Colorado",
      ],
      description: "Covered by Ewing Foley Inc.",
    },
    "Upper Midwest": {
      states: [
        "Minnesota",
        "Wisconsin",
        "North Dakota",
        "South Dakota",
        "Iowa",
        "Nebraska",
      ],
      description: "Covered by EMS Partners",
    },
  };

  // Get all available states
  const availableStates = Object.values(regions)
    .flatMap((region) => region.states)
    .sort();

  // Normalized representatives data - all using states array
  const representatives = [
    {
      id: 1,
      name: "Ewing Foley - Cupertino",
      address: "10061 Bubb Road, Suite 100 Cupertino, CA 95014",
      phone: "(408) 342-1200",
      states: ["California"],
    },
    {
      id: 2,
      name: "Ewing Foley - Dallas",
      address: "NA",
      phone: "(469) 663-1188",
      states: ["Texas"],
    },
    {
      id: 3,
      name: "Ewing Foley - Denver",
      address: "165 S. Union Blvd, Ste 610 Lakewood, CO 80228",
      phone: "(555) 345-6789",
      states: ["Colorado"],
    },
    {
      id: 4,
      name: "Ewing Foley - Houston",
      address: "1610 Greens Road #300, Houston, TX, 77032",
      phone: "(469) 663-1188",
      states: ["Texas"],
    },
    {
      id: 5,
      name: "Ewing Foley - Los Angeles",
      address: "13810 Cerritos Corporate Dr, Unit A Cerritos, CA 90703",
      phone: "(714) 526-5700",
      states: ["California"],
    },
    {
      id: 6,
      name: "Ewing Foley - Phoenix",
      address: "4720 East Cotton Gin Loop, Suite 132 Phoenix, AZ 85040",
      phone: "(602) 240-5050",
      states: ["Arizona"],
    },
    {
      id: 7,
      name: "Ewing Foley - Portland",
      address: "7117 SW Beveland Rd, Suite 201 Tigard, OR 97223",
      phone: "(503) 603-6600",
      states: ["Oregon"],
    },
    {
      id: 8,
      name: "Ewing Foley - Sacramento",
      address: "13620 Lincoln Way, Suite 100 Auburn, CA 95603",
      phone: "(530) 889-6120",
      states: ["California"],
    },
    {
      id: 9,
      name: "Ewing Foley - Salt Lake City",
      address: "NA",
      phone: "(801) 972-0070",
      states: ["Utah"],
    },
    {
      id: 10,
      name: "Ewing Foley - Seattle",
      address: "10516 NE 37th Circle Kirkland, WA 98033",
      phone: "(425) 822-9666",
      states: ["Washington"],
    },
    {
      id: 11,
      name: "EMS Partners - Minneapolis",
      title: "Sean Dunham, Managing Partner",
      email: "Sean.dunham@emspartnersinc.com",
      phone: "612.201.4795",
      states: [
        "Minnesota",
        "North Dakota",
        "South Dakota",
        "Iowa",
        "Nebraska",
        "Wisconsin",
      ],
    },
    {
      id: 12,
      name: "EMS Partners - Minneapolis",
      title:
        "Mike Skovran, Managing Partner & Manager- Contractor and Industrial business",
      email: "mskovran@emspartners.com",
      phone: "612.388.0119",
      states: [
        "Minnesota",
        "North Dakota",
        "South Dakota",
        "Iowa",
        "Nebraska",
        "Wisconsin",
      ],
    },
    {
      id: 13,
      name: "EMS Partners - Minneapolis",
      title: "Tim Sanford, Inside Sales Manager",
      email: "Tim.sanford@emspartnersinc.com",
      phone: "763.222.7188",
      states: [
        "Minnesota",
        "North Dakota",
        "South Dakota",
        "Iowa",
        "Nebraska",
        "Wisconsin",
      ],
    },
    {
      id: 14,
      name: "EMS Partners - Minneapolis",
      title: "Rich Donley, Account Manager - Graybar & Contractor Activities",
      email: "Rich.donley@emspartnersinc.com",
      phone: "612.247.8887",
      states: [
        "Minnesota",
        "North Dakota",
        "South Dakota",
        "Iowa",
        "Nebraska",
        "Wisconsin",
      ],
    },
    {
      id: 15,
      name: "EMS Partners - North & South Dakota",
      title:
        "Tim McNaboe, Account Manager - North and South Dakota/CED Locations",
      email: "tim@emspartnersinc.com",
      phone: "701.595.1538",
      states: ["North Dakota", "South Dakota"],
    },
    {
      id: 16,
      name: "EMS Partners - Minneapolis",
      title:
        "Ronnie Donley, Account Manager - Viking Electric, Van Meter, JH Larson",
      email: "Ronnie.donley@emspartnersinc.com",
      phone: "763.220.9167",
      states: ["Minnesota", "Iowa", "Wisconsin"],
    },
    {
      id: 17,
      name: "EMS Partners - Iowa",
      title: "Shaun Helmuth, Account Manager - Iowa and Nebraska",
      email: "Shaun.hellmuth@emspartnersinc.com",
      phone: "612.772.5048",
      states: ["Iowa", "Nebraska"],
    },
    {
      id: 18,
      name: "EMS Partners - Minneapolis",
      title: "Mike Ellias, Director of EPC Accounts",
      email: "mellias@emspartnersinc.com",
      phone: "612.819.4257",
      states: [
        "Minnesota",
        "North Dakota",
        "South Dakota",
        "Iowa",
        "Nebraska",
        "Wisconsin",
      ],
    },
  ];

  // Simplified filtering logic
  const filteredReps = selectedState
    ? representatives.filter((rep) => rep.states.includes(selectedState))
    : selectedRegion
    ? representatives.filter((rep) =>
        rep.states.some((state) =>
          regions[selectedRegion].states.includes(state)
        )
      )
    : representatives;

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
    setSelectedState("");
  };

  const handleStateChange = (state) => {
    setSelectedState(state);
    if (state) {
      const region =
        Object.entries(regions).find(([_, data]) =>
          data.states.includes(state)
        )?.[0] || "";
      setSelectedRegion(region);
    }
  };

  return (
    <div className="rep-locator-container">
      <div className="rep-locator-layout">
        <div className="rep-locator-content">
          {/* Filters */}
          <div className="rep-filters">
            <div className="rep-filter-group">
              <label className="rep-filter-label">Select Region:</label>
              <select
                value={selectedRegion}
                onChange={(e) => handleRegionChange(e.target.value)}
                className="rep-select"
              >
                <option value="">All Regions</option>
                {Object.entries(regions).map(([region, data]) => (
                  <option key={region} value={region}>
                    {region} - {data.description}
                  </option>
                ))}
              </select>
            </div>

            <div className="rep-filter-group">
              <label className="rep-filter-label">Select State:</label>
              <select
                value={selectedState}
                onChange={(e) => handleStateChange(e.target.value)}
                className="rep-select"
              >
                <option value="">All States</option>
                {availableStates
                  .filter(
                    (state) =>
                      !selectedRegion ||
                      regions[selectedRegion].states.includes(state)
                  )
                  .map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          {/* Rep Cards Grid */}
          {filteredReps.length === 0 ? (
            <div className="rep-grid-empty">
              <p>No representatives found for the selected area.</p>
              <p className="rep-contact-support">
                Please contact our office for assistance with locating a
                representative.
              </p>
            </div>
          ) : (
            <div className="rep-cards-grid">
              {filteredReps.map((rep) => (
                <RepCard
                  key={rep.id}
                  name={rep.name}
                  title={rep.title || null}
                  address={rep.address || null}
                  email={rep.email || null}
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
