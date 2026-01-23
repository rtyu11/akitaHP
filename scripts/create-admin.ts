import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

async function main() {
  console.log("Starting admin user creation...");

  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;
  const dbUrl = process.env.POSTGRES_PRISMA_URL;

  console.log("Email:", email);
  console.log("DB URL:", dbUrl ? "Set" : "Not set");

  if (!email || !password) {
    throw new Error("ADMIN_EMAIL and ADMIN_PASSWORD must be set in .env");
  }

  if (!dbUrl) {
    throw new Error("POSTGRES_PRISMA_URL must be set in .env");
  }

  console.log("Creating pool with connection string...");
  console.log("Connection string length:", dbUrl.length);
  console.log("Connection string starts with:", dbUrl.substring(0, 20));

  const pool = new Pool({ connectionString: dbUrl });
  console.log("Pool created");

  const adapter = new PrismaPg(pool);
  console.log("Adapter created");

  const prisma = new PrismaClient({ adapter });

  console.log("Prisma client created");

  try {
    console.log("Checking if user exists...");
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      console.log("Admin user already exists:", email);
      return;
    }

    console.log("Creating new admin user...");
    // Create admin user
    const user = await prisma.user.create({
      data: {
        email,
        password, // In production, this should be hashed
        name: "管理者",
      },
    });

    console.log("Admin user created:", user.email);
  } catch (error) {
    console.error("Error:", error);
    throw error;
  } finally {
    console.log("Disconnecting...");
    await prisma.$disconnect();
    console.log("Done!");
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
