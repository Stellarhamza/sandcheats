/** One intent cluster for Dark and Darker — descriptive anchors (handbook §08 / §18) */
export const DND_CLUSTER = {
  hub: { to: '/buy', label: 'Buy Dark And Darker Cheats (ESP & Wallhack)' },
  guides: [
    { to: '/blog/dark-and-darker-esp-guide', label: 'Dark and Darker ESP guide: enemies through walls' },
    { to: '/blog/loot-esp-extraction', label: 'Loot ESP extraction guide for Dark and Darker' },
    { to: '/blog/dark-and-darker-beginners-guide', label: 'Dark and Darker beginners guide' },
    { to: '/blog/hwid-spoofer-explained', label: 'HWID spoofer explained for Dark and Darker' },
    { to: '/blog/ironmace-anticheat-analysis', label: 'Ironmace anti-cheat analysis' },
    { to: '/blog/staying-updated-after-patches', label: 'Staying updated after Dark and Darker patches' },
    { to: '/blog/best-dark-and-darker-cheat-2026', label: 'Best Dark and Darker cheat comparison 2026' },
  ],
  homeAnchors: [
    { to: '/buy', label: 'See Dark And Darker pricing and features' },
    { to: '/blog', label: 'Read the Dark And Darker cheat blog' },
    { to: '/#esp', label: 'Browse Dark And Darker ESP feature visuals' },
    { to: '/#about-cheat', label: 'Read product information about DarkerCheats' },
  ],
} as const;
