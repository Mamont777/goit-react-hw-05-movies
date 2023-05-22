import RingLoader from 'react-spinners/RingLoader';
import { LoaderBackdrop } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderBackdrop>
      <RingLoader
        color="rgba(214, 54, 160, 0.93)"
        size={150}
        cssOverride={{ position: 'absolute', top: '25%', left: '45%' }}
      />
    </LoaderBackdrop>
  );
};
export default Loader;
