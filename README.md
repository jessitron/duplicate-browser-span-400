# duplicate-browser-span-400
this exists for a bug report, delete it later.

Quick duplication with curl: 

`./run`

Duplication in the browser:

Put a HONEYCOMB_API_KEY in getting-started/document-load.ts

```
cd getting-started
npm install
npm start
```

now go to the browser at localhost:1234

Open the dev tools, look at the network tab, reload the page

see the /traces send. See a 400. See what it sent.


