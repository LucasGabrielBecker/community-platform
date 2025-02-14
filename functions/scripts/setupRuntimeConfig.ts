import { writeFileSync } from 'fs'
import { resolve } from 'path'
import type { configVars } from '../src/config/config'

/** Variables populates in the same way firebase functions:config:set does */
const runtimeConfig: configVars = {
  analytics: {
    tracking_code: 'fake_tracking_code',
    view_id: 'fake_view_id',
  },
  integrations: {
    discord_webhook: 'fake_discord_webhook',
    slack_webhook: 'fake_slack_webhook',
  },
  service: null as any,
  deployment: {
    site_url: 'https://functions.test',
  },
  prerender: {
    api_key: 'fake_prerender_key',
  },
}
const runtimeConfigPath = resolve(__dirname, '../.runtimeconfig.json')
writeFileSync(runtimeConfigPath, JSON.stringify(runtimeConfig))
