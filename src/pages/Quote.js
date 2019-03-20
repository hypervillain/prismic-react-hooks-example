import React, { Fragment, useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { RichText } from 'prismic-reactjs';

import NotFound from './NotFound';
import { SliceZone } from '../components/slices';
import { Loader } from '../components';

import { client } from '../prismic-configuration';

const Quote = ({ match: { params: { uid } } }) => {

  const [quote, setQuoteData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await client.getByUID('quote', uid);
      setLoading(false);
      if (result) {
        window.PrismicToolbar.setupEditButton();
        return setQuoteData(result);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loader />
  }

  return (
    <Fragment>
      {
        quote ? (
          <div data-wio-id={quote.id}>
            <section
              className="mt-mb-3 text-dark"
            >
              <div className="banner-content container">
              <RouterLink to="/quotes">← Back</RouterLink>
                <h3 className="banner-title text-dark">{RichText.asText(quote.data.description)}</h3>
              </div>
            </section>
            <section className="mt-mb-3 text-dark">
              <div className="section container">
                <SliceZone sliceZone={quote.data.body} />
              </div>
            </section>
          </div>
        ) : <NotFound />
      }
    </Fragment>
  )
}

export default Quote;
