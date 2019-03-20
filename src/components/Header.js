import React, { Fragment } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import {
  array,
  arrayOf,
  shape,
  string,
} from 'prop-types';

import { Link, RichText } from 'prismic-reactjs';
import { linkResolver } from '../prismic-configuration';

const Header = ({ layout }) => (
  <header className="site-header">
    {
      layout && (
        <Fragment>
          <RouterLink to="/">
          {
            layout.title && (<div className="logo">{RichText.asText(layout.title)}</div>)
          }
          </RouterLink>
          {
            layout.menu_links && (
              <nav>
                <ul>
                  {layout.menu_links.map(menuLink => (
                    <li key={menuLink.link.id}>
                      <RouterLink to={Link.url(menuLink.link, linkResolver)}>
                        {RichText.asText(menuLink.label)}
                      </RouterLink>
                    </li>
                  ))}
                </ul>
              </nav>
            )
          }
        </Fragment>
      )
    }
  </header>
);

Header.propTypes = {
  layout: shape({
    title: array.isRequired,
    menuLinks: arrayOf(shape({
      id: string.isRequired,
      link: string.isRequired,
      label: string.isRequired,
    })),
  }),
}

export default Header;
