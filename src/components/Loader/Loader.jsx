import { MagnifyingGlass} from 'react-loader-spinner';
import css from './Loader.module.css';

export function Loader() {
  return (
    <div className={css.loader}>
      < MagnifyingGlass
        ariaLabel="loading-indicator"
        height={50}
        width={50}
        strokeWidth={5}
        strokeWidthSecondary={1}
        color="blue"
        secondaryColor="white"
      />
    </div>
  );
}
