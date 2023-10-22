import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../../assets/snyp-logo.png";
// import logo from "../../../assets/phantom-logo3.png";
import playStore from "../../../assets/android-play.png";
import appStore from "../../../assets/ios-play.png";
import MenuIcon from "@mui/icons-material/Menu";
import { TextField, IconButton, InputAdornment, Autocomplete } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import PlaceIcon from '@mui/icons-material/Place';
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Dropdown } from "./Dropdown";
import PersonIcon from "@mui/icons-material/Person";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../actions/userAction";
import UserDropdown from "./userDropdown";
// import { getSubcategories } from "../../../actions/homeAction";
import AutocompleteSearch from '../Search/Search'
// import { getCartItem } from "../../../actions/cartAction";
import axiosInstance from '../../../api/axios';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
const categories=[
  'laptop','mobile'
]
const subcategories={
  'laptop': ['Gaming Laptops', 'Business Laptops', 'Ultrabooks'],
  'mobile': ['Smartphones', 'Feature Phones', 'Accessories'],
}
function Navbar() {
  const [click, setClick] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Category");
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [category, setCategory] = useState('')
  const handleClick = () => setClick(!click);

  const { isAuthenticated } = useSelector((state) => state.user)
  // const { loading, error, categories } = useSelector((state) => state.categories)
  const {cartItems}=useSelector((state)=>state.cart)
  // const { allProducts } = useSelector((state) => state.allProducts)
  const options = ['Option1', 'Option 2', 'Option 3', 'Option 4'];
  const dispatch = useDispatch();
  // const { subcategories } = useSelector((state) => state.subcategories)
  const [autocompleteOptions, setAutocompleteOptions] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); 
  const searchDataverse = async (searchQuery) => {
    try {
      const response = await axiosInstance.get(`/api/products/?query=${searchQuery}`);
      console.log('res')
      console.log(response)
      if (response?.data) {
        // const data = await response.json();
        const items = response?.data?.results?.products || [];
        console.log('i');
        console.log(items)
        setAutocompleteOptions(items);
      }
    } catch (error) {
      console.error("Error fetching data from the API:", error);
    }
  };
  useEffect(()=>{
    // dispatch(getCartItem())
  },[dispatch]);

  useEffect(() => {
    if(searchQuery?.length>0){
      searchDataverse(searchQuery);
      }
  }, [searchQuery]); 
  useEffect(() => {
    if (category) {
      // dispatch(getSubcategories(category.slug))
    }
  }, [category])
  const logoutHandler = () => {
    dispatch(logout())
  };
  return (
    <div className="navBarBigContainer">
      <div className="navBarContainer">
        <div className="logoContainer">
          <div className="menuIcon" onClick={() => setDrawerOpen(!drawerOpen)}>
            <MenuIcon className="menuIconImg" style={{ fontSize: "2.5rem" }} />
          </div>
          <div
          >
            <Link to="/">
              <img
                // width={70}
                // height={50}
                src={logo}
                alt="logo"
                className="logo"
              />
            </Link>
          </div>
        </div>

        {/* mobile categories */}
        {drawerOpen && (
          <Sidebar
            categories={categories}
            drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen}
            subcategories={subcategories}
            category={category}
            setCategory={setCategory}
          />
        )}
        {/* mobile navbar */}
        <div className="navIconsMobile">
          <div>
            <Link to="/cart" style={{ textDecoration: "none" }}>
              <div className="navHomeIcon" style={{ marginRight: "13px" }}>
                <PersonIcon
                  style={{
                    border: "1px solid #e0e0e0",
                    borderRadius: "50%",
                    fontSize: "1.8rem",
                    // marginRight:'7px'
                  }}
                />
              </div>
            </Link>
          </div>
          <div>
            <Link to="/cart" style={{ textDecoration: "none" }}>
              <div className="navHomeIcon" style={{ marginRight: "5px" }}>
                <ShoppingCartIcon style={{ fontSize: "1.8rem" }} />


              </div>
            </Link>
          </div>
          <div>
            <div className="navHomeIcon" onClick={() => setClick(!click)}>
              <MoreVertIcon style={{ fontSize: "2rem" }} />
            </div>
          </div>
        </div>
        <div
          className="searchCategory"
        >
          {/* Category Section */}
          {/* <div className="searchCategoryDropdown">
            <Dropdown
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div> */}

          {/* Search Box */}
          <div className="custom-textfield">
            {/* <Autocomplete
              freeSolo
              id="search-autocomplete"
              // options={['abc', 'def,']}
              options={allProducts}
              getOptionLabel={(option) => option.title}

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
                    width: '265px'
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
                  }}
                />
              )}
            /> */}
            
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
        {/* </div> */}

        <div className={`navIcons ${click && "active"}`}>

          {!isAuthenticated && (
            <div className="navLoginCont">
              <Link to="/login" style={{ textDecoration: "none" }}>
                <div
                  className="navLogin"
                  style={{
                    background: '#ea7b64',
                    padding: "8px 8px",
                    borderRadius: "4px",
                  }}
                >
                  <p
                    style={{
                      color: 'white',
                      fontSize: 15,
                      // fontWeight: 500,
                    }}
                  >
                    Login/Register
                  </p>
                </div>
              </Link>
            </div>
          )}


          {isAuthenticated && window.innerWidth > 1000 && (
            <div>
              <UserDropdown
              />
            </div>
          )}


        
          <div
              // className="navWishlist"
              >
            <Link to="/wishlist" className="navWishlist" style={{ textDecoration: "none" }}>

              {/* <div style={{ flexDirection: "row" }}> */}
                {/* <img width={30} height={25} src={playStore} />
                <img width={30} height={25} src={appStore} /> */}
              {/* <FavoriteBorderIcon /> */}
              <FavoriteIcon />
              {/* </div> */}
              <p>Wishlist</p>
              </Link>
            </div>
          <div>
            <Link to="/cart" style={{ textDecoration: "none" }}>
              <div className="navHomeIcon">
                <ShoppingCartIcon style={{ fontSize: "2rem" }} />
                <div className="navHomeCart">
                  <p className="cartItemCount">{cartItems?.lines&&cartItems?.lines?.length}</p>
                  <p>Cart</p>
                </div>
              </div>
            </Link>
          </div>
          {isAuthenticated && window.innerWidth <= 1000 && (
            <div>
              <div
                className="navHomeIcon"
                style={{
                  // background: "#e9611e ",
                  // background:'rgb(186 191 207)',
                  background: '#ea7b64',
                  padding: "8px 8px",
                  borderRadius: "4px",
                }}
                onClick={logoutHandler}
              >
                <p
                  style={{
                    color: 'white',
                    fontSize: 15,
                    // fontWeight: 500,
                  }}
                >
                  Logout
                </p>
              </div>
            </div>
          )}
          <div>
            {/* <div
              className="navHomeAppDownload">

              <div style={{ flexDirection: "row" }}>
                <img width={30} height={25} src={playStore} />
                <img width={30} height={25} src={appStore} />
              </div>
              <p>Download the app!</p>
            </div> */}

          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
