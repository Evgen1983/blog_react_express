import React from 'react';
import ReactDOMServer from 'react-dom/server';

import BlogPage from './components/containers/BlogPage.js';

const result = ReactDOMServer.renderToString(
    React.createElement(BlogPage)
);

export default result;