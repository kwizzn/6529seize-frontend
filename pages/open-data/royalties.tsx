import Head from "next/head";
import styles from "../../styles/Home.module.scss";
import dynamic from "next/dynamic";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../components/auth/Auth";

const CommunityDownloadsRoyalties = dynamic(
  () =>
    import("../../components/communityDownloads/CommunityDownloadsRoyalties"),
  {
    ssr: false,
  }
);

export default function RoyaltiesDownloads() {
  const { setTitle, title } = useContext(AuthContext);

  useEffect(() => {
    setTitle({
      title: "Royalties Downloads | 6529.io",
    });
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Royalties Downloads | 6529.io" />
        <meta
          property="og:url"
          content={`${process.env.BASE_ENDPOINT}/open-data/royalties`}
        />
        <meta property="og:title" content={`Royalties Downloads`} />
        <meta property="og:description" content="6529.io" />
        <meta
          property="og:image"
          content={`${process.env.BASE_ENDPOINT}/6529io.png`}
        />
      </Head>

      <main className={styles.main}>
        <CommunityDownloadsRoyalties />
      </main>
    </>
  );
}
