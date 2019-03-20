import React from 'react';

import { Link, RichText } from 'prismic-reactjs';

import { linkResolver } from '../prismic-configuration';

const Banner = ({
  button_label,
  button_link,
  image,
  tagline,
  title,
}) => (
  <section
    className="homepage-banner"
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${image.url})`,
    }}
  >
    <div className="banner-content container">
      <h2 className="banner-title">{RichText.asText(title)}</h2>
      <p className="banner-description">{RichText.asText(tagline)}</p>
      {RichText.asText(button_label) !== '' ? (
        // Displays the button link only if it's been defined
        <a className="banner-button" href={Link.url(button_link, linkResolver)} rel="noopener noreferrer" target="_blank">
          {RichText.asText(button_label)}
        </a>
      ) : ''}
    </div>
  </section>
);

export default Banner;
