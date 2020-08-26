if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
  workbox.setConfig({
    debug: true
  });

  workbox.precaching.precacheAndRoute(self.__precacheManifest);

  workbox.routing.registerRoute(
    ({event}) => event.request.mode === "navigate",
    async () => {
      const defaultBase = "/index.html";
      return caches
        .match(workbox.precaching.getCacheKeyForURL(defaultBase))
        .then((response) => {
          return response || fetch(defaultBase);
        })
        .catch((err) => {
          return fetch(defaultBase);
        });
    }
  );

  workbox.routing.registerRoute(
    new RegExp("^https://nothibs\\.tappware\\.com/api"), // Change to match your endpoint URL.

    new workbox.strategies.StaleWhileRevalidate({
      cacheName: "nothi-api-cache",
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [200, 404]
          // headers: {
          //   'X-Is-Cacheable': 'true',
          // },
        })
      ]
    })
  );
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
