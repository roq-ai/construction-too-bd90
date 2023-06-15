const mapping: Record<string, string> = {
  companies: 'company',
  outlets: 'outlet',
  reservations: 'reservation',
  tools: 'tool',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
