module.exports = {
  reactStrictMode: true,
  images: {
    loader: "cloudinary",
    domains: ["res.cloudinary.com", "localhost"],
  },
  pageExtensions: ["js","ts","jsx"],
  eslint: {
    dirs: ["pages", "helpers", "lib", "components"],
  }
}
