import { Box, Heading, /* , useBreakpointValue  */ 
Image} from "@chakra-ui/react";
import React /*  useEffect, useState  */ from "react";
import { useWidth } from "../../../hooks/useWidth";
import { NavDesktop } from "./NavDesktop";
import { NavMobile } from "./NavMobile";

const links = [
  { id: 1, text: "Home", href: "/" },

];

const NavBar = () => {
  const { width } = useWidth();
  //const [desktop, setDesktop]: any = useState(false);
  // const breakpoint = useBreakpointValue({ base: false, lg: true });

  // useEffect(() => {
  //   setDesktop(breakpoint);
  //   console.log(breakpoint);
  // }, [breakpoint]);

  return (
    <header>
      <Box bg="#000" w="100%" h="50px" m="0 auto">
        <Box
          pos="fixed"
          bg="#000"
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          p="5px 20px"
          width="100%"
          zIndex="10"
          m="0 auto"
        >
          <Image src={"https://res.cloudinary.com/dn7qsxzdf/image/upload/v1657578376/cryptolabs/logo/cryptolabs-TEXTO-2_wiwzje.png"} alt="logo" width={300} height={125}/>
          {width < 1024 ? (
            <NavMobile links={links} />
          ) : (
            <NavDesktop links={links} />
          )}
        </Box>
      </Box>
    </header>
  );
};

export default React.memo(NavBar);
