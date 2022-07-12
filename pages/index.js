import { Box, Center, Image, Text } from "@chakra-ui/react";
import Head from "next/head";
// import { MainLayout } from "../components/layouts";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>{"Agencia de marketing crypto - CryptoLabs"}</title>
        <meta name="description" content={`Somos una agencia de marketing crypto.
         Brindamos servicios de Marketing, publicidad, consultoria y muchos más, para lograr que su empresa tenga usuarios, reconocimiento
   y prestigio en el ecosistema crypto.`} />
      </Head>
      <Center
        display={"flex"}
        flexDirection="column"
        alignItems={"center"}
        marginTop={{ base: "20vh", md: "5vh" }}
        paddingX={"10px"}
      >
        <Center
          fontSize={{ base: "25px", md: "50px" }}
          mb={10}
          textAlign="center"
        >
          ¡Sitio web en construccion!
        </Center>
        <Box>
          <Text fontSize={{ base: "20px", md: "25px" }}>
            Muy pronto habra novedades!
          </Text>
          <Center fontSize={{ base: "20px", md: "25px" }}>By Cryptolabs</Center>
        </Box>
        <Image
          src={
            "https://res.cloudinary.com/dn7qsxzdf/image/upload/v1657579487/cryptolabs/Under_Constructions_Flatline_a10qpc.png"
          }
          alt={"Sitio web en construccion"}
          width={{ base: 300, md: 700 }}
          height={{ base: 300, md: 700 }}
        />
      </Center>
    </>
  );
}

/* HomePage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
 */
