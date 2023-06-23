import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div className="flex flex-row flex-wrap ml-10">
          {missions.map((e) => (
            <MissionCard
              key={ e.year }
              name={ e.name }
              year={ e.year }
              country={ e.country }
              destination={ e.destination }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Missions;
