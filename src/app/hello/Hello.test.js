import React from 'react'
import { render } from '@testing-library/react'
import { describe, it } from '@jest/globals'
import Hello from 'app/hello/Hello'

describe('Hello world', () => {
  it('displays Hello world', () => {
    const { asFragment } = render(<Hello message={'Test Message'}>contenu</Hello>)

    expect(asFragment()).toMatchSnapshot()
  })
})
