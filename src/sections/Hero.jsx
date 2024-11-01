import { useEffect, useState } from 'react';
import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';
import Button from '../components/Button.jsx';
import CanvasLoader from '../components/Loading.jsx';

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const images = [
    "/pic/first.png",
    "/pic/second.png",
    "/pic/third.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFadeOut(false);
      }, 1500); // Updated duration to 1.5 seconds
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, Welcome to Pcmi <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient z-20 relative">
          Pag-ibig Christian <br /> Ministries
        </p>
      </div>
      <div className="w-full h-full flex justify-center items-start mt-5 px-4 relative">
        <img
          key={currentImageIndex}
          src={images[currentImageIndex]}
          alt="PCMI"
          className={`object-contain w-[90%] h-auto max-h-[80vh] mx-auto transition-opacity duration-1500 absolute`}
          style={{ opacity: fadeOut ? 0 : 1, zIndex: fadeOut ? 0 : 1, transition: 'opacity 1500ms cubic-bezier(0.4, 0, 0.2, 1)' }}
        />
        <img
          src={images[(currentImageIndex + 1) % images.length]}
          alt="PCMI"
          className={`object-contain w-[90%] h-auto max-h-[80vh] mx-auto transition-opacity duration-1500 absolute`}
          style={{ opacity: fadeOut ? 1 : 0, zIndex: fadeOut ? 1 : 0, transition: 'opacity 1500ms cubic-bezier(0.4, 0, 0.2, 1)' }}
        />
      </div>
      <div className="absolute inset-0 w-full h-full">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <group>
              {/* 3D models are commented out for testing purposes */}
              {/* <Target position={[-5, -8, 0]} /> */}
              {/* <Cube position={[4.5, -8, 0]} /> */}
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="About us" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
