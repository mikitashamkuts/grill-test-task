import { resolutions, pages } from '../config'

describe('Component screenshot', () => {
  pages.forEach(page => {
    resolutions.map(({ device, width, height }) => {
      it(`${page} should match previous screenshot`, () => {
        cy.viewport(width, height)
        cy.visit(page)
        cy.get('[data-test=screen]').each(element => {
          resolutions.map(() => {
            cy.wrap(element).matchImageSnapshot(`${page}-${device}`)
          })
        })
      })
    })
  })
})
