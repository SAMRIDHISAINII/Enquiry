import Head from "next/head";

import Header from "../components/header";
import Footer from "../components/footer";
import ContactForm from "../components/contact-form";

export default function Home() {
  return (
    <>
      <Head>
        <title>Enquiry Form in Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <p dangerouslySetInnerHTML={{__html:process.env.NEXT_PUBLIC_MESSAGE}} />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
