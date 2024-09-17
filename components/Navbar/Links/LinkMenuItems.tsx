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

export const WhatWeDoItems = [
  {
    key: "clean-water",
    label: (
      <Link href="/what-we-do/clean-water" replace={false}>
        Clean Water
      </Link>
    ),
  },
  {
    key: "waste-water-treatment",
    label: (
      <Link href="/what-we-do/waste-water-treatment" replace={false}>
        Waste Water Treatment
      </Link>
    ),
  },
  {
    key: "solid-waste-management",
    label: (
      <Link href="/what-we-do/solid-waste-management" replace={false}>
        Bio-Degradable Solid Waste Management
      </Link>
    ),
  },
  {
    key: "sewage-sludge-management",
    label: (
      <Link href="/what-we-do/sewage-sludge-management" replace={false}>
        Sewage Sludge Management
      </Link>
    ),
  },
  {
    key: "solar-power",
    label: (
      <Link href="/what-we-do/solar-power" replace={false}>
        Solar Power Technologies
      </Link>
    ),
  },
  {
    key: "organic-farming",
    label: (
      <Link href="/what-we-do/organic-farming" replace={false}>
        Technologies For Organic Farming
      </Link>
    ),
  },
  {
    key: "food-processing",
    label: (
      <Link href="/what-we-do/food-processing" replace={false}>
        Food Processing Technologies
      </Link>
    ),
  },
];

export const GetInvolvedItems = [
  {
    key: "volunteering-and-interships",
    label: (
      <Link href="/volunteering-and-interships" replace={false}>
        Volunteering and Internships
      </Link>
    ),
  },
  {
    key: "corporate-partners",
    label: (
      <Link href="/corporate-partners" replace={false}>
        Corporate Partners
      </Link>
    ),
  },
  {
    key: "careers",
    label: (
      <Link href="/careers" replace={false}>
        Careers
      </Link>
    ),
  },
];
