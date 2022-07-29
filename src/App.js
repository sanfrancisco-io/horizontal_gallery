import React, { useEffect, useRef } from 'react';
import locomotiveScroll from 'locomotive-scroll';
import { imageData } from './data';
import GalleryItem from './components/GalleryItem';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './styles/home.scss';
import './styles/locoStyle.css';

function App() {
  const ref = useRef(null);

  useEffect(() => {
    if (ref) {
      new locomotiveScroll({
        el: ref.current,
        smooth: true,
        direction: 'horizontal',
        multiplier: 0.5,
      });
    }
  }, []);

  const images = imageData.map((tupples, index) =>
    tupples.map((url, elementIndex) => (
      <GalleryItem
        key={url}
        src={url}
        index={elementIndex}
        columnOffset={index * 14}
      />
    ))
  );
  return (
    <>
      <Navbar />
      <div className='main-container'>
        <div className='scroll-container' data-scroll-container ref={ref}>
          <div className='content'>
            <div className='gallery'>
              {images}
              <div className='gallery-helper'>Scroll to discover more</div>
              <div
                className='behind-text fill'
                data-scroll
                data-scroll-speed={-1}
              >
                every body loves a good story
              </div>
              <div
                className='behind-text outline'
                data-scroll
                data-scroll-speed={-2}
              >
                every body loves a good story
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
