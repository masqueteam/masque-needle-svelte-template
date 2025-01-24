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
      tx: (value) => ({
        '--tw-translate-x': value,
        transform: 'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
      }),
      ty: (value) => ({
        '--tw-translate-y': value,
        transform: 'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
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