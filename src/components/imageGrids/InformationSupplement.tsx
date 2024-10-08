import { FC } from 'react';
import Figcaption from '../figure/Figcaption';
import ImageGridLeftContent from './ImageGridLeftContent';
import ImageGridRightContent from './ImageGridRightContent';

const InformationSupplement: FC = () => (
  <>
    <ImageGridLeftContent
      src="annie_easley.jpg"
      mobileSrc="small/annie_easley.jpg"
      alt="African American computer and rocket scientist Annie Easley, seated at her desk, smiling."
    >
      <Figcaption>
        <h2>Annie Easley</h2>
        Annie Easley was an American computer and rocket scientist, and made
        significant contributions to the fields of computer science.
      </Figcaption>
    </ImageGridLeftContent>
    <ImageGridRightContent
      title="Photo of a known person"
      linkText="More about image of known persons"
      href="https://help.siteimprove.com/support/solutions/articles/80000863904-accessibility-image-alt-text-best-practices"
    >
      When describing photos of known people, places, etc., the image
      description should be concise. The alt text doesn't have to be purely
      objective; it can include nuances, details, and emotions relevant to the
      user experience.
    </ImageGridRightContent>
  </>
);

export default InformationSupplement;
