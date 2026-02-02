const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

async function captureDarkScreenshots() {
  const screenshotDir = path.join(__dirname, "public/screenshots");
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
  }

  const browser = await chromium.launch();
  const context = await browser.newContext({
    colorScheme: "dark",
  });
  const page = await context.newPage();

  await page.setViewportSize({ width: 1440, height: 900 });

  try {
    console.log("Capturing Dark Theme Hero...");
    await page.goto("http://localhost:8080", { waitUntil: "networkidle" });
    await page.screenshot({ path: "public/screenshots/hero-dark.png" });

    console.log("Capturing Dark Theme Services...");
    await page.locator("#services").scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await page.screenshot({ path: "public/screenshots/services-dark.png" });

    console.log("Capturing Dark Theme Quote Form...");
    await page.goto("http://localhost:8080/quote/", {
      waitUntil: "networkidle",
    });
    await page.screenshot({ path: "public/screenshots/quote-dark.png" });

    console.log("✅ Dark theme screenshots captured successfully!");
  } catch (error) {
    console.error("Error capturing dark screenshots:", error);
  } finally {
    await browser.close();
  }
}

captureDarkScreenshots();
