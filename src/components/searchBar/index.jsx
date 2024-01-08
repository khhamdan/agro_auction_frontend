import { InputBase, makeStyles } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import SvgIcon from '../../assets/search.svg';
import {
  getAllProducts,
  searchProduct,
} from '../../redux/product/product.actions';
import { useTranslation } from 'react-i18next';
import { SearchOutlined } from '@ant-design/icons';

const SearchBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [t, i18n] = useTranslation('global');

  const handleSearch = (event) => {
    const query = event.target.value;
    if (query.trim() !== '') {
      dispatch(searchProduct(query));
    } else {
      dispatch(getAllProducts()); // Dispatch action to get all products when the search query is empty
    }
  };

  const placeholder = t('global.Consumer.searchPlaceholder');
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <div className={classes.SearchBox}>
        <InputBase
          className={classes.input}
          placeholder={placeholder}
          onChange={handleSearch}
        />
        <SearchOutlined />
        {/* <img src={SvgIcon} search width="24.75px" alt="search icon" /> */}
      </div>
    </div>
  );
};

export default SearchBar;

const useStyles = makeStyles((theme) => ({
  SearchBox: {
    marginTop: 20,
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: '50px',
    padding: '5px 10px',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
  },
  input: {
    width: '100%',
    fontSize: '1rem',
    fontWeight: '500',
    color: '#333',
    padding: '5px 10px',
    borderRadius: '50px',
    border: 'none',
    outline: 'none',
    backgroundColor: '#f5f5f5',
    '&::placeholder': {
      color: '#999',
      fontWeight: '400',
    },
  },
}));
