const withNextIntl = require("next-intl/plugin")();
const createMDX = require("@next/mdx");

/** @type {import('next').NextConfig} */

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

module.exports = withNextIntl(
  withMDX({
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  })
);
