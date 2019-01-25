# sw-etag-chrome

Reproduces Chrome bug where the service worker script request header does not include `If-None-Matched` after the browser has already seen a response for the same script with an `ETag` response header.

Firefox does not seem to have the same issue.

[Reproduction video]()

## Reproduction Steps

1. `yarn`
2. `yarn serve`
3. Open up Chrome Canary and navigate to `http://localhost:3000`
4. Server will print out `ifNoneMatched undefined`, which is expected because this is the first time the service worker script has been fetched from this browser.
5. Refresh the page. Another request for `sw.js` will be triggered, but the server will still print out `ifNoneMatched undefined`, even though the resource has been tagged with an ETag response header.
6. Repeat Steps 3-5 in Firefox, and notice that the server does recieve `If-None-Matched` request headers from Firefox.