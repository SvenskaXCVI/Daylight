# Background school reminders

The mobile Home Screen app subscribes through **More → Settings → Notifications → Enable school reminders**. A user must grant notification permission on their own device. Enabling stores only the push subscription, a device authorization token, and upcoming reminder titles/times; health details, credentials, and complete family snapshots are not stored by this service.

Delivery requires the existing relay to run continuously, with a persistent disk mounted at `/var/data`. Set `DAYLIGHT_PUSH_DATA_DIR=/var/data/daylight-push` on that service. The service generates its VAPID keys once and persists them with registrations. Do not use an ephemeral filesystem, commit these private files, or run multiple relay instances against this JSON store. Back up the private directory securely.

Without that persistent-storage configuration, `/api/push/config` returns `available:false` and the mobile Enable button remains unavailable. Existing calendar synchronization continues to work. The browser UI never reports reminders as active until the server accepts registration.

The phone uploads a rolling 90-day schedule whenever it opens or family data/preferences change. It schedules alerts 10 minutes before leave-by and school pickup. Leave-by follows the existing 15-minutes-before-arrival rule. Pickup excludes after-school program rows. No-school days, disabled alerts, quiet hours, and elapsed reminders are excluded. A schedule change replaces pending jobs. The relay checks due jobs every 15 seconds, uses high Web Push delivery urgency, expires late jobs, and removes invalid subscriptions. iOS delivery remains subject to network availability and the user's notification/Focus settings; high delivery urgency does not grant an Apple Time Sensitive or Critical Alert entitlement.

Tests: `node tests/school-reminders.test.mjs` from the mobile source directory. Tests use fake delivery and temporary storage; no real push notifications are sent.
