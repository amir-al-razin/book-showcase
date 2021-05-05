import React from 'react'
import { ThemeProvider, theme, CSSReset, Box } from '@chakra-ui/core'
import {addDecorator} from '@storybook/react'

addDecorator((storyFn) => (
  <ThemeProvider>
    <CSSReset />
    {storyFn()}
  </ThemeProvider>
))


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}