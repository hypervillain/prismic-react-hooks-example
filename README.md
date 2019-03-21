[![Dependency Status](https://david-dm.org/raulg/reactjs-website.svg)](https://david-dm.org/raulg/reactjs-website)

# Prismic React Site Example
This project is an implementation of the Prismic multipage site demo using ReactJS. Built up from the starter project, it's meant to provide you with an idea of how to build your own sites using the Prismic features. Read our [user guide](https://intercom.help/prismicio/examples/react-js-samples/sample-multi-page-site-with-navigation-in-reactjs) if you need guidance on how to use this repository.

Working example here -> https://prismic-example-website.netlify.com

You don't need to clone this repo. Install the Prismic CLI and simply run:
```
> $ prismic theme https://github.com/hypervillain/prismic-react-hooks-example --conf src/prismic-configuration.js
```

You will also need to update `public/index.html` manually, and add your newly created domain name:

```html
  <script>
    window.prismic = {
      endpoint: 'https://your-newly-created-domain-name.prismic.io/api/v2'
    };
  </script>
```
👆 Note that in a next version of Prismic React, you will not need to do this at all 🙌

## Install dependencies
```
> $ npm install
```
## Run the app in the development mode
Build and open your browser to http://localhost:3000.
```
> $ npm start
```

## How does it work?
To see an example of how to query your data with the Prismic client, open `src/App.js` and follow along!
```javascript
const App = () => {

  const [layout, setLayoutData] = useState(null);

  useEffect(() => {
   const fetchData = async () => {
     // We fetch the Layout document on Prismic API
     const result = await client.getSingle('layout');
     if (result) {
       // And set the state when data is loaded
       return setLayoutData(result);
     }
   };
     fetchData();
  }, []);

  ...
```

👆 This code assumes that you have successfully created your repository on Prismic.io and that you have created a `layout` document in the writing room. If you're are not familiar with React hooks, think of `useEffect` as a `componentDidMount` for functional components. We're simply telling React to call `fetchData` whenever possible. When a result is returned from the Prismic client, with set state calling `setLayoutData` and pass the data to `Header` and `Footer` ! Easy peasy.

## Build the app for production to the build folder
```
> $ npm run build
```

## Deployment
This project is ready for deployment using [Netlify](https://www.netlify.com), if you're interested in deploying to other platforms review the suggested [solutions](https://facebook.github.io/create-react-app/docs/deployment).

Add Netlify CLI commands here?
- `npm run build && cd build && netlify deploy --prod`


## Licence

This software is licensed under the Apache 2 license, quoted below.

Copyright 2017 Prismic (https://prismic.io).

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this project except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
