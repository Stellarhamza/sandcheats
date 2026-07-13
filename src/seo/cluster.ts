/** One intent cluster for Sand Cheats — descriptive anchors (handbook §08 / §18) */
export const SAND_CLUSTER = {
  hub: { to: '/buy', label: 'Buy Sand Cheats (ESP & Wallhack)' },
  guides: [
    { to: '/blog/sand-esp-guide', label: 'Sand Cheats ESP guide: enemies through walls' },
    { to: '/blog/loot-esp-extraction', label: 'Loot ESP extraction guide for Sand Cheats' },
    { to: '/blog/sand-beginners-guide', label: 'Sand Cheats beginners guide' },
    { to: '/blog/hwid-spoofer-explained', label: 'HWID spoofer explained for Sand Cheats' },
    { to: '/blog/tinybuild-anticheat-analysis', label: 'Anti-cheat analysis for Sand Cheats users' },
    { to: '/blog/staying-updated-after-patches', label: 'Staying updated after patches' },
    { to: '/blog/best-sand-cheat-2026', label: 'Best Sand Cheats comparison 2026' },
  ],
  homeAnchors: [
    { to: '/buy', label: 'See Sand Cheats pricing and features' },
    { to: '/blog', label: 'Read the Sand Cheats blog' },
    { to: '/#esp', label: 'Browse Sand Cheats ESP feature visuals' },
    { to: '/#about-cheat', label: 'Read product information about Sand Cheats' },
  ],
} as const;
