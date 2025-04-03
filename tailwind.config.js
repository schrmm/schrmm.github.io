/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
    "./themes/**/layouts/**/*.html",
  ],
  darkMode: 'class', // Enable dark mode with class-based switching
  theme: {
    extend: {
      colors: {
        // New primary teal palette
        primary: {
          50: 'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)',
        },
        // Accent amber palette
        accent: {
          300: 'var(--color-accent-300)',
          500: 'var(--color-accent-500)',
          700: 'var(--color-accent-700)',
        },
        // Neutral slate palette
        neutral: {
          50: 'var(--color-neutral-50)',
          100: 'var(--color-neutral-100)',
          200: 'var(--color-neutral-200)',
          300: 'var(--color-neutral-300)',
          400: 'var(--color-neutral-400)',
          500: 'var(--color-neutral-500)',
          600: 'var(--color-neutral-600)',
          700: 'var(--color-neutral-700)',
          800: 'var(--color-neutral-800)',
          900: 'var(--color-neutral-900)',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'var(--color-neutral-800)',
            a: {
              color: 'var(--color-primary-600)',
              '&:hover': {
                color: 'var(--color-primary-700)',
              },
            },
            h1: {
              color: 'var(--color-neutral-900)',
            },
            h2: {
              color: 'var(--color-neutral-900)',
            },
            h3: {
              color: 'var(--color-neutral-900)',
            },
            h4: {
              color: 'var(--color-neutral-900)',
            },
            strong: {
              color: 'var(--color-neutral-900)',
            },
            blockquote: {
              color: 'var(--color-neutral-700)',
              borderLeftColor: 'var(--color-primary-500)',
            },
            code: {
              color: 'var(--color-neutral-900)',
            },
            figcaption: {
              color: 'var(--color-neutral-500)',
            },
            // Additional typography styles can remain the same
          },
        },
      },
      fontFamily: {
        sans: ['Inter var', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/2': '3 / 2',
        '2/1': '2 / 1',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}