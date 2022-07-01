import ImageGallery from '../scenes/ImageGallery/ImageGallery';
import { LangContext } from '../translation/LangContext';
import client from '../constants/sanityClient';
import Head from 'next/head';
import { useContext } from 'react';

export const getServerSideProps = async () => {
  const data = await client.fetch(`*[_type == "card"]`);
  if (!data) {
    return { notFound: true };
  }
  return {
    props: { birdsData: data },
  };
};

const GalleryPage = ({ birdsData }) => {
  const value = useContext(LangContext);
  const lang = value.lang;

  return (
    <>
      <Head>
        <title>gallery</title>
      </Head>
      <ImageGallery birdsData={birdsData} lang={lang} />
    </>
  );
};

export default GalleryPage;
