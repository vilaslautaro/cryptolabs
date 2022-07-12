import { Box } from "@chakra-ui/react";
import Head from "next/head";
import NavBar from "../ui/NavBar";
import { DarkLayout } from "./DarkLayout";

export const MainLayout = ({
  children,
  title = "Agencia de marketing crypto",
  description = `CryptoLabs, Agencia de Marketing Crypto. 
  Brindamos servicios de Marketing, publicidad, consultoria y muchos más, para lograr que su empresa tenga reconocimiento
   y prestigio en el ecosistema crypto de latinoamerica.`,
}) => {
  return (
    <>
      <Head>
        <title>{title + " - CryptoLabs"}</title>
        <meta name="description" content={description} />
      </Head>
      <DarkLayout>
        <NavBar />
        <main>
          <Box pt="20px">{children}</Box>
        </main>
      </DarkLayout>
    </>
  );
};
