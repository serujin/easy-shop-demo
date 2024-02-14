import Image from "next/image";
import Link from "next/link";
import React from "react";

type NavBarLogoProps = {
  logoId: string;
};

const LOGO_SIZE = 20;

export default function NavBarLogo(props: NavBarLogoProps) {
  const { logoId } = props;
  const camelCaseLogoId = logoId.slice(0, 1).toUpperCase() + logoId.slice(1);
  const imageAlt = `${camelCaseLogoId} logo`;
  const imageUrl = `/navBar/${logoId}.svg`;
  return (
    <Link href={"/"}>
      <Image
        alt={imageAlt}
        src={imageUrl}
        width={LOGO_SIZE}
        height={LOGO_SIZE}
      />
    </Link>
  );
}
