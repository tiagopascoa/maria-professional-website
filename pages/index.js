import Head from "next/head";
//Components
import IntroCover from "../components/IntroCover";
import About from "../components/About";
import Therapies from "../components/Therapies";
import Treatments from "../components/Treatments";
import ContactAndBooking from "../components/Contacts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Maria C. Moreira - Medicina Chinesa</title>
        <meta name="description" content="Maria C. Moreira - Tratamentos de Medicina Chinesa em Lisboa. Acupuntura, Ventosaterapia, Moxabustão, Fitoterapia e Dietética." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <IntroCover />
      <About />
      <Therapies />
      <Treatments />
      <ContactAndBooking />
      </main>
      
    </>
  );
}
