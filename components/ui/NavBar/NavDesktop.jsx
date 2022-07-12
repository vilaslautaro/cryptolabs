import { CustomLink } from "../../CustomLink";
import { ListItem, List } from "@chakra-ui/react";

export const NavDesktop = ({ links }) => {
  return (
    <nav>
      <List display="flex" flexDirection="row">
        {links.map((link) => {
          return (
            <ListItem key={link.id} mr={18} fontSize={18}>
              <CustomLink text={link.text} href={link.href} />
            </ListItem>
          );
        })}
      </List>
    </nav>
  );
};
