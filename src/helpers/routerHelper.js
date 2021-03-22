export function getCurrentUrl(location) {
    return location.pathname;
};

export function checkIsActive(location, url) {
    const current = getCurrentUrl(location);
    if (url === current) {
        return true;
      }
      return false;
};
