export function getCookie(name) {
  let matches = document.cookie.match(
    /* eslint-disable */
    new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)")
    /* eslint-enable */
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
