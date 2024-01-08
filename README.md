# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
import { Box, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import CardProduct from '.';
import image from '../../assets/dalchana.jpg';
import { getProductsApi } from '../../Http/api';
import { useSelector } from 'react-redux/es/hooks/useSelector';

export default function ProductsMap() {
const [allProductsData, setAllProductsData] = useState([]);
const searchItem =
useSelector((state) => state.Product.allProductsData) || [];

console.log('Searched products', searchItem);

const searchProductByLocation =
useSelector((state) => state.Product.allProductsDataByLocation.products) ||
[];
console.log('Searched products by location', searchProductByLocation);

const classes = useStyles();
// Fetch all products on component mount
useEffect(() => {
getProductsApi().then((res) => {
if (res) {
// Set local state for default display
setAllProductsData(res.data.productInfo);
}
});
}, []);

useEffect(() => {
// Update products based on searchItem and searchProductByLocation
if (searchProductByLocation.length > 0) {
// Show products based on location filter
setAllProductsData(searchProductByLocation);
} else if (searchItem.length > 0) {
// Show products based on general search
setAllProductsData(searchItem);
} else {
// Show all products as default
setAllProductsData(allProductsData);
}
}, [searchItem, searchProductByLocation, allProductsData]);

return (
<Box className={classes.main}>

<div className={classes.gridSection}>
{allProductsData.map((item, i) => (
<CardProduct key={i} {...item} />
))}
</div>
</Box>
);
}

const useStyles = makeStyles((theme) => ({
gridSection: {
width: '80%',
margin: '0 auto',
padding: '90px 0px',
display: 'grid',
gridTemplateColumns: '1fr 1fr 1fr',
gap: 40,
},
inner: {
width: '80%',
color: theme.palette.text.secondary,
margin: 'auto',
textAlign: 'center',
[theme.breakpoints.down('sm')]: {
width: '100%',
},

    '& .typo1': {
      padding: '40px  0px',
      [theme.breakpoints.down('sm')]: {
        padding: '10px 0px',
      },
    },
    '& .typo2': {
      fontSize: 18,
      padding: '5px  0px',
      [theme.breakpoints.down('sm')]: {
        padding: '10px 0px',
      },
    },

},
}));

export const Data = [
{
image: image,
text: ' chana dhal',
price: '50',
location: 'hunza',
weight: '500g',
},
{
image: image,
text: ' chana dhal',
price: '50',
location: 'hunza',
weight: '500g',
},
{
image: image,
text: ' chana dhal',
price: '50',
location: 'hunza',
weight: '500g',
},
{
image: image,
text: ' chana dhal',
price: '50',
location: 'hunza',
weight: '500g',
},
{
image: image,
text: ' chana dhal',
price: '50',
location: 'hunza',
weight: '500g',
},
];

<!-- 2nd code -->

import { Box, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import CardProduct from '.';
import image from '../../assets/dalchana.jpg';
import { getProductsApi } from '../../Http/api';
import { useSelector } from 'react-redux/es/hooks/useSelector';

export default function ProductsMap() {
const [allProductsData, setAllProductsData] = useState([]);
const searchItem =
useSelector((state) => state.Product.allProductsData) || [];

console.log('Searched products', searchItem);

const searchProductByLocation =
useSelector((state) => state.Product.allProductsDataByLocation.products) ||
[];
console.log('Searched products by location', searchProductByLocation);

const classes = useStyles();

useEffect(() => {
getProductsApi().then((res) => {
if (res) {
console.log('Products', res);
setAllProductsData(res.data.productInfo);
}
});
}, []);

return (
<Box className={classes.main}>
<div className={classes.gridSection}>
{/_ Render products from searchItem _/}
{searchItem.length !== 0 && (
<>
{searchItem.map((item, i) => (
<CardProduct key={i} {...item} />
))}
</>
)}

        {/* Render products from searchProductByLocation */}
        {searchProductByLocation.length !== 0 && (
          <>
            {searchProductByLocation.map((item, i) => (
              <CardProduct key={i} {...item} />
            ))}
          </>
        )}

        {/* Render all products if no search or location filter */}
        {searchItem.length === 0 && searchProductByLocation.length === 0 && (
          <>
            {allProductsData.map((item, i) => (
              <CardProduct key={i} {...item} />
            ))}
          </>
        )}
      </div>
    </Box>

);
}

const useStyles = makeStyles((theme) => ({
gridSection: {
width: '80%',
margin: '0 auto',
padding: '90px 0px',
display: 'grid',
gridTemplateColumns: '1fr 1fr 1fr',
gap: 40,
},
inner: {
width: '80%',
color: theme.palette.text.secondary,
margin: 'auto',
textAlign: 'center',
[theme.breakpoints.down('sm')]: {
width: '100%',
},

    '& .typo1': {
      padding: '40px  0px',
      [theme.breakpoints.down('sm')]: {
        padding: '10px 0px',
      },
    },
    '& .typo2': {
      fontSize: 18,
      padding: '5px  0px',
      [theme.breakpoints.down('sm')]: {
        padding: '10px 0px',
      },
    },

},
}));

export const Data = [
{
image: image,
text: ' chana dhal',
price: '50',
location: 'hunza',
weight: '500g',
},
{
image: image,
text: ' chana dhal',
price: '50',
location: 'hunza',
weight: '500g',
},
{
image: image,
text: ' chana dhal',
price: '50',
location: 'hunza',
weight: '500g',
},
{
image: image,
text: ' chana dhal',
price: '50',
location: 'hunza',
weight: '500g',
},
{
image: image,
text: ' chana dhal',
price: '50',
location: 'hunza',
weight: '500g',
},
];
