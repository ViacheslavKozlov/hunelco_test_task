# General

This project was generated with Typescript version 5.x, Express version 4.x and node 18.15.0 as a test task for Hunelco Ltd

## Dependencies

Run `npm install` to handle project's dependencies.

## Development server

Run `npm run dev` which will serve up a proxy server (to avoid CORS errors) at `http://localhost:3000/`. If you wish to proxy to the production server, simply edit the API entry in `.env` file

## Error Handling

All errors handling should be done using methods in the shared class (`helpers/errHandler.ts`). This is to ensure consistency in the way error messages are handled and presented to the user across the platform.

## OpenAPI

To generate movie description with OpenAPI services please use your own API key in `.env` file
