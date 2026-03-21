import { defineConfig } from '@playwright/test'

export default defineConfig({
    testDir: './e2e',
    timeout: 30000,
    use: {
        baseURL: 'http://localhost:3000',
        headless: true,
    },
    webServer: [
        {
            command: 'pnpm run server',
            port: 4001,
            reuseExistingServer: true,
        },
        {
            command: 'pnpm start',
            port: 3000,
            reuseExistingServer: true,
        },
    ],
    projects: [
        {
            name: 'chromium',
            use: { browserName: 'chromium' },
        },
    ],
})
