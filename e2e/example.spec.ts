import { test, expect } from '@playwright/test'

test('home page loads instructions', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('heading', { name: /Focus Frontend Interview Exercise/i })).toBeVisible()
})

test('states search page loads', async ({ page }) => {
    await page.goto('/states')
    await expect(page.getByRole('heading', { name: /Focus Frontend Interview Exercise/i })).toBeVisible()
})
