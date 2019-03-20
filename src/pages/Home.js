import React, { Fragment, useState, useEffect } from 'react';
import SliceZone from '../components/slices/SliceZone';

import { Loader, Banner } from '../components';
import NotFound from './NotFound';

import { client } from '../prismic-configuration';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [home, setHomeData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await client.getSingle('home');
      if (result) {
        window.PrismicToolbar.setupEditButton();
        setHomeData(result);
      } else {
        console.warn('Home document not found. Make sure it exists in your Prismic API');
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Fragment>
      {
        home ? (
          <div className="homepage" data-wio-id={home.id}>
            <Banner {...home.data.banner[0]} />
            <div className="container">
              <SliceZone sliceZone={home.data.page_content} />
            </div>
          </div>
        ) : <NotFound />
      }
    </Fragment>
  );
}

export default Home;
