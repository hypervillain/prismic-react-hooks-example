import React from 'react';
import { Link, RichText } from 'prismic-reactjs';

const ImageGallery = ({ slice, prismicCtx }) => (
  <section className="image-gallery content-section">
    {RichText.render(slice.primary.gallery_title, prismicCtx.linkResolver)}
    <div className="gallery">
      {
        slice.items.map((item, index) => {
          return (
            <div className="gallery-item" key={index}>
              <img src={item.image.url} alt={item.image.alt} />
              {RichText.render(item.image_description, prismicCtx.linkResolver)}
              {RichText.asText(item.link_label) !== "" ? (
                <p className="gallery-link">
                  <a href={Link.url(item.link, prismicCtx.linkResolver)}>
                    {RichText.asText(item.link_label)}
                  </a>
                </p>
              ) : '' }
            </div>
          );
        })
      }
    </div>
  </section>
)

export default ImageGallery;
