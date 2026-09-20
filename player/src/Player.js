import Card from 'react-bootstrap/Card';

function Player({
  name,
  team,
  nationality,
  jerseyNumber,
  age,
  imageUrl,
}) {
  return (
    <Card
      className="h-100 overflow-hidden shadow-sm"
      style={{ border: '0', borderRadius: '18px', backgroundColor: '#ffffff' }}
    >
      <Card.Img
        variant="top"
        src={imageUrl}
        alt={`${name} playing football`}
        style={{ height: '220px', objectFit: 'cover' }}
      />
      <Card.Body style={{ padding: '1.25rem' }}>
        <Card.Subtitle
          className="mb-2 text-uppercase"
          style={{ color: '#ef8354', fontSize: '0.75rem', letterSpacing: '0.08em' }}
        >
          {team}
        </Card.Subtitle>
        <Card.Title style={{ color: '#17324d', fontSize: '1.35rem', fontWeight: '700' }}>
          {name}
        </Card.Title>
        <Card.Text className="mb-0" style={{ color: '#5b6b7a', lineHeight: '1.8' }}>
          <strong>Nationality:</strong> {nationality}
          <br />
          <strong>Jersey number:</strong> {jerseyNumber}
          <br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

Player.defaultProps = {
  name: 'PETER NJONGE',
  team: 'MANCITY',
  nationality: 'KENYA',
  jerseyNumber: 67,
  age: 24,
  imageUrl: 'https://placehold.co/900x600/e8eef2/17324d?text=Player',
};

export default Player;
