import AROGCARD from '@/public/assets/images/layers/AR-OG.png';
import ENOGCARD from '@/public/assets/images/layers/EN-OG.png';
import appleTouch from '@/public/Logo/fav/apple-touch-icon.png';
import fav16 from '@/public/Logo/fav/favicon-16x16.png';
import fav32 from '@/public/Logo/fav/favicon-32x32.png';
import safari from '@/public/Logo/fav/safari-pinned-tab.svg';
import { siteConfig } from '@/src/config/site';

const getLocalizedMetadata = (locale: "ar" | "en") => {
  if (locale === "ar") {
    return {
      title: {
        default: siteConfig.name.ar,
        template: `ايجوارش- %s`,
      },
      description: siteConfig.description.ar,
      keywords:
        "لشركة, الأعمال التجارية, الاستشارات, التخطيط الاستراتيجي, تأسيس الشركات, الرخص التجارية, الهجرة والسفر, الضرائب, الاستشارات, الاستقدام",
      author: siteConfig.name.ar,
      openGraph: {
        title: siteConfig.name.ar,
        description: siteConfig.description.ar,
        image: AROGCARD.src,
        url: "https://www.iguarias.co/",
        type: "website",
      },
      twitter: {
        card: AROGCARD.src,
        title: siteConfig.name.ar,
        description: siteConfig.description.ar,
        image: AROGCARD.src,
      },
    };
  } else {
    return {
      title: {
        default: siteConfig.name.en,
        template: `IGUARIAS - %s`,
      },
      description: siteConfig.description.en,
      keywords:
        "Company, Business Services, Consultancy, Strategic Planning, Company Formation, Business Licenses, Immigration & Travel, Taxation, Consultation, Residency",
      author: siteConfig.name.en,
      openGraph: {
        title: siteConfig.name.en,
        description: siteConfig.description.en,
        image: ENOGCARD.src,
        url: "https://www.iguarias.co/",
        type: "website",
      },
      twitter: {
        card: ENOGCARD.src,
        title: siteConfig.name.en,
        description: siteConfig.description.en,
        image: ENOGCARD.src,
      },
    };
  }
};
export default function Meta({ locale }: { locale: any }) {
  const localizedMetadata = getLocalizedMetadata(locale);

  return (
    <head>
      <title>{localizedMetadata.title.default}</title>
      <meta charSet="UTF-8" />
      <meta name="description" content={localizedMetadata.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content={locale} />
      <meta name="keywords" content={localizedMetadata.keywords} />
      <meta name="author" content={localizedMetadata.author} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.iguarias.co/" />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:title" content={localizedMetadata.openGraph.title} />
      <meta
        property="og:description"
        content={localizedMetadata.openGraph.description}
      />
      <link rel="apple-touch-icon" sizes="180x180" href={appleTouch.src} />
      <link rel="icon" type="image/png" sizes="32x32" href={fav32.src} />
      <link rel="icon" type="image/png" sizes="16x16" href={fav16.src} />

      <link rel="mask-icon" href={safari.src} color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff"></meta>
      <meta property="og:image" content={localizedMetadata.openGraph.image} />
      <meta property="og:url" content={localizedMetadata.openGraph.url} />
      <meta property="og:type" content={localizedMetadata.openGraph.type} />
      <meta name="twitter:card" content={localizedMetadata.twitter.card} />
      <meta name="twitter:title" content={localizedMetadata.twitter.title} />
      <meta
        name="twitter:description"
        content={localizedMetadata.twitter.description}
      />
      <meta name="twitter:image" content={localizedMetadata.twitter.image} />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-BWW76VX6QX"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-BWW76VX6QX');
        `,
        }}
      />
    </head>
  );
}
