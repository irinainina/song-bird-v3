import { createClient } from 'next-sanity';

const client = createClient({
  projectId: 'j8ax0x9h',
  dataset: 'production',
  apiVersion: '2022-07-01',
  useCdn: false,
});

export default client;