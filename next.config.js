const envsConfig = require("./envs");

const envs = envsConfig[process.env.MODE];
if (envs) {
  console.log(`process.env.MODE: ${process.env.MODE}`);
  Object.keys(envs).forEach((key) => {
    process.env[key] = envs[key];
  });
}
/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
