# Pokemon Catalog

Project Goals: Illustrate modern data fetching techniques using react query. Utilize React’s suspense/lazy api for code splitting and lazy loading.

- Code Splitting and lazy loading components
  React’s suspense/lazy api makes code splitting easy. It allows us to postpone rendering until data is available and enhances the experience by providing fallback content.

- Display skeleton components during the initial load while content is loading.

- React query simplifies the process of managing data fetching and caching. List data is cached when navigating from main index list and specific pages. When user returns from specific pages the data is not re-fetched. Images are not cached so you will see these in the network activity.

- Route Router Dom 6 is being used for the page routing.

## Demo

[Poke Catalog](https://bournecreative.github.io/react-mobx-pokeCatalog/)

Tech: React, TypeScript, React Router, React Query, Mobx, Restful API
