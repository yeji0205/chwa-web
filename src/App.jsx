/* eslint-disable no-unused-vars */
import { BrowserRouter } from 'react-router-dom';
import { Navbar, Experience, Introduction, MenuGallery, Review, MyMap, Footer } from './components';

const App = () => (
  <BrowserRouter>
    <div className="w-full z-0 bg-skin font-dovemayo">
        <Navbar />
        <Experience />
        <Introduction />
        <div className= "sm:px-[13%] px-[10%]">
          <MenuGallery />
          <Review />
        </div>
        <MyMap />
        <Footer />
    </div>
  </BrowserRouter>
);

export default App