# isthedungeonprinterdown
A web-app to calculate whether or not the dungeon printer is down. Currently lives at isthedungeonprinterdown.com.

## Running the App

1. `npm install`
2. `npm start`

## API

- `POST /report` with a status of "up" or "down" to change the status.
- `GET /status` to get the status of the printer.
