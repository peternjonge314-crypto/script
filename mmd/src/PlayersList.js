import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Player from './Player';
import players from './players';

function PlayersList() {
  return (
    <Container className="players-list py-5">
      <div className="mb-5">
        <p className="eyebrow mb-2">Ultimate team collection</p>
        <h1 className="display-title">FIFA player cards</h1>
        <p className="intro-copy mb-0">A starting XI of football icons, ready for match day.</p>
      </div>
      <Row xs={1} sm={2} lg={4} className="g-4">
        {players.map((player) => (
          <div key={`${player.name}-${player.jerseyNumber}`}>
            <Player {...player} />
          </div>
        ))}
      </Row>
    </Container>
  );
}

export default PlayersList;