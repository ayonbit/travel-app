import { PrismaClient } from "@prisma/client";

if (!global.prisma) {
  global.prisma = new PrismaClient();
}

const db = global.prisma;
export default db;
