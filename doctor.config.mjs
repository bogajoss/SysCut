/** @type {import('react-doctor').Config} */
const config = {
  ignore: {
    // Ignore all shadcn/ui components as they are library code
    files: [
      "src/components/ui/**",
      "doctor.config.mjs",
      "src/hooks/use-mobile.ts",
      "src/components/icons/ui.tsx",
      "src/proxy.ts",
      ".next/**",
      ".vinext/**",
      ".agents/**",
    ],
  },
  rules: {
    "react-doctor/require-pnpm-hardening": "off",
  },
};

export default config;
