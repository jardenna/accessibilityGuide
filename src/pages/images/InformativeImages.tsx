import { FC } from 'react';
import PageTitle from '../../components/PageTitle';
import ImagesOfText from '../../components/imageGrids/ImagesOfText';
import InformationSupplement from '../../components/imageGrids/InformationSupplement';
import InformationSupplementStock from '../../components/imageGrids/InformationSupplementStock';
import Tabs, { TabItem } from '../../components/tabs/Tabs';
import PageBanner from '../../layout/pageBanner/PageBanner';
import { Title } from '../../types/lang';

interface FuntionalImagesProps {}
const tabsConfig: TabItem[] = [
  {
    id: 1,
    label: 'Image',
    content: <InformationSupplement />,
  },
  {
    id: 2,
    label: 'Image 1',
    content: <InformationSupplementStock />,
  },
  {
    id: 3,
    label: 'Image 2',
    content: <ImagesOfText />,
  },
];

const FuntionalImages: FC<FuntionalImagesProps> = () => (
  <article>
    <PageTitle title={Title.InformativeImages} />
    <PageBanner title={Title.InformativeImages}>
      Informative images convey specific information that is important to
      understanding the content of a document or webpage.
    </PageBanner>

    <Tabs tabsConfig={tabsConfig} className="card" />
  </article>
);

export default FuntionalImages;
