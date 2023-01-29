import { describe, it, expect, vi } from 'vitest'
import { displayMessage } from '.'

describe('sayMessage', () => {
  it('SHOULD call console.log with the correct values', () => {
    const spy = vi.spyOn(console, 'log')
    displayMessage('hello world')
    expect(spy).toHaveBeenCalledWith('hello world')
  })
})
