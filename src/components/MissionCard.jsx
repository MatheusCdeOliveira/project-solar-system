import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div
        className="m-auto rounded-xl pb-8 mb-10 border-2 w-1/6 px-10 mr-12"
        data-testid="mission-card"
      >
        <div className="border-b-2 opacity-80 h-14 mb-6 flex items-center justify-center">
          <p
            className="text-l font-extrabold italic"
            data-testid="mission-name"
          >
            {name}

          </p>
        </div>
        <p className="opacity-80" data-testid="mission-year">{year}</p>
        <p className="opacity-80" data-testid="mission-country">{country}</p>
        <p className="opacity-80" data-testid="mission-destination">{destination}</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
