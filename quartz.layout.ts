import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
    head: Component.Head(),
    header: [],
    afterBody: [],
    footer: Component.Footer({
        links: {
            // GitHub: "https://github.com/jackyzha0/quartz",
            // "Discord Community": "https://discord.gg/cRFFHYye7t",
        },
    }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
    beforeBody: [
        Component.ConditionalRender({
            component: Component.Breadcrumbs(),
            condition: (page) => page.fileData.slug !== "index",
        }),
        Component.ArticleTitle(),
        Component.ContentMeta(),
        Component.TagList(),
    ],
    left: [
        Component.PageTitle(),
        Component.MobileOnly(Component.Spacer()),
        Component.Flex({
            components: [
                {
                    Component: Component.Search(),
                    grow: true,
                },
                { Component: Component.Darkmode() },
                { Component: Component.ReaderMode() },
            ],
        }),
        // In quartz.config.ts or wherever you configure Explorer
        Component.Explorer({
            folderClickBehavior: "link",     // Make folders clickable links
            folderDefaultState: "collapsed", // Keep folders closed
            filterFn: (node) => {
                // Only show folders, hide all individual files
                return node.isFolder
            },
        }),
        Component.RecentNotes(),
    ],
    right: [
        Component.Graph(),
        Component.DesktopOnly(Component.TableOfContents()),
        Component.Backlinks(),
    ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
    beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
    left: [
        Component.PageTitle(),
        Component.MobileOnly(Component.Spacer()),
        Component.Flex({
            components: [
                {
                    Component: Component.Search(),
                    grow: true,
                },
                { Component: Component.Darkmode() },
            ],
        }),
        Component.Explorer({
            folderClickBehavior: "link",     // Make folders clickable links
            folderDefaultState: "collapsed", // Keep folders closed
            filterFn: (node) => {
                // Only show folders, hide all individual files
                return node.isFolder
            },
        }),
        Component.RecentNotes(),
    ],
    right: [],
}
