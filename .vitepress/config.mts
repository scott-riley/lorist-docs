import { defineConfig } from "vitepress";
import { withSidebar } from "vitepress-sidebar";

const vitePressConfig = defineConfig({
  head: [["link", { rel: "icon", href: "/favicon.svg" }]],
  themeConfig: {
    logo: {
      light: "/logo-light.svg",
      dark: "/logo-dark.svg",
    },
    siteTitle: false,
  },
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
