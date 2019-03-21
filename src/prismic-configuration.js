import Prismic from 'prismic-javascript';

const apiEndpoint = 'https://your-repo-name.prismic.io/api/v2';

// -- Access token if the Prismic repository is not public
const accessToken = '';

// OAuth
// clientId: 'xxxxxx',
// clientSecret: 'xxxxxx',

// -- Links resolution rules
// This function will be used to generate links to Prismic documents
// As your project grows, you should update this function according to your routes
export const linkResolver = (doc) => {
  switch (doc.type) {
    case ('page'): return `/${doc.uid}`
    case ('about'): return '/about'
    case ('quoteslist'): return '/quotes'
    default: return '/'
  }
}

export const client = Prismic.client(apiEndpoint, { accessToken });
