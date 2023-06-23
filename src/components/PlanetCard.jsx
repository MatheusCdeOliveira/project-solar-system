import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div className="flex-row w-1/3 m-auto" data-testid="planet-card">
        <p
          className="text-2xl hover:text-yellow-300"
          data-testid="planet-name"
        >
          {planetName}

        </p>
        <img
          className="m-auto"
          id="img-planets"
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
        />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
