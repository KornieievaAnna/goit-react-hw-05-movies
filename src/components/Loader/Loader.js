import { ThreeDots } from 'react-loader-spinner';
import { LoaderStyled } from './Loader.styled';

export function Loader() {
  return (
    <LoaderStyled>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#fffad9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderStyled>
  );
}
