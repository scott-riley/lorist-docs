import { defineConfig } from "vitepress";
import { withSidebar } from "vitepress-sidebar";

const vitePressConfig = defineConfig({
  head: [["link", { rel: "icon", href: "/favicon.svg" }]],
  themeConfig: {
    logo: {
      light: "/logo.svg",
      dark: "/logo-dark.svg",
    },
    siteTitle: false,
    socialLinks: [
      { icon: "github", link: "https://github.com/scott-riley/lorist-writer" },
    ],
  },
  title: "Lorist Docs",
  description:
    "Documentation for Lorist; the writing app that gets out of your way.",
});

const vitePressSidebarConfig = {
  documentRootPath: "/",
  collapsed: false,
  capitalizeFirst: true,
  useTitleFromFrontmatter: true,
  hyphenToSpace: true,
  manualSortFileNameByPriority: [
    "the-basics",
    "the-editor",
    "key-features",
    "technical-bits",
  ],
};

export default withSidebar(vitePressConfig, vitePressSidebarConfig);
