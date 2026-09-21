import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
    Person: {
      fullName: 'melvin mark',
      bio: 'A pioneering mathematician who imagined the possibilities of programmable machines.',
      imgSrc: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=80',
      profession: 'Mathematician and writer',
    },
    shows: false,
    elapsedSeconds: 0,
  };

  componentDidMount() {
    this.startedAt = Date.now();
    this.timer = setInterval(() => {
      this.setState({ elapsedSeconds: Math.floor((Date.now() - this.startedAt) / 1000) });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  toggleProfile = () => {
    this.setState(({ shows }) => ({ shows: !shows }));
  };

  render() {
    const { Person, shows, elapsedSeconds } = this.state;

    return (
      <main className="App">
        <section className="profile-shell">
          <p className="eyebrow">Class component study</p>
          <h1>Meet the mind behind the machine</h1>
          <p className="timer" role="status">
             <strong>{elapsedSeconds}</strong> seconds.
          </p>
          <button type="button" onClick={this.toggleProfile}>
            {shows ? 'Hide profile' : 'Show profile'}
          </button>

          {shows && (
            <article className="profile-card">
              <img src={Person.imgSrc} alt={Person.fullName} />
              <div>
                <p className="profession">{Person.profession}</p>
                <h2>{Person.fullName}</h2>
                <p>{Person.bio}</p>
              </div>
            </article>
          )}
        </section>
      </main>
    );
  }
}

export default App;
