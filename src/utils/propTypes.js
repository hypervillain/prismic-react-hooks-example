import {
  func,
  shape,
  string,
} from 'prop-types';

export const locationPropType = shape({
    pathname: string.isRequired,
});

export const historyPropType = shape({
  push: func.isRequired,
});

// If you need to pass Prismic client
// or configuration, you can use this shape
export const prismicCtxPropType = shape({
  client: shape({
    //...
    getSingle: func.isRequired,
    previewSession: func.isRequired,
  }).isRequired,
  linkResolver: func.isRequired,
})
