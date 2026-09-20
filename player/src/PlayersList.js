import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Player from './Player';
import players from './players';

function PlayersList() {
  return (
    <Container className="py-5">
      <header className="mb-5 text-center">
        <p className="mb-2 text-uppercase fw-bold" style={{ color: '#ef8354', letterSpacing: '0.12em' }}>
          Ultimate team
        </p>
        <h1 style={{ color: '#17324d', fontWeight: '800' }}>FIFA Player Cards</h1>
        <p className="mb-0" style={{ color: '#5b6b7a' }}>
          
        </p>
      </header>
      <Row className="g-4">
        {players.map((player) => (
          <Col key={`${player.name}-${player.jerseyNumber}`} xs={12} sm={6} lg={3}>
            <Player {...player} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PlayersList;
