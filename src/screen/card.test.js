'use strict'

import { expect } from 'chai'
import Card from './Card'

it('expect Card.fetchItems to be a function', () => {
  expect(Card.fetchItems).to.be.a('function')
})