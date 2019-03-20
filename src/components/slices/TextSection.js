import React from 'react';
import { RichText } from 'prismic-reactjs';

const TextSection = ({ slice, prismicCtx }) => {
  const sectionClass = slice.slice_label ? 'text-section-' + slice.slice_label : 'text-section-1col';
  return (
    <section className={`content-section ${sectionClass}`}>
      <div>
        {RichText.render(slice.primary.rich_text, prismicCtx.linkResolver)}
      </div>
    </section>
  );
}

export default TextSection;
