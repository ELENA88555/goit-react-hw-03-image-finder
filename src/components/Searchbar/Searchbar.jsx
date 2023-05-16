import { Component } from "react";
import css from "./Searchbar.module.css"
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export class Searchbar extends Component  {
state = {
  value : '',
}

 handleChange = event => {
  this.setState({value: event.target.value.toLowerCase()})
  };

handleSubmit = (event)=> {
event.preventDefault()
if (this.state.value.trim() === '') {
  toast.error("Please, write search name")
  return
  }
this.props.onSubmit(this.state.value)
console.log(this.state.value)
this.setState({value: ''})
}


  render(){
    return (
      <header className={css.searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit} >
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonlabel}>Search</span>
          </button>
  
          <input
          name="input"
          value={this.state.value}
          onChange={this.handleChange}
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  };

  }


