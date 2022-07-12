import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, IconButton, List, ListItem } from "@chakra-ui/react";
import { useState } from "react";
import { CustomLink } from "../../CustomLink";

export const NavMobile = ({ links }) => {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav>
      <Box>
        <IconButton
          _focus={{ bg: "gray.100" }}
          _hover={{ bg: "gray.400" }}
          aria-label="Open Menu"
          fontSize={"25px"}
          icon={showLinks ? <CloseIcon /> : <HamburgerIcon />}
          onClick={handleShowLinks}
          transition="all 0.3s"
          variant="outline"
        />
        {showLinks && (
          <List
            bg="#565656"
            w="100%"
            h="100vh"
            pos="absolute"
            top="50"
            left="0"
            p="20px 40px 0 0"
            display="flex"
            alignItems="flex-end"
            flexDirection="column"
          >
            {links.map((link) => {
              return (
                <ListItem
                  key={link.id}
                  mb="5px"
                  fontSize="25px"
                  onClick={handleShowLinks}
                >
                  <CustomLink text={link.text} href={link.href} />
                </ListItem>
              );
            })}
          </List>
        )}
      </Box>
    </nav>
  );
};
