/** @type { import ("drizzle-kit").Config } */

export default {
  schema: "./utils/schema.tsx",
//   out: "./drizzle/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: 'postgresql://ACG_owner:npg_NVam9SzKwx5i@ep-late-grass-a52ir0xb-pooler.us-east-2.aws.neon.tech/ACG?sslmode=require'
  },
};
