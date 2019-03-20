import React, { Fragment } from 'react';

import FullWidthImage from './FullWidthImage';
import ImageGallery from './ImageGallery';

import { client, linkResolver } from '../../prismic-configuration';

import {
  ImageHighlight,
  TextSection,
  Quote,
} from './';

const SliceZone = ({ sliceZone, prismicCtx }) => (
  <Fragment>
    {
      sliceZone.map((slice, index) => {
        switch (slice.slice_type) {
          case ('text_section'):
            return <TextSection slice={slice} key={'slice-' + index} prismicCtx={{ client, linkResolver }}/>
          case ('quote'):
            return <Quote slice={slice} key={'slice-' + index} />
          case ('full_width_image'):
            return <FullWidthImage slice={slice} key={'slice-' + index} />
          case ('image_gallery'):
            return <ImageGallery slice={slice} key={'slice-' + index} prismicCtx={{ client, linkResolver }}/>
          case ('image_highlight'):
            return <ImageHighlight slice={slice} key={'slice-' + index} prismicCtx={{ client, linkResolver }}/>
          default:
            return null;
        }
      })
    }

  </Fragment>
);

export default SliceZone;
