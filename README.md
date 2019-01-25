# sw-etag-chrome

Reproduces Chrome bug where the service worker script request header does not include `If-None-Matched` after the browser has already seen a response for the same script with an `ETag` response header.

Firefox does not seem to have the same issue.