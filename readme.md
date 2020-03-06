# Endpoint Tester

Prereqs:
* node ~=10.13 (probably runs with other versions)
* npm

To use:

Run `npm run start` to start a server on port 3000, or `PORT=$PORT npm run start` to start a server on `$PORT`.

## What does it do?

It just logs out every request it gets. Potentially useful for testing proxies or webhooks.

## Docker

There's also a docker image. Run `docker build . -t endpoint-tester` to build, and `docker run -e PORT=5000 -p 5000:5000 endpoint-tester` to run with docker.
