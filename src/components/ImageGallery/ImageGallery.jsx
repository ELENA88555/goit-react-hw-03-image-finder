import { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import { fetchImages } from 'servises/fetchImages';
import { Button } from 'components/Button/Button';
// import { toast } from 'react-toastify';
import { Loader } from '../Loader/Loader';

const STATUS = {
  IDLE: 'idle',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
  PENDING: 'pending',
};

export class ImageGallery extends Component {
  state = {
    images: [],
    status: STATUS.IDLE,
    loading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchImg !== this.props.searchImg) {
      this.setState({ status: STATUS.PENDING });
      fetchImages(this.props.searchImg)
        .then(response => {
          if (!response.ok) {
            return Promise.reject(new Error('OOPS'))
          }
          return response.json();
        })
        .then(data => {
          this.setState({ images: data.hits, status: STATUS.RESOLVED });
        })
        .catch(error => this.setState({ error, status: STATUS.REJECTED }));
      // .finally(()=> {this.setState({loading: false})})
    }
    if (prevProps.page !== this.props.page && this.props.page > 1) {
      fetchImages(this.props.searchImg, this.props.page)
        .then(response => {
          if (!response.ok) {
            return Promise.reject(new Error('OOPS'))
          }
          return response.json();
        })
        .then(data => {
          this.setState(prevState => ({
            images: [...prevState.images, ...data.hits],
            status: STATUS.RESOLVED,
          }));
        })
        .catch(error => this.setState({ error, status: STATUS.REJECTED }));
      // .finally(() => {
      //   this.setState({ loading: false });
      // });
    }
  }

  render() {
    const { images, status, error } = this.state;
    if (status === STATUS.PENDING) {
      return <Loader />;
    }
    if (status === STATUS.RESOLVED) {
      return (
        <>
          <ul className={css.imageGallery}>
            {images.map(({ id, largeImageURL, tags }) => (
              <ImageGalleryItem
                key={id}
                url={largeImageURL}
                tags={tags}
                onClick={this.props.onClick}
              />
            ))}
          </ul>
          {this.state.images.length !== 0  
          ? ( <Button onClick={this.props.loadMore} />)
            : (error )
         
          }
          {/* {if (this.state.images.length !== 0 ) 
{ <Button onClick={this.props.loadMore} />}
if ( this.state.images.length === this.state.images.total)
 { toast.error('The pictures are over! Please, write new search name')}
  else  (toast.error('Please, write search name'))
} */}
        </>
      );
    }
    if (status === STATUS.REJECTED) {
      return error;
    }
  }
}
