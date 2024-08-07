import { FC } from 'react';
import Figcaption from '../figure/Figcaption';
import ImageGridLeftContent from './ImageGridLeftContent';
import ImageGridRightContent from './ImageGridRightContent';

interface InformationSupplementProps {}

const InformationSupplement: FC<InformationSupplementProps> = () => (
  <>
    <ImageGridLeftContent
      src="/images/annie_easley.jpg"
      alt="Annie Easley working in front of a computer."
    >
      <Figcaption>
        <h2>Annie Easley</h2>
        Annie Easley was an American computer and rocket scientist. She made
        significant contributions to the fields of computer science.
      </Figcaption>
    </ImageGridLeftContent>
    <ImageGridRightContent
      title="Photo of a known person"
      linkText="More about image as link"
      href="https://www.w3.org/WAI/tutorials/images/decorative/#example-2-decorative-image-as-part-of-a-text-link"
    >
      When describing photos of known people, places, etc., the image
      description should be concise. The alt text doesn't have to be purely
      objective; it can include nuances, details, and emotions relevant to the
      user experience.
    </ImageGridRightContent>
  </>
);

export default InformationSupplement;
