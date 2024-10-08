import { FC } from 'react';
import Figcaption from '../figure/Figcaption';
import ImageGridLeftContent from './ImageGridLeftContent';
import ImageGridRightContent from './ImageGridRightContent';

const StockPhoto: FC = () => (
  <>
    <ImageGridLeftContent
      src="smoking_old_person.jpg"
      alt=""
      mobileSrc="small/smoking_old_person.jpg"
    >
      <Figcaption>Surprising Ways Smoking Affects Your Looks.</Figcaption>
    </ImageGridLeftContent>
    <ImageGridRightContent
      title="Stock photos"
      linkText="More about Stock photos"
      href="https://www.w3.org/WAI/tutorials/images/decorative/#example-4-image-used-for-ambiance-eye-candy"
    >
      The stock photo of an old man smoking gives no information and has no
      function. It is strictly eye candy.
    </ImageGridRightContent>
  </>
);

export default StockPhoto;
