import { Outlet } from 'react-router-dom';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';

export const App = () => {

  return (
    <div className="App">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}


