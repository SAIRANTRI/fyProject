import { Outlet } from 'react-router-dom';
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* Header stays at the top */}
      <div className="w-full flex justify-center px-5">
        <Header />
      </div>

      <div className="w-full flex justify-center bg-primary">
        <Outlet /> 
      </div>

      {/* Footer stays at the bottom */}
      <div className="w-full flex justify-center px-5">
        <Footer />
      </div>
    </div>
  );
}

export default App;
