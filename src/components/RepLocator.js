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
        "Texas",
        "Wyoming",
        "Alabama",
        "Idaho",
        "Montana",
        "Nevada",
        "Alaska",
        "Oklahoma",
        "New Mexico",
        "Missouri",
        "Mississippi",
        "Louisiana",
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
      ],
      description: "Covered by EMS Partners",
    },
    "Mid-Atlantic": {
      states: ["Maryland", "Virginia", "Washington, D.C."],
      description: "Covered by Phoenix Sales & Marketing Inc.",
    },
    "RMC Territory": {
      states: [
        "Massachusetts",
        "Florida",
        "Illinois",
        "Rhode Island",
        "Hawaii",
        "Pennsylvania",
        "Kansas",
        "Connecticut",
        "West Virginia",
        "Vermont",
        "Michigan",
        "Tennessee",
        "New York",
        "New Hampshire",
        "North Carolina",
        "Kentucky",
        "Indiana",
        "Ohio",
        "Georgia",
        "South Carolina",
        "Arkansas",
        "New Jersey",
        "Nebraska",
        "Maine",
        "Delaware",
      ],
      description: "Covered by RMC",
    },
  };

  // Get all available states
  const availableStates = Object.values(regions)
    .flatMap((region) => region.states)
    .sort();

  // Updated representatives data with all requested changes
  const representatives = [
    {
      id: 17,
      name: "EMS Partners - Iowa",
      title: "Shaun Helmuth",
      email: "Shaun.hellmuth@emspartnersinc.com",
      phone: "612.772.5048",
      website: "https://emspartnersinc.com",
      states: ["Iowa"],
    },
    {
      id: 12,
      name: "EMS Partners - Minneapolis",
      title: "Mike Skovran",
      email: "mskovran@emspartners.com",
      phone: "612.388.0119",
      website: "https://emspartnersinc.com",
      states: ["Minnesota", "Wisconsin"],
    },
    {
      id: 15,
      name: "EMS Partners - North & South Dakota",
      title: "Tim McNaboe",
      email: "tim@emspartnersinc.com",
      phone: "701.595.1538",
      website: "https://emspartnersinc.com",
      states: ["North Dakota", "South Dakota"],
    },
    {
      id: 49,
      name: "Ewing Foley - Alabama",
      address: "NA",
      phone: "(469) 663-1188",
      website: "http://ewingfoley.com",
      states: ["Alabama"],
    },
    {
      id: 54,
      name: "Ewing Foley - Alaska",
      address: "NA",
      phone: "(425) 822-9666",
      website: "https://ewingfoley.com",
      states: ["Alaska"],
    },
    {
      id: 1,
      name: "Ewing Foley - Cupertino",
      address: "10061 Bubb Road, Suite 100 Cupertino, CA 95014",
      phone: "(408) 342-1200",
      website: "https://ewingfoley.com",
      states: ["California"],
    },
    {
      id: 2,
      name: "Ewing Foley - Dallas",
      address: "NA",
      phone: "(469) 663-1188",
      website: "https://ewingfoley.com",
      states: ["Texas"],
    },
    {
      id: 3,
      name: "Ewing Foley - Denver",
      address: "165 S. Union Blvd, Ste 610 Lakewood, CO 80228",
      phone: "(555) 345-6789",
      website: "https://ewingfoley.com",
      states: ["Colorado"],
    },
    {
      id: 4,
      name: "Ewing Foley - Houston",
      address: "NA",
      phone: "(469) 663-1188",
      website: "https://ewingfoley.com",
      states: ["Texas"],
    },
    {
      id: 50,
      name: "Ewing Foley - Idaho",
      address: "NA",
      phone: "(425) 822-9666",
      website: "http://ewingfoley.com",
      states: ["Idaho"],
    },
    {
      id: 5,
      name: "Ewing Foley - Los Angeles",
      address: "13810 Cerritos Corporate Dr, Unit A Cerritos, CA 90703",
      phone: "(714) 526-5700",
      website: "https://ewingfoley.com",
      states: ["California"],
    },
    {
      id: 60,
      name: "Ewing Foley - Louisiana",
      address: "NA",
      phone: "(469) 663-1188",
      website: "http://ewingfoley.com",
      states: ["Louisiana"],
    },
    {
      id: 59,
      name: "Ewing Foley - Mississippi",
      address: "NA",
      phone: "(469) 663-1188",
      website: "http://ewingfoley.com",
      states: ["Mississippi"],
    },
    {
      id: 57,
      name: "Ewing Foley - Missouri",
      address: "NA",
      phone: "(303) 423-3334",
      website: "https://ewingfoley.com",
      states: ["Missouri"],
    },
    {
      id: 51,
      name: "Ewing Foley - Montana",
      address: "NA",
      phone: "(303) 423-3334",
      website: "https://ewingfoley.com",
      states: ["Montana"],
    },
    {
      id: 52,
      name: "Ewing Foley - Nevada",
      address: "NA",
      phone: "(714) 526-5700",
      website: "http://ewingfoley.com",
      states: ["Nevada"],
    },
    {
      id: 56,
      name: "Ewing Foley - New Mexico",
      address: "NA",
      phone: "(602) 240-5050",
      website: "http://ewingfoley.com",
      states: ["New Mexico"],
    },
    {
      id: 55,
      name: "Ewing Foley - Oklahoma",
      address: "NA",
      phone: "(469) 663-1188",
      website: "https://ewingfoley.com",
      states: ["Oklahoma"],
    },
    {
      id: 6,
      name: "Ewing Foley - Phoenix",
      address: "4720 East Cotton Gin Loop, Suite 132 Phoenix, AZ 85040",
      phone: "(602) 240-5050",
      website: "https://ewingfoley.com",
      states: ["Arizona"],
    },
    {
      id: 7,
      name: "Ewing Foley - Portland",
      address: "7117 SW Beveland Rd, Suite 201 Tigard, OR 97223",
      phone: "(503) 603-6600",
      website: "https://ewingfoley.com",
      states: ["Oregon"],
    },
    {
      id: 8,
      name: "Ewing Foley - Sacramento",
      address: "13620 Lincoln Way, Suite 100 Auburn, CA 95603",
      phone: "(530) 889-6120",
      website: "https://ewingfoley.com",
      states: ["California"],
    },
    {
      id: 9,
      name: "Ewing Foley - Salt Lake City",
      address: "165 S. Union Boulevard #610 Lakewood, CO 80228",
      phone: "(801) 972-0070",
      website: "https://ewingfoley.com",
      states: ["Utah"],
    },
    {
      id: 10,
      name: "Ewing Foley - Seattle",
      address: "10516 NE 37th Circle Kirkland, WA 98033",
      phone: "(425) 822-9666",
      website: "https://ewingfoley.com",
      states: ["Washington"],
    },
    {
      id: 48,
      name: "Ewing Foley - Wyoming",
      address: "NA",
      phone: "(303) 423-3334",
      website: "https://ewingfoley.com",
      states: ["Wyoming"],
    },
    {
      id: 19,
      name: "Phoenix Sales & Marketing Inc. - Maryland",
      title: "Michael Smith",
      address: "1550 Caton Center Drive, Suite N Halethorpe, MD 21227",
      phone: "(410) 247-8505",
      website: "https://myphoenixsales.com",
      states: ["Maryland"],
    },
    {
      id: 21,
      name: "Phoenix Sales & Marketing Inc. - Northern Virginia",
      title: "Michael Smith",
      address: "NA",
      phone: "(410) 247-8505",
      website: "https://myphoenixsales.com",
      states: ["Virginia"],
    },
    {
      id: 20,
      name: "Phoenix Sales & Marketing Inc. - Washington, D.C.",
      title: "Michael Smith",
      address: "NA",
      phone: "(410) 247-8505",
      website: "https://myphoenixsales.com",
      states: ["Washington, D.C."],
    },
    {
      id: 61,
      name: "RMC - Arkansas",
      title: "Leslie Easter",
      email: "leaster@repmaterials.com",
      phone: "(832) 262-1849",
      website: null,
      states: ["Arkansas"],
    },
    {
      id: 62,
      name: "RMC - Connecticut",
      title: "Leslie Easter",
      email: "leaster@repmaterials.com",
      phone: "(832) 262-1849",
      website: null,
      states: ["Connecticut"],
    },
    {
      id: 63,
      name: "RMC - Delaware",
      title: "Leslie Easter",
      email: "leaster@repmaterials.com",
      phone: "(832) 262-1849",
      website: null,
      states: ["Delaware"],
    },
    {
      id: 64,
      name: "RMC - Florida",
      title: "Leslie Easter",
      email: "leaster@repmaterials.com",
      phone: "(832) 262-1849",
      website: null,
      states: ["Florida"],
    },
    {
      id: 65,
      name: "RMC - Georgia",
      title: "Leslie Easter",
      email: "leaster@repmaterials.com",
      phone: "(832) 262-1849",
      website: null,
      states: ["Georgia"],
    },
    {
      id: 66,
      name: "RMC - Hawaii",
      title: "Leslie Easter",
      email: "leaster@repmaterials.com",
      phone: "(832) 262-1849",
      website: null,
      states: ["Hawaii"],
    },
    {
      id: 67,
      name: "RMC - Illinois",
      title: "Leslie Easter",
      email: "leaster@repmaterials.com",
      phone: "(832) 262-1849",
      website: null,
      states: ["Illinois"],
    },
    {
      id: 68,
      name: "RMC - Indiana",
      title: "Leslie Easter",
      email: "leaster@repmaterials.com",
      phone: "(832) 262-1849",
      website: null,
      states: ["Indiana"],
    },
    {
      id: 69,
      name: "RMC - Kansas",
      title: "Leslie Easter",
      email: "leaster@repmaterials.com",
      phone: "(832) 262-1849",
      website: null,
      states: ["Kansas"],
    },
    {
      id: 70,
      name: "RMC - Kentucky",
      title: "Leslie Easter",
      email: "leaster@repmaterials.com",
      phone: "(832) 262-1849",
      website: null,
      states: ["Kentucky"],
    },
    {
      id: 71,
      name: "RMC - Maine",
      title: "Leslie Easter",
      email: "leaster@repmaterials.com",
      phone: "(832) 262-1849",
      website: null,
      states: ["Maine"],
    },
    {
      id: 72,
      name: "RMC - Massachusetts",
      title: "Leslie Easter",
      email: "leaster@repmaterials.com",
      phone: "(832) 262-1849",
      website: null,
      states: ["Massachusetts"],
    },
    {
      id: 73,
      name: "RMC - Michigan",
      title: "Leslie Easter",
      email: "leaster@repmaterials.com",
      phone: "(832) 262-1849",
      website: null,
      states: ["Michigan"],
    },
    {
      id: 74,
      name: "RMC - Nebraska",
      title: "Leslie Easter",
      email: "leaster@repmaterials.com",
      phone: "(832) 262-1849",
      website: null,
      states: ["Nebraska"],
    },
    {
      id: 75,
      name: "RMC - New Hampshire",
      title: "Leslie Easter",
      email: "leaster@repmaterials.com",
      phone: "(832) 262-1849",
      website: null,
      states: ["New Hampshire"],
    },
    {
      id: 76,
      name: "RMC - New Jersey",
      title: "Leslie Easter",
      email: "leaster@repmaterials.com",
      phone: "(832) 262-1849",
      website: null,
      states: ["New Jersey"],
    },
    {
      id: 77,
      name: "RMC - New York",
      title: "Leslie Easter",
      email: "leaster@repmaterials.com",
      phone: "(832) 262-1849",
      website: null,
      states: ["New York"],
    },
    {
      id: 78,
      name: "RMC - North Carolina",
      title: "Leslie Easter",
      email: "leaster@repmaterials.com",
      phone: "(832) 262-1849",
      website: null,
      states: ["North Carolina"],
    },
    {
      id: 79,
      name: "RMC - Ohio",
      title: "Leslie Easter",
      email: "leaster@repmaterials.com",
      phone: "(832) 262-1849",
      website: null,
      states: ["Ohio"],
    },
    {
      id: 80,
      name: "RMC - Pennsylvania",
      title: "Leslie Easter",
      email: "leaster@repmaterials.com",
      phone: "(832) 262-1849",
      website: null,
      states: ["Pennsylvania"],
    },
    {
      id: 81,
      name: "RMC - Rhode Island",
      title: "Leslie Easter",
      email: "leaster@repmaterials.com",
      phone: "(832) 262-1849",
      website: null,
      states: ["Rhode Island"],
    },
    {
      id: 82,
      name: "RMC - South Carolina",
      title: "Leslie Easter",
      email: "leaster@repmaterials.com",
      phone: "(832) 262-1849",
      website: null,
      states: ["South Carolina"],
    },
    {
      id: 83,
      name: "RMC - Tennessee",
      title: "Leslie Easter",
      email: "leaster@repmaterials.com",
      phone: "(832) 262-1849",
      website: null,
      states: ["Tennessee"],
    },
    {
      id: 84,
      name: "RMC - Vermont",
      title: "Leslie Easter",
      email: "leaster@repmaterials.com",
      phone: "(832) 262-1849",
      website: null,
      states: ["Vermont"],
    },
    {
      id: 85,
      name: "RMC - West Virginia",
      title: "Leslie Easter",
      email: "leaster@repmaterials.com",
      phone: "(832) 262-1849",
      website: null,
      states: ["West Virginia"],
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
                  website={rep.website || null}
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
