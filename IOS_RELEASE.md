# Daylight iOS Release Handoff

The repository now contains a native Capacitor iOS project configuration, production artwork, privacy documentation, versioning, and automated readiness checks. Final signing and App Store upload must be performed on macOS with Xcode and an Apple Developer Program membership.

## On this Windows development computer

```bash
npm install
npm run ios:add
npm run ios:assets
npm run ios:sync
npm test
```

Commit the generated `ios` directory. For later web changes, run `npm run ios:sync` again.

## On the Mac

1. Install the current public Xcode release and accept its license.
2. Clone the Daylight repository and open a terminal in `outputs/Daylight-Mobile-App`.
3. Run `npm install`, `npm run ios:sync`, then `npm run ios:open`.
4. In Xcode, select the **App** target, choose your Apple Developer team, and confirm bundle identifier `com.daylight.family`.
5. Set the marketing version and increment the build number for every upload.
6. Test on a physical iPhone, including fresh install, family creation, device linking, background/resume, offline behavior, Dynamic Type, light/dark mode, notifications, and deletion/reset.
7. Choose **Product → Archive**, validate the archive, and distribute it to App Store Connect.
8. Complete App Privacy, age rating, export-compliance, pricing, territories, screenshots, support URL, privacy URL, and review notes in App Store Connect.
9. Release to internal TestFlight first, then external TestFlight, then submit the stable build for review.

## Important release boundaries

- Windows cannot create or sign the final `.ipa`; Apple requires Xcode on macOS.
- Do not add location, HealthKit, photo, camera, microphone, or tracking permissions unless a shipped feature truly uses them.
- Do not place relay secrets, family encryption keys, traffic keys, or test family data in Git.
- Keep the core app usable without signing into third-party school or health portals.
