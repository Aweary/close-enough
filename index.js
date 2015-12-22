export default function closeEnough(primary, secondary) {
  if (typeof primary === 'string' && typeof secondary === 'string') {
    return primary.toLowerCase() === secondary.toLowerCase();
  }
}
