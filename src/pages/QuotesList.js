import React, { Fragment, useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { RichText } from 'prismic-reactjs';
import { Predicates } from 'prismic-javascript';

import { client } from '../prismic-configuration';

import { Loader } from '../components';
import { NotFound } from '../pages';

const QuotesList = () => {
  const [page, setPageData] = useState(null);
  const [quotes, setQuotesData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    // it fetches title and description of the page QuotesList
    const fetchPage = async () => {
      const result = await client.getSingle('quoteslist');
      setLoading(false);
      if (result) {
        setPageData(result);
      } else {
        console.warn('Page not found. Make sure it exists in your Prismic API');
      }
    };

    // it fetches the list of existing quotes on our API
    const fetchList = async () => {
      const result = await client.query(Predicates.at('document.type', 'quote'));
      if (result) {
        setQuotesData(result);
        window.PrismicToolbar.setupEditButton();
      } else {
        console.warn('List of quotes not found. Make sure it exists in your Prismic API');
      }
    };

    fetchList();
    fetchPage();
  }, []);

  if (loading) {
    return <Loader />
  }

  return (
    <Fragment>
      {
        page ? (
          <div data-wio-id={page.id}>
            <section
              className="mt-mb-3 text-dark"
            >
              <div className="banner-content container">
                <h2 className="banner-title text-dark">{RichText.asText(page.data.title)}</h2>
                <p className="banner-description text-dark">{RichText.asText(page.data.paragraph)}</p>
              </div>
            </section>
            {
              quotes && (
                <section className="mt-mb-3 text-dark">
                  <div className="section container">
                    <ul className="list-square">
                      {
                        quotes.results.map(quote => (
                          <li key={quote.id} className="list-item">
                            <RouterLink to={`/quotes/${quote.uid}`}>
                              <span className="list-text">
                                {RichText.asText(quote.data.description)}
                              </span>
                            </RouterLink>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </section>
              )
            }
          </div>
        ) : <NotFound />
      }
    </Fragment>
  );
}

export default QuotesList;
