import knexfile from "@@/knexfile.js"
import dotenv from "dotenv"
import { resolve } from "node:path"

dotenv.config({ path: resolve(".env.local") })

const config = {
  port: 3000,
  db: knexfile,
  security: {
    jwt: {
      secret: process.env.SECURITY_JWT_SECRET,
      expiresIn: "2 days",
    },
    password: {
      saltlen: 512,
      keylen: 512,
      iterations: 100000,
      digest: "sha512",
      pepper: process.env.SECURITY_PASSWORD_PEPPER,
    },
  },
}

export default config
