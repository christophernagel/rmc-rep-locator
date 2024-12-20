import React from "react";

const RepCard = ({ name, address, phone }) => {
  return (
    <div className="rep-card">
      <div className="rep-card-content">
        <h3 className="rep-card-title">{name}</h3>

        <div className="rep-card-details">
          <div className="rep-contact-item">
            {/* Simple building icon */}
            <svg
              viewBox="0 0 24 24"
              className="rep-contact-icon"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
              />
              <polyline
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                points="9 22 9 12 15 12 15 22"
              />
            </svg>
            <address className="rep-contact-text">{address}</address>
          </div>

          <div className="rep-contact-item">
            {/* Simple phone icon */}
            <svg
              viewBox="0 0 24 24"
              className="rep-contact-icon"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.5 9.5c1.333-1.333 3.667-1.333 5 0"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.5 14.5c1.333 1.333 3.667 1.333 5 0"
              />
            </svg>
            <a
              href={`tel:${phone.replace(/\D/g, "")}`}
              className="rep-phone-link"
            >
              {phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepCard;
