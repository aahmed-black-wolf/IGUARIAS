export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: {
    en: "IGUARIAS : Your Gateway to Entrepreneurship and Stability",
    ar: "ايجوارش : بوابتك إلى الرياده والاستقرار",
  },
  description: {
    ar: "The company was founded in Lisbon, Portugal, chosen for its ideal setting and promising prospects for establishment and investment. Our expertise lies in providing comprehensive services for establishing businesses, obtaining necessary licenses for products and services, and supporting exhibition participation to market your products in Europe.",
    en: "تأسست الشركة في لشبونة، البرتغال، التي تم اختيارها لموقعها المثالي وفرصها الواعدة للإنشاء والاستثمار. نقدم خدمات شاملة تشمل تأسيس الشركات، والحصول على التراخيص اللازمة للمنتجات والخدمات، والدعم في الاشتراك بالمعارض الأوروبية لتسويق منتجاتكم.",
  },

  navItems: [
    {
      label: "home",
      href: "/",
      isDrop: false,
      id: "home",
    },
    {
      label: "our_services",
      href: "/docs",
      isDrop: true,
      id: "our_services",
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
      label: "about_us",
      href: "/pricing",
      isDrop: false,
      id: "about_us",
    },
    {
      label: "contact_us",
      href: "/blog",
      isDrop: false,
      id: "contact_us",
    },
  ],
  links: [
    {
      label: "linked_in",
      url: "https://www.linkedin.com/company/iguarias",
    },
    // {
    //   label: "facebook",
    //   url: "",
    // },
  ],
};
