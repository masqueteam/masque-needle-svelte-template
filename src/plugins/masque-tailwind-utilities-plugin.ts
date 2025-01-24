import plugin from 'tailwindcss/plugin'

const masqueTailwindPlugin = plugin((helpers) => {
  const { matchUtilities, addUtilities, theme } = helpers

  // Flex Center Utility
  addUtilities({
    '.flex-center': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  })

  // Translate X and Y Utilities
  matchUtilities(
    {
      'tx': (value) => ({
        transform: `translateX(${value})`
      }),
      'ty': (value) => ({
        transform: `translateY(${value})`
      }),
    },
    { 
      values: theme('translate'),
      supportsNegativeValues: true,
      type: ['length', 'percentage'],
    }
  )
})

export default masqueTailwindPlugin