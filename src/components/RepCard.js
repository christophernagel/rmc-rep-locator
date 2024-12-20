import React from "react";

const RepCard = ({ name, address, phone }) => {
  return (
    <div className="rep-card">
      <div className="rep-card-content">
        <h3 className="rep-card-title">{name}</h3>

        <div className="rep-card-details">
          <div className="rep-contact-item">
            <svg
              className="rep-contact-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <address className="rep-contact-text">{address}</address>
          </div>

          <div className="rep-contact-item">
            <svg
              className="rep-contact-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
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
