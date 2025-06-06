import React from 'react'
import {pureChange} from '../SuperSort'

test.skip('sort ""', () => {
    const newSort = pureChange('', '1a', '0a')
    expect(newSort).toBe('1a')
})
test.skip('sort "1a"', () => {
    const newSort = pureChange('1a', '1a', '0a')
    expect(newSort).toBe('0a')
})
test.skip('sort "0a"', () => {
    const newSort = pureChange('0a', '1a', '0a')
    expect(newSort).toBe('')
})
test.skip('sort "1b"', () => {
    const newSort = pureChange('1b', '1a', '0a')
    expect(newSort).toBe('1a')
})
