import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '../Button';
import s from './Searchbar.module.css';

export default function Searchbar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleNameImageChange = event => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchQuery.trim() === '') {
      toast.error('Введите ваш запрос');
      return;
    }
    onSubmit(searchQuery);
  };

  return (
    <header className={s.Searchbar}>
      <form onSubmit={handleSubmit} className={s.SearchForm}>
        <Button className={s.SearchFormButton} />
        <input
          className={s.SearchFormInput}
          name="searchQuery"
          onChange={handleNameImageChange}
          value={searchQuery}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// class Searchbar extends Component {
//   static propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//   };

//   state = {
//     searchQuery: '',
//   };

//   handleNameImageChange = e => {
//     this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
//   };

//   handleSubmit = e => {
//     const { searchQuery } = this.state;
//     e.preventDefault();

//     if (searchQuery.trim() === '') {
//       toast.error('Enter your request');
//       return;
//     }
//     this.props.onSubmit(searchQuery);
//   };

//   render() {
//     const { searchQuery } = this.state;
//     return (
//       <header className={s.Searchbar}>
//         <form onSubmit={this.handleSubmit} className={s.SearchForm}>
//           <Button className={s.SearchFormButton} />
//           <input
//             className={s.SearchFormInput}
//             name="searchQuery"
//             onChange={this.handleNameImageChange}
//             value={searchQuery}
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//           />
//         </form>
//       </header>
//     );
//   }
// }

// export default Searchbar;
