import './App.css';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import Header from './containers/Header/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <Layout />
      <Footer />
    </div>
  );
}

export default App;
