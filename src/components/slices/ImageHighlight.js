import React from 'react';
import { Link, RichText } from 'prismic-reactjs';

const ImageHighlight = ({ slice, prismicCtx }) => (
  <section className="highlight content-section">
    <div className="highlight-left">
      {RichText.render(slice.primary.title, prismicCtx.linkResolver)}
      {RichText.render(slice.primary.headline, prismicCtx.linkResolver)}
      {RichText.asText(slice.primary.link_label) !== '' ? (
        <p>
          <a href={Link.url(slice.primary.link, prismicCtx.linkResolver)}>
            {RichText.asText(slice.primary.link_label)}
          </a>
        </p>
      ) : '' }
    </div>
    <div className="highlight-right">
      <img src={slice.primary.featured_image.url} alt={slice.primary.featured_image.alt} />
    </div>
  </section>
);

export default ImageHighlight;
