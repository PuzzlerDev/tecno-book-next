module.exports = {
  reactStrictMode: true,
  images: {
    loader: "cloudinary",
    domains: ["localhost", "res.cloudinary.com"],
  },
  pageExtensions: ["js","ts","jsx"],
  eslint: {
    dirs: ["pages", "helpers", "lib", "components"],
  }
}
