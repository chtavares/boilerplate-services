import * as dotenv from 'dotenv';

export const ENVIRONMENT =
  process.env.APP_ENV || process.env.NODE_ENV || 'development';
console.log(dotenv.config({ path: `.${ENVIRONMENT}.env` }));
dotenv.config({ path: `.${ENVIRONMENT}.env` });
