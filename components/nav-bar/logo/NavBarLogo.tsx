import Image from "next/image";
import Link from "next/link";
import React from "react";

type NavBarLogoProps = {
  variant: "horse" | "cart";
};

const LOGO_SIZE = 20;

export default function NavBarLogo(props: NavBarLogoProps) {
  const { variant } = props;
  const camelCaseVariant = variant.slice(0, 1).toUpperCase() + variant.slice(1);
  const imageAlt = `${camelCaseVariant} logo`;
  const imageUrl = `/navBar/${variant}.svg`;
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
