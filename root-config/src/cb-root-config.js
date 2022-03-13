import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@cb/app-1",
  app: () => System.import("@cb/app-1"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@cb/app-2",
  app: () => System.import("@cb/app-2"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@cb/app-3",
  app: () => System.import("@cb/app-3"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
