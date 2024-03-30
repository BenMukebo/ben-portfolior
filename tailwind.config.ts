import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      xs: '0',
      xm: '375px',
      sm: '480px',
      md: '768px',
      lg: '992px',
      xl: '1280px',
      xxl: '1480px',
      xxxl: '1570px',
    },
    extend: {
      backgroundImage: {
        // 'hero-pattern': "url('/img/hero-pattern.svg')",
        // 'lets-talk-gradient': "url('/images/lets-talk-gradient.svg')",
      },
      colors: {
        border: "hsl(var(--border))",
        // "thin-10": "var(--white-fade-10)",
        // border: {
        //   DEFAULT: "hsl(var(--border))",
        //   light: "hsl(var(--border-light))",
        //   dark: "hsl(var(--border-dark))",
        //   thin: "var(--border-thin)"
        // },
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "var(--background)",
        foreground: "hsl(var(--foreground))",
        brand: {
          DEFAULT: "var(--brand)",
          foreground: "var(--brand-foreground)",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        white: {
          DEFAULT: "var(--white)",
          foreground: "var(--white-foreground)",
          light: "var(--white-light)",
          "fade-5": "var(--white-fade-5)",
          "fade-10": "var(--white-fade-10)",
        },
        black: {
          DEFAULT: "var(--black)",
          foreground: "var(--black-foreground)",
          light: "var(--black-light)",
          "fade-5": "var(--black-fade-5)",
          "fade-15": "var(--black-fade-15)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        'border-15': '0px 10px 25px 0px var(--black-fade-15)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['18px', '27px'],
        // lg: ['20px', '28px'],  xl: ['24px', '32px'],
        xl: ['24px', '36px'],
        "2xl": ['28px', '36px'],
        "3xl": ['32px', '36px'],
        "4xl": ['36px', '40px'],
        "5xl": ['40px', '48px'],
        // "4xl": ['48px', '56px'],
        // 12: '0.75rem',
        14: '0.875rem',
        22: '1.375rem',
        32: '2rem',
        40: ['2.5rem', '2.5rem'],
        52: ['3.25rem', '3.25rem'],
        60: ['3.75rem', '3.75rem'],
        88: ['5.5rem', '5.5rem'],
        112: ['7rem', '7rem'],
      },
      lineHeight: {
        52: '3.25rem',
        72: '4.5rem',
      },
      spacing: {
        18: '1.125rem',
        52: '3.25rem',
        72: '4.5rem',
        76: '4.75rem',
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config;
