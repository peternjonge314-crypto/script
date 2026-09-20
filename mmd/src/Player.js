import Card from 'react-bootstrap/Card';

function Player({ name, team, nationality, jerseyNumber, age, imageUrl }) {
  return (
    <Card
      className="player-card h-100"
      style={{
        background: 'linear-gradient(155deg, #172554 0%, #0f172a 72%)',
        border: '1px solid rgba(148, 163, 184, 0.25)',
        borderRadius: '18px',
        color: '#f8fafc',
        overflow: 'hidden',
      }}
    >
      <div className="player-image-wrap">
        <Card.Img variant="top" src={imageUrl} alt={`${name} portrait`} className="player-image" />
        <span className="player-number">#{jerseyNumber}</span>
      </div>
      <Card.Body className="d-flex flex-column p-4">
        <Card.Subtitle className="mb-2 text-uppercase">{team}</Card.Subtitle>
        <Card.Title className="player-name">{name}</Card.Title>
        <Card.Text className="player-details mt-auto mb-0">
          <span>{nationality}</span>
          <span>{age} years old</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

Player.defaultProps = {
  name: 'Unknown player',
  team: 'Free agent',
  nationality: 'Unknown',
  jerseyNumber: 0,
  age: 0,
  imageUrl: 'https://placehold.co/600x600/172554/f8fafc?text=Player',
};

export default Player;