const isWindows = process.platform === 'win32'

export const ICONS = {
  failed: isWindows ? '\u00D7' : '\u2715',
  info: '\u24D8',
  success: isWindows ? '\u221A' : '\u2713',
  warning: '\u26A0',
  debug: '\u22c7',
}
