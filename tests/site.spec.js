import { test, expect } from '@playwright/test';

test('English and Urdu remain usable across phone, tablet, and desktop widths', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  for (const width of [320, 375, 390, 720, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    for (const language of ['en', 'ur']) {
      await expect(page.locator('html')).toHaveAttribute('lang', language);
      await expect(page.locator('html')).toHaveAttribute('dir', language === 'en' ? 'ltr' : 'rtl');
      await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
      const heroImage = page.locator('.hero-art img');
      await expect.poll(() => heroImage.evaluate(image => image.complete && image.naturalWidth > 0)).toBe(true);
      const donate = page.locator('.actions .button');
      await expect(donate).toBeVisible();
      if (width <= 720) {
        const brand = await page.locator('.site-header .brand').boundingBox();
        const actions = await page.locator('.site-header .actions').boundingBox();
        expect(Math.abs((brand.y + brand.height / 2) - (actions.y + actions.height / 2))).toBeLessThan(5);
      }
      await expect(heroImage).toHaveAttribute('src', '/kakakhel-logo.svg');
      if ((width === 1440 && language === 'en') || (width === 390 && language === 'ur')) {
        await page.evaluate(() => document.fonts.ready);
        await page.screenshot({ path: `/tmp/kakakhel-refined-${width}-${language}.png`, fullPage: true });
      }
      if (language === 'en') await page.getByRole('button', { name: 'Switch to Urdu' }).click();
    }
    await page.getByRole('button', { name: 'Switch to English' }).click();
  }
  expect(errors).toEqual([]);
});

test('mobile navigation opens separate pages, highlights the current page, and supports Escape', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');
  const toggle = page.getByRole('button', { name: 'Open menu' });
  await expect(page.getByRole('navigation')).toBeHidden();
  await toggle.click();
  await expect(page.getByRole('button', { name: 'Close menu' })).toHaveAttribute('aria-expanded', 'true');
  await page.getByRole('navigation').getByRole('link', { name: 'Programs', exact: true }).click();
  await expect(page).toHaveURL(/\/programs\/$/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Our welfare programs');
  await expect(page.locator('nav a[aria-current=page]')).toHaveAttribute('href', '/programs/');
  await expect(page.getByRole('navigation')).toBeHidden();
  await page.evaluate(() => window.scrollTo(0, 0));
  await toggle.click();
  await page.keyboard.press('Escape');
  await expect(toggle).toBeFocused();
  await expect(page.getByRole('navigation')).toBeHidden();
});

test('Urdu preference survives reload and navigation also translates', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.getByRole('button', { name: 'Switch to Urdu' }).click();
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('lang', 'ur');
  await page.getByRole('button', { name: 'مینو کھولیں' }).click();
  await expect(page.getByRole('navigation').getByRole('link', { name: 'ہمارے بارے میں', exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Switch to English' }).click();
  await expect(page.getByRole('navigation').getByRole('link', { name: 'About us', exact: true })).toBeVisible();
});

test('donation presets, custom amounts, validation and honest payment state work', async ({ page }) => {
  await page.goto('/donate/');
  const form = page.locator('form.donation-panel');
  await form.getByRole('button', { name: '5,000', exact: true }).click();
  const amount = form.getByRole('spinbutton');
  await expect(amount).toHaveValue('5000');
  await expect(form.getByRole('button', { name: '5,000', exact: true })).toHaveAttribute('aria-pressed', 'true');
  await amount.fill('1750');
  await expect(form.locator('[aria-pressed="true"]')).toHaveCount(0);
  await form.getByRole('button', { name: 'View donation details' }).click();
  await expect(form.getByRole('status')).toContainText('have not been provided yet');
  await amount.fill('0');
  await form.getByRole('button', { name: 'View donation details' }).click();
  expect(await amount.evaluate(input => input.validity.valid)).toBe(false);
  await expect(form.getByRole('status')).toHaveCount(0);
  await page.getByRole('button', { name: 'Switch to Urdu' }).click();
  await amount.fill('2000');
  await form.getByRole('button', { name: 'عطیے کی تفصیلات دیکھیں' }).click();
  await expect(form.getByRole('status')).toContainText('فراہم نہیں کی گئیں');
});


test('homepage stays short and routes visitors to dedicated pages', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('main section')).toHaveCount(2);
  await expect(page.getByRole('heading', { name: 'Helping people, with respect.' })).toBeVisible();
  await expect(page.locator('main .help-strip > a')).toHaveCount(3);
  await expect(page.locator('main form')).toHaveCount(0);
  await expect(page.locator('main #activities, main #work, main #trust, main #contact')).toHaveCount(0);
  await page.getByRole('link', { name: 'Our activities' }).click();
  await expect(page).toHaveURL(/\/activities\/$/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Activities & updates');
  await page.reload();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Activities & updates');
});

test('all separate pages support direct URLs, English/Urdu, and responsive layouts', async ({ page }) => {
  const routes = ['/about/', '/programs/', '/activities/', '/donate/', '/transparency/', '/contact/'];
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  for (const width of [390, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of routes) {
      const response = await page.goto(route);
      expect(response.status()).toBe(200);
      await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
      const englishTitle = await page.getByRole('heading', { level: 1 }).textContent();
      for (const language of ['en', 'ur']) {
        await expect(page.locator('html')).toHaveAttribute('lang', language);
        await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
        await expect(page.locator('header')).toBeVisible();
        await expect(page.locator('footer')).toBeAttached();
        if (language === 'en') await page.getByRole('button', { name: 'Switch to Urdu' }).click();
      }
      await expect(page.getByRole('heading', { level: 1 })).not.toHaveText(englishTitle);
      if (width === 390 && route === '/activities/') await page.screenshot({path: '/tmp/kakakhel-pages-activities-mobile.png', fullPage: true});
      await page.getByRole('button', { name: 'Switch to English' }).click();
    }
  }
  expect(errors).toEqual([]);
});

test('client navigation preserves Urdu preference and makes every menu destination reachable', async ({ page }) => {
  await page.setViewportSize({width: 1440, height: 900});
  await page.goto('/');
  await page.getByRole('button', {name: 'Switch to Urdu'}).click();
  for (const route of ['/about/', '/programs/', '/activities/', '/transparency/', '/contact/', '/']) {
    await page.locator(`nav a[href="${route}"]`).click();
    await expect(page).toHaveURL(new RegExp(route.replaceAll('/', '\\/') + '$'));
    await expect(page.locator('html')).toHaveAttribute('lang', 'ur');
    await expect(page.locator('nav a[aria-current=page]')).toHaveAttribute('href', route);
    await expect(page.getByRole('heading', {level: 1})).toBeVisible();
  }
  await page.locator('.actions a[href="/donate/"]').click();
  await expect(page).toHaveURL(/\/donate\/$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'ur');
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('lang', 'ur');
});


test('donation questions expand with keyboard and translate into Urdu', async ({ page }) => {
  await page.goto('/donate/');
  const question = page.locator('summary').filter({hasText: 'Can I donate through this website now?'});
  await question.focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('details[open]')).toContainText('Not yet.');
  await page.getByRole('button', {name: 'Switch to Urdu'}).click();
  await expect(page.locator('details[open]')).toContainText('ابھی نہیں۔');
  await page.locator('details[open] summary').click();
  await expect(page.locator('details[open]')).toHaveCount(0);
});
