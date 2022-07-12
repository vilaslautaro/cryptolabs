import { Box, Center, Image, Text } from "@chakra-ui/react";
// import { MainLayout } from "../components/layouts";

export default function HomePage() {
  return (
    <Center
      display={"flex"}
      flexDirection="column"
      alignItems={"center"}
      marginTop={{base: "20vh", md: "5vh"}}
      paddingX={"10px"}
    >
      <Center fontSize={{ base: "25px", md: "50px" }} mb={10} textAlign="center">
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
  );
}

/* HomePage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
 */
