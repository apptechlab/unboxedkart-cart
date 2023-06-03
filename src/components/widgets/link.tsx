import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { ReactNode } from "react";

interface LinkProps {
  href: any;
  className ?: string;
  children: ReactNode;
}

const Link = (props: LinkProps) => {
  const { href, children, ...restProps } = props;
  return (
    <NextLink href={href}>
      <a {...restProps}>{children}</a>
    </NextLink>
  );
};

export default Link;

// : React.FC<NextLinkProps & { className?: string }>
