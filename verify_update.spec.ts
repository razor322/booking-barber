import { test, expect } from '@playwright/test';

test('verify updated home page', async ({ page }) => {
  // Go to home page
  await page.goto('http://localhost:5173/');

  // Wait for loading
  await page.waitForTimeout(2000);

  // Take screenshot of Hero
  await page.screenshot({ path: 'updated_home_hero.png' });

  // Scroll to Services (Bento Grid)
  const servicesHeading = page.locator('text=Our Services');
  await servicesHeading.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'updated_home_services.png' });

  // Scroll to Testimonials (Infinite Moving Cards)
  const testimonialsHeading = page.locator('text=Client Stories');
  await testimonialsHeading.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'updated_home_testimonials.png' });
});
