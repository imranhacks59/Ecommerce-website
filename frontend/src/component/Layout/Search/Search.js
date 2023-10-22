import React, { useState, useEffect } from "react";
import "./Search.css";
import { Autocomplete, IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './Search.css'
import axiosInstance from "../../../api/axios";
const Search = ({ showSearchModal, setShowSearchModal }) => {
  const [autocompleteOptions, setAutocompleteOptions] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); 
  console.log(autocompleteOptions)
  const searchDataverse = async (searchQuery) => {
    try {
      const response = await axiosInstance.get(`/api/products/?query=${searchQuery}`);
      if (response?.data) {
        // const data = await response.json();
        const items = response?.data?.results?.products || [];
        // console.log('i');
        // console.log(items)
        setAutocompleteOptions(items);
      }
    } catch (error) {
      console.error("Error fetching data from the API:", error);
    }
  };

  useEffect(() => {
    if(searchQuery.length){
    searchDataverse(searchQuery);
    }
  }, [searchQuery]); 

  return (
    <div className="searchContainerDarkBg">
      <div className="searchInputPosition">
        <div className="searchInputModal">
          <div className="searchInputBox">
            <div className="searchModalBackArrow">
              <KeyboardBackspaceIcon
                className="drawerBackIcon"
                onClick={() => setShowSearchModal(false)}
              />
            </div>
            <div className="searchModalInput">
              <Autocomplete
                freeSolo
                id="search-autocomplete"
                className="autoc"
                options={autocompleteOptions} // Use the autocomplete options from state
                getOptionLabel={(option) => option.title} // Display the name of the item
                renderOption={(props, option) => (
                  <li {...props}>
                    {option.type === "dataset" ? (
                      <Link to={option.url} className="product-link">
                        {option.title}
                      </Link>
                    ) : (
                      <Link to={`/product/${option.id}`} className="dataverse-link">
                        {option.title}
                      </Link>
                    )}
                  </li>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Search..."
                    variant="outlined"
                    size="small"
                    className="searchTextfield"
                    sx={{
                      backgroundColor: 'white',
                      borderRadius: '5px 5px 5px 5px',
                      marginLeft: '0px',
                      width: '70%',
                    }}
                    InputProps={{
                      ...params.InputProps,
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton>
                            <SearchIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                      style: {
                        outlineColor: 'yellow',
                      },
                    }}
                    value={searchQuery} // Bind the input value to searchQuery
                    onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery on input change
                  />
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
