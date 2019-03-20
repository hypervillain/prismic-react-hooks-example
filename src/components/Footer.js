import React from 'react';
import { RichText } from 'prismic-reactjs';

const Footer = ({ layout }) => (
  <footer>
    {
      layout && layout.footer_text && <span>{RichText.render(layout.footer_text)}</span>
    }
    <p className="no-padding">
      <a href="https://prismic.io" target="_blank" rel="noopener noreferrer">
        <img className="footer-logo" src="/images/logo-prismic.svg" alt="Gray Prismic logo"/>
      </a>
    </p>
  </footer>
);

export default Footer;
