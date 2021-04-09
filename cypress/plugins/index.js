/// <reference types="cypress" />
const dotenvPlugin = require('cypress-dotenv')
/**
 * @type {Cypress.PluginConfig}
 */

const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin')
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  addMatchImageSnapshotPlugin(on, config)
  const configWithDotenv = require('dotenv').config()
  if (configWithDotenv.error) {
    throw configWithDotenv.error
  }
  const env = { ...config.env, ...configWithDotenv.parsed }
  const result = { ...config, env }
  return result
}
