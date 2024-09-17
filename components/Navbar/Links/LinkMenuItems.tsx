import Link from "next/link";

export const WhoWeAreItems = [
  {
    key: "about",
    label: (
      <Link href="/about" replace={false}>
        About Us
      </Link>
    ),
  },
  {
    key: "why-villages",
    label: (
      <Link href="/why-villages" replace={false}>
        Why Villages
      </Link>
    ),
  },
  {
    key: "our-impact",
    label: (
      <Link href="/our-impact" replace={false}>
        Our Impact
      </Link>
    ),
  },
  {
    key: "our-approach",
    label: (
      <Link href="/our-approach" replace={false}>
        Our Approach
      </Link>
    ),
  },
];
