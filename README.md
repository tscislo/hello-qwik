## Qwik with Qwik City - resumable, progressive web framework 
### Tomasz Ścisło, 02.12.2022

#### Glossary

**Qwik** is a new kind of web framework that can deliver instant loading web applications at any size or complexity. 

Qwik => React

Qwik City => Next.js

### Why Qwik is unique?
Qwik is unique because of SPA time to interactive performance.

### How does the browser handle JS code in React or Angular that served from the server?
1. Since JS is single threaded the browser needs to download first HTML (blank page, or some Loading... static text)
2. Downloads JS files
3. The main.js file is being parsed and interpreted
4. Hydration happens (event listeners are hooked and component boundaries are set)
5. Page becomes interactive.

### Howe does is look for Qwik?
1. HTML prefilled with serialized state of the application is being downloaded [resumable]
2. Qwik loader is downloaded and parsed (1kB)
3. Application is interactive
4. More app bundles are downloaded by service workers if needed (separate threads) but even those are not interpreted before they are needed [progresive]



**Vite** is a web bundler similar to Webpack and Rollup with tools like dev server HMR but is much more performant.

### Demos
1. Qwik: https://qwik.azurewebsites.net/
2. React: https://hello-react.azurewebsites.net/

### Time to interactive
https://pagespeed.web.dev/report?url=https%3A%2F%2Fqwik.azurewebsites.net%2Freact-basic

https://pagespeed.web.dev/report?url=https%3A%2F%2Fhello-react.azurewebsites.net%2F


Sources
* https://qwik.builder.io/
* https://www.builder.io/blog/our-current-frameworks-are-on-we-need-o1
