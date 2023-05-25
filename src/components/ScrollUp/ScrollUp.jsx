import { useState, useEffect } from 'react';
import { ScrollUpBtn, ArrowIcon } from './ScrollUp.styled';
import { TbArrowBigUpLinesFilled } from 'react-icons/tb';

const ScrollUp = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setShowScrollUp(true);
      } else {
        setShowScrollUp(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {showScrollUp && (
        <ScrollUpBtn onClick={handleScrollUp}>
          <TbArrowBigUpLinesFilled size="25" />
        </ScrollUpBtn>
      )}
    </>
  );
};

export default ScrollUp;
