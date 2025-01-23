import './App.scss';
import { Header, Navigation } from './Parts';
import { Another } from './Parts/Slider';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Another />
      {/* <Slider /> */}
      <Header />
      <Header />
      <Header />
      <Header />
      <Header />
      <Header />
    </div>
  );
}

export default App;
