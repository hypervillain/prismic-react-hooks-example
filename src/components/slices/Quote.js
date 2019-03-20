import React from 'react';
import { RichText } from 'prismic-reactjs';

const Quote = ({ slice: { primary } }) => (
  <section className="content-section quote">
    <blockquote style={{ textAlign: 'left', maxWidth: '720px' }}>
      {RichText.asText(primary.quote)}
    </blockquote>
    {
      primary.name_of_the_author && (
        <h4 style={{ color: '#484D52'}}>
          <em>By {RichText.asText(primary.name_of_the_author)}</em>
        </h4>
      )
    }
  </section>
);

export default Quote;
