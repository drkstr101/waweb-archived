import { findPageAtPath, StackbitApi } from '@watheia/api.stackbit';
// import Markdown from 'markdown-to-jsx';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';

const renderSection = (model, key) => renderElement(model, { key });

export type DynamicPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const DynamicPage = (props: DynamicPageProps) => {
  const { page, site } = props;
  return (
    <div className="page-container">
      <Head>
        <title>{page.title}</title>
      </Head>

      <div data-sb-object-id={page.__metadata.id}>
        {page.sections && page.sections.map(renderSection)}
        {page.content}
      </div>

      <div className="page-footer">
        <div className="footer-container" data-sb-field-path="content/data/config.json:footer">
          <div data-sb-field-path=".copyright" className="footer-content">
            {site.footer.copyright}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // grab the global api instance
  const api = await StackbitApi.get();
  const page = findPageAtPath(api, params.slug);
  const props = { ...api.props, page };
  return { props };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const api = await StackbitApi.get();
  const paths = api.pages.map((it) => it.slug).filter(Boolean);
  return { paths, fallback: false };
};

export default DynamicPage;
