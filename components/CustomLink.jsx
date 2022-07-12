import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

const active = {
  color: "#00c8ff",
  borderBottom: "1px solid #00c8ff",
  transition: "0.3s ease all",
};

export const CustomLink = ({ text, href }) => {
  const { asPath } = useRouter();

  return (
    <NextLink href={href} passHref>
      <Link style={asPath === href ? active : undefined}>{text}</Link>
    </NextLink>
  );
};
