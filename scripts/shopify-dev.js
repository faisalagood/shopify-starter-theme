import "dotenv/config";
import { exec } from "child_process";

const store = process.env.SHOPIFY_STORE;

if (!store) {
  console.error(
    "\x1b[31m%s\x1b[0m",
    "Error: SHOPIFY_STORE environment variable is not set.",
    "\nPlease ensure it is defined in your .env file."
  );
  process.exit(1);
}

const command = `npx shopify theme dev --store "${store}"`;

console.log(`Executing command: ${command}`);

const shopifyProcess = exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`\x1b[31mShopify CLI Error:\x1b[0m\n${stderr}`);
  }
});

shopifyProcess.stdout.pipe(process.stdout);
shopifyProcess.stderr.pipe(process.stderr);

shopifyProcess.on("exit", (code) => {
  console.log(`Shopify CLI process exited with code ${code}`);
});

process.on("SIGINT", () => {
  console.log("\nGracefully shutting down...");
  if (shopifyProcess && !shopifyProcess.killed) {
    shopifyProcess.kill("SIGINT");
  }
  process.exit();
});

process.on("SIGTERM", () => {
  console.log("\nGracefully shutting down...");
  if (shopifyProcess && !shopifyProcess.killed) {
    shopifyProcess.kill("SIGTERM");
  }
  process.exit();
});
