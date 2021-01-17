import './App.css';
import ConfirmButton from './ConfirmButton';
import Store from "./pages/store"


function App() {
  return (
    <div className="container">
      <h1>Velkommen til pilserpils.no</h1>
      <h1>Et nettsted for folk som digger pils</h1>
      <p>En nettbutikk for alt som er relatert til at pils er pils</p>
      <Store />
      <ConfirmButton
        dialog={['Vil du vite en hemmelighet?', 'sikker?', 'BV er HeadOfBalls!']}
        action={() => console.log('action!')} />
    </div>
  );
}

export default App;
