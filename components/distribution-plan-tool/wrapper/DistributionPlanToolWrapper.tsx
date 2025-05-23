import { Poppins } from "next/font/google";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import { AuthContext } from "../../auth/Auth";
import { useSeizeConnectContext } from "../../auth/SeizeConnectContext";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
export default function DistributionPlanToolWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setTitle, title } = useContext(AuthContext);
  const { address } = useSeizeConnectContext();
  const router = useRouter();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
      return;
    }
    router.push("/emma");
  }, [address]);

  useEffect(() => {
    setTitle({
      title: "EMMA | 6529.io",
    });
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="EMMA | 6529.io" />
        <meta property="og:url" content={`${process.env.BASE_ENDPOINT}/emma`} />
        <meta property="og:title" content="EMMA" />
        <meta property="og:description" content="6529.io" />
        <meta
          property="og:image"
          content={`${process.env.BASE_ENDPOINT}/6529io.png`}
        />
      </Head>
      <div className={`tw-bg-neutral-900 ${poppins.className}`}>
        <div
          id="allowlist-tool"
          className="tailwind-scope tw-overflow-y-auto tw-min-h-screen tw-relative">
          {children}
        </div>
      </div>
    </>
  );
}
