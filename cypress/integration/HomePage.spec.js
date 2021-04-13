/*
Why e2e tests of mine contain different parts of
modules and grouped by Pages and Routes:
In my opinion the simplest way to make e2e testing
of the entire project is just test all features on
 the each certain page so cause I grouped them by this way.
 Put test-case in the page where it can be reached by user.
*/
/// <reference types="cypress" />

import { data, resolutions } from '../config'
import { pageRoutes } from '../../src/routes'

describe('HomePage:', () => {
  describe('Grill calculator:', () => {
    resolutions.forEach(({ device, width, height }) => {
      it(`should calculate and display out of grill items, device: ${device}`, () => {
        cy.viewport(width, height)
        cy.visit(
          `http://localhost:${Cypress.env('PORT')}${pageRoutes.HOME_PAGE}`
        )
        cy.url().should('include', pageRoutes.HOME_PAGE)
        cy.get('[data-test=grillInput]').type(data)
        cy.get('[data-test=tableCell]').should('be.visible')
        cy.get('[data-test=grillDashboardItem]').should('be.visible')
      })
    })
  })
})
