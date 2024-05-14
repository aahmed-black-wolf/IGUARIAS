export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "IGUARIAS - Portugal Residency and Immigration",
  description:
    "The company was founded in Lisbon, Portugal, chosen for its ideal setting and promising prospects for establishment and investment. Our expertise lies in immigration and residency services for both individuals and corporations, along with comprehensive consultancy and investment activities.",
  navItems: [
    {
      label: "home",
      href: "/",
      isDrop: false,
    },

    {
      label: "residency_immigration",
      href: "/pricing",
      isDrop: false,
    },
    {
      label: "our_services",
      href: "/docs",
      isDrop: true,
      children: [
        {
          title: "Taxation Services: ",
          subChild: [
            {
              label: "Tax Identification Number",
              description: "Obtain or modify tax identification details.(TIN)",
            },
            {
              label: "Removal of Guarantor and Change of Tax Address ",
              description: "Update guarantor details and tax address changes.",
            },
          ],
        },
        {
          title: "Social Services: ",
          subChild: [
            {
              label: "Social Security Number",
              description:
                "Obtain or modify your social security identification.",
            },
            {
              label: "Health Insurance Number",
              description: "Acquire or update health insurance identification.",
            },
          ],
        },
        {
          title: "Business Services",
          subChild: [
            {
              label: "Residence Certificate",
              description: "Obtain a certificate of residence.",
            },
            {
              label: "Expression of Interest ",
              description:
                "Submit requests or express interest in specific matters.",
            },
            {
              label: "Company Establishment ",
              description: "Establish a new company.",
            },
            {
              label: "Opening a Branch for Your Company in Portugal ",
              description:
                "Expand your company's presence by opening a branch in Portugal.",
            },
            {
              label: "Legal Consultations",
              description: "Seek legal advice and consultations.",
            },
          ],
        },
      ],
    },
    {
      label: "contact_us",
      href: "/blog",
      isDrop: false,
    },
  ],
  links: [
    {
      label: "linked_in",
      link: "https://github.com/nextui-org/nextui",
    },
    {
      label: "facebook",
      link: "https://twitter.com/getnextui",
    },
  ],
};
