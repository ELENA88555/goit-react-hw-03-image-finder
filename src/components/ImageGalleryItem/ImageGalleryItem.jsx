import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';


export const ImageGalleryItem = ({ url, largeImage, tags, onClick}) => {
  return (
    <li className={css.imageGalleryItem} >
      <img className={css.imageGalleryItemImage} src={url} data-srs = {largeImage} alt={tags} onClick={()=> onClick(url)} />
    </li>
  );
};



ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};


