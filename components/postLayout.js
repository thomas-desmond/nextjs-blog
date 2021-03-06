import Head from "next/head";
import HeaderLayout from "./headerLayout";
import FooterLayout from "./footerLayout";

export const siteTitle = "Thomas Desmond - Writer, Speaker, Content Creator";

export default function PostLayout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/bombFavicon.ico" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeaderLayout />

      <div className="w-screen bg-gradient-to-b from-indigo-500 to-blue-600 flex align-center justify-center">
        <main className="flex justify-center align-center md:m-12 ">
          {children}
        </main>
      </div>
      <FooterLayout />
    </div>
  );
}
