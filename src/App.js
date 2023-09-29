import Accueil from './Accueil.jsx';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Pages from './Pages.jsx';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Accueil />
        <Pages />

     </BrowserRouter>
    </div>
  );
}

export default App;
