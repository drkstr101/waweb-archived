import { findPageAtPath, StackbitApi } from '@watheia/api.stackbit';
import Layout from '@watheia/waweb.layout';
import { useView, View } from '@watheia/waweb.ui';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

export function IndexPage(props: PageProps) {
  // console.log('IndexPage(props)', props);

  const HybridHomepage = useView(View.HybridHomepage, {
    communityScopes: null,
    mainCta: null,
    githubStars: 1,
    onBookMeeting: () => alert('TODO not implemented.')
  });

  return <Layout>{HybridHomepage}</Layout>;
}

export const getStaticProps: GetStaticProps = async () => {
  const api = await StackbitApi.get();
  const page = findPageAtPath(api, '/');
  const props = { ...api.props, page };
  return { props };
};

export default IndexPage;
