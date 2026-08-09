# Daylight Mobile

Daylight Mobile is the installable phone companion to the Daylight desktop family dashboard. It is a static progressive web app (PWA), so it can be hosted free on GitHub Pages and installed from Safari or Chrome without an app store.

## Included

- Today dashboard with all three students, leave-by and pickup details, current class/passing status, and full expandable bell schedules
- Regular and special bell schedules from the desktop source of truth
- Family month calendar, daily detail, important and medical events
- Seven- or 30-day agenda
- To-do and grocery lists with on-device habit suggestions
- Health and medication notes
- Current weather and clothing guidance
- School route handoff, family portals, notification center, dark/light modes, large text and reduced motion
- Offline installation and caching
- Real-time desktop/mobile WebSocket pairing, with an included relay server

## Publish on GitHub Pages

1. Create a new GitHub repository and upload the contents of this folder to the repository root.
2. Commit and push to the `main` branch.
3. In GitHub, open **Settings → Pages** and select **GitHub Actions** as the source.
4. The included workflow publishes the app. Open the generated HTTPS address on the phone.
5. On iPhone use **Share → Add to Home Screen**. On Android use **Install app** from Chrome.

## Connect the desktop and phone

GitHub Pages cannot host a persistent WebSocket server. The small server in `relay/` is the private transport between devices and can be hosted on a Node-compatible service such as Render, Railway, Fly.io, or a private server.

1. The relay is deployed at `wss://daylight-sync-relay.onrender.com` and is prefilled in both apps.
2. Open Daylight desktop **Settings → Mobile sync** and copy its family pairing code into the phone under **More → Connections**.
3. Enter the same pairing code on both devices.
4. Changes are saved locally first and synchronize whenever both devices can reach the relay.

The relay does not store family data; it only forwards encrypted-in-transit WebSocket messages between devices with the same pairing code. For internet-facing production use, put it behind HTTPS, use a long random pairing code, restrict origins, add rate limiting, and add authenticated device enrollment.

## Privacy and limitations

- Schedules, lists, health notes, and credentials remain in each app's local storage. Portal passwords are intentionally not transferred to the mobile web app.
- The built-in mobile assistant handles useful local commands without exposing an AI API key. A production AI feature should call a protected server endpoint rather than putting a secret key in browser code.
- Local reminders work while the PWA is open. Fully background push notifications require a push service and user permission.
- Weather uses Open-Meteo. Route handoff opens the phone's mapping experience; the full OpenStreetMap/TomTom route board stays available on desktop.

## Development

Serve this directory over HTTP rather than opening `index.html` directly:

```powershell
npx serve .
```

The seed data is generated from the desktop app with:

```powershell
node ../../tools/build-mobile-seed.js
```
