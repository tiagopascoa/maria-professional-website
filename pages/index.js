import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
//Components
import IntroCover from "../components/IntroCover";
import About from "../components/About";
import Therapies from "../components/Therapies";
import Treatments from "../components/Treatments";
import ContactAndBooking from "../components/Contacts";

export default function Home() {
  let { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Maria C. Moreira - Medicina Chinesa</title>
        <meta
          name="description"
          content="Maria C. Moreira - Tratamentos de Medicina Chinesa em Lisboa. Acupuntura, Ventosaterapia, Moxabustão, Fitoterapia e Dietética."
        />      
      </Head>
      <main>
        <IntroCover t={t} />
        <About t={t} />
        <Therapies t={t} />
        <Treatments t={t} />
        <ContactAndBooking t={t} />
      </main>
    </>
  );
}
