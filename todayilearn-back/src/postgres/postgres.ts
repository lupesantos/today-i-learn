import pkg from '@prisma/client';

const { PrismaClient } = pkg;

const prisma = new PrismaClient();

export default prisma;

//------------- configuracao de um banco postgres -----------------------

// import pg from 'pg';
// import dotenv from 'dotenv';

// dotenv.config();

// const { Pool } = pg;

// const connection = new Pool({
// 	connectionString: process.env.DATABASE_URL,
// });

// export default connection;
