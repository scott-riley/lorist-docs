import { defineConfig } from "vitepress";
import { withSidebar } from "vitepress-sidebar";

const vitePressConfig = defineConfig({
  themeConfig: {
    logo: "/logo.svg",
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
