export function parseDateOrNull(date) {
    const parsed = new Date(date);
    return isNaN(parsed.getTime()) ? null : parsed;
  }
  