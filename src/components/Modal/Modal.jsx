import { Component } from 'react';
import css from './Modal.module.css';

export class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener('keydown', this.onEscClick);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscClick);
  }

  onEscClick = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  clickBackdrop = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };


  render() {
    return (
      <div className={css.Overlay} onClick={this.clickBackdrop}>
        <div className={css.Modal}>
          <img src={this.props.url} alt="" />
        </div>
      </div>
    );
  }
}
