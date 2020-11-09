import './App.css';

import StoreCard from './components/storeCard'

function App() {
  return (
    <div className="container">
      <h1>Velkommen til pilserpils.no</h1>
      <p>En nettbutikk for alt som er relatert til at pils er pils</p>
      <StoreCard />
    </div>
  );
}

export default App;
