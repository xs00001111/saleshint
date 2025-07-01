// constants.js (shared between main & renderer)
const BAR_HEIGHT = 60;   // px – height of the toolbar alone
const EXPANDED_HEIGHT = 500;  // px – enough for any modal
const WINDOW_WIDTH = 600;  // px – compact width for shorter bar

// Dynamic sizing constants - now content-aware
const MENU_HEIGHT = 600;  // px – height when menu is visible
const MIN_PANEL_HEIGHT = 200;  // px – minimum height for any panel
const MAX_PANEL_HEIGHT = 500;  // px – maximum height to prevent oversized windows
const DUAL_PANEL_WIDTH = 800;  // px – width when both panels are visible
const CONTENT_PADDING = 24;  // px – padding around popup content
const HEADER_HEIGHT = 44;  // px – height of panel headers

module.exports = { BAR_HEIGHT, EXPANDED_HEIGHT, WINDOW_WIDTH, MENU_HEIGHT, MIN_PANEL_HEIGHT, MAX_PANEL_HEIGHT, DUAL_PANEL_WIDTH, CONTENT_PADDING, HEADER_HEIGHT };