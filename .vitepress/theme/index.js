import DefaultTheme from "vitepress/theme";
import "./lorist.css";

export default {
  ...DefaultTheme,
  themeConfig: {
    logo: "/logo.svg",
  },
  transformHead({ assets }) {
    return [
      [
        "link",
        {
          rel: "stylesheet",
          href: "https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@1&display=swap",
        },
      ],
      [
        "script",
        {
          src: "https://example.com/custom-script.js",
          async: true,
        },
      ],
    ];
  },
};
