import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      lines: 100,
      functions: 100
    }
  }
})
