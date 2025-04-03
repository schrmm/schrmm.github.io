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
          DEFAULT: '#00afaf',
          50: '#e6f7f7',
          100: '#ccefef',
          200: '#99dfdf',
          300: '#66cfcf',
          400: '#33bfbf',
          500: '#00afaf',
          600: '#008c8c',
          700: '#006969',
          800: '#004646',
          900: '#002323',
          'light': '#33bfbf',
          'light-dark': '#00afaf',
          'dark': '#008c8c'
        },
        // Accent amber palette
        accent: {
          DEFAULT: '#f59e0b',
          300: '#fcd34d',
          500: '#f59e0b',
          700: '#b45309',
        },
        // Neutral slate palette
        neutral: {
          DEFAULT: '#64748b',
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617'
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