import PostLayout from "../../components/postLayout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../../components/codeblock";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  let socialImageUrl = "https://thetombomb-public.s3.amazonaws.com/TomBombHeader.jpeg";
  if (postData.socialImage) {
    socialImageUrl = postData.socialImage;
  }

  return (
    <PostLayout>
      <Head>
        <title>{postData.title}</title>
        <meta name="og:title" content={postData.title} />
        <meta name="og:description" content={postData.description}></meta>
        <meta name="description" content={postData.description}></meta>
        <meta
          property="og:image"
          content={socialImageUrl}
        />
      </Head>

      <article className="bg-white w-screen rounded-xl p-4 sm:p-10 prose lg:prose-lg shadow-xl">
        <h1 className="text-xl">{postData.title}</h1>
        <div className="text-gray-400">
          <Date dateString={postData.date} />
        </div>

        <ReactMarkdown components={CodeBlock}>{postData.markdown}</ReactMarkdown>
      </article>
    </PostLayout>
  );
}
