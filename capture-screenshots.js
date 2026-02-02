const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

async function captureScreenshots() {
  // Ensure public/screenshots directory exists
  const screenshotDir = path.join(__dirname, "public/screenshots");
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
  }

  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Set viewport for high-quality capture
  await page.setViewportSize({ width: 1440, height: 900 });

  try {
    // 1. Home Page - Hero Section
    console.log("Capturing Hero...");
    await page.goto("http://localhost:8080", { waitUntil: "networkidle" });
    await page.screenshot({ path: "public/screenshots/hero-desktop.png" });

    // 2. Services Section (Scroll down)
    console.log("Capturing Services...");
    await page.locator("#services").scrollIntoViewIfNeeded();
    await page.waitForTimeout(500); // Wait for animations
    await page.screenshot({ path: "public/screenshots/services-desktop.png" });

    // 3. Platforms Section
    console.log("Capturing Platforms...");
    await page.locator("#platforms").scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await page.screenshot({ path: "public/screenshots/platforms-desktop.png" });

    // 4. Quote Form Page
    console.log("Capturing Quote Form...");
    await page.goto("http://localhost:8080/quote/", {
      waitUntil: "networkidle",
    });
    await page.screenshot({ path: "public/screenshots/quote-desktop.png" });

    // 5. Mobile View - Hero
    console.log("Capturing Mobile Hero...");
    await page.setViewportSize({ width: 390, height: 844 }); // iPhone 14
    await page.goto("http://localhost:8080", { waitUntil: "networkidle" });
    await page.screenshot({ path: "public/screenshots/hero-mobile.png" });

    console.log("✅ Screenshots captured successfully!");
  } catch (error) {
    console.error("Error capturing screenshots:", error);
  } finally {
    await browser.close();
  }
}

captureScreenshots();
