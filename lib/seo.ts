import type { Metadata } from "next";

const siteUrl = "https://www.goldlighttechnologies.com";
const siteName = "GoldLighT Technologies Pvt. Ltd.";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | AI to Silicon Engineering`,
    template: `%s | ${siteName}`,
  },
  description:
    "GoldLighT Technologies specializes in Artificial Intelligence, FPGA Design, ASIC Design, Embedded Systems, Medical Imaging, Computer Vision, PCB Design, R&D, and Industry Training.",
  keywords: [
    "AI engineering",
    "FPGA design",
    "ASIC design",
    "embedded systems",
    "medical imaging",
    "computer vision",
    "PCB design",
    "semiconductor",
    "VLSI",
    "GoldLighT Technologies",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: `${siteName} | Accelerating Intelligence: AI to Silicon`,
    description:
      "Engineering excellence in AI algorithms, FPGA prototypes, ASIC solutions, embedded systems, and medical imaging applications.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "GoldLighT Technologies - AI to Silicon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | AI to Silicon Engineering`,
    description:
      "Engineering excellence in AI, FPGA, ASIC, embedded systems, and medical imaging.",
    images: ["/og-image.svg"],
  },
};

export function createPageMetadata(
  title: string,
  description: string,
  path = ""
): Metadata {
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url: `${siteUrl}${path}`,
    },
    twitter: {
      title: `${title} | ${siteName}`,
      description,
    },
    alternates: {
      canonical: `${siteUrl}${path}`,
    },
  };
}

export { siteUrl, siteName };
