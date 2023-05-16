import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';



export class App extends Component {
  state = {
    showModal: false,
    searchImg: '',
    loading: false,
    modalImg: '',
    page: 1,
  };

  handleSearchForm = searchImg => {
    this.setState({ searchImg });
  };
 
toggleModal = () =>{
  this.setState(({showModal})=> ({showModal: !showModal}))
}

  loadMoreBtn = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  getLargeImg = url => {
    this.toggleModal();
    this.setState({ modalImg: url });
  };

  render() {
    const { searchImg, page, showModal, modalImg } = this.state;
    const { handleSearchForm, loadMoreBtn, getLargeImg } = this;
    return (
      <div>
        <Searchbar onSubmit={handleSearchForm}></Searchbar>

        <ToastContainer autoClose={2000} />
        <ImageGallery
          searchImg={searchImg}
          onClick={getLargeImg}
          loadMore={loadMoreBtn}
          page={page}
        ></ImageGallery>
        {showModal && <Modal url={ modalImg} onClose={this.toggleModal} />}
      </div>
    );
  }
}
