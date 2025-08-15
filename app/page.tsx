import HomeIndexComponent from "@/components/home/HomeIndexComponent";
import Head from "next/head";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

export const metadata = {
  title: "Home - SITS Information Technology School",
  description: "ស្វែងយល់អំពី SITS Information Technology School",
  keywords: [
    "SITS School",
    "សាលាកុំព្យូទ័រសៀមរាប",
    "សាលារៀនអង់គ្លេស សៀមរាប",
    "Computer Course in Siem Reap",
    "English School in Siem Reap",
  ],
  openGraph: {
    title: "Home - SITS Information Technology School",
    description: "ស្វែងយល់អំពី SITS Information Technology School",
    url: `${baseUrl}/`,
    siteName: "SITS Information Technology School",
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <meta name="keywords" content="Siem Reap, History, Cambodia, Travel" />
      </Head>
      <HomeIndexComponent />

    </>
  );
}
