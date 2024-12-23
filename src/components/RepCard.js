import React from "react";

const RepCard = ({ name, title, address, email, phone }) => {
  return (
    <div className="rep-card">
      <div className="rep-card-content">
        <h3 className="rep-card-title">{name}</h3>

        {/* Show title if it exists */}
        {title && <div className="rep-card-subtitle">{title}</div>}

        <div className="rep-card-details">
          {/* Show address if it exists and isn't 'NA' */}
          {address && address !== "NA" && (
            <div className="rep-contact-item">
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
              <span className="rep-contact-text">{address}</span>
            </div>
          )}

          {/* Show email if it exists */}
          {email && (
            <div className="rep-contact-item">
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a href={`mailto:${email}`} className="rep-contact-link">
                {email}
              </a>
            </div>
          )}

          {/* Show phone for all cards */}
          <div className="rep-contact-item">
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
                d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
              />
            </svg>
            <a
              href={`tel:${phone.replace(/\D/g, "")}`}
              className="rep-contact-link"
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
