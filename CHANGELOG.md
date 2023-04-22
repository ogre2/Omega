# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.2.3] - 2023/04/21

### Added

- [1.2.2] release link in this change log file.

### Fixed

- Content centering in table columns of the corporate page.
- Typography responsiveness (sizing on mobile devices).
- Image displaying fix for mobile devices of the corporate page.
- Fixed column and card sizing on mobile devices on the corporate page.

## [1.2.2] - 2023/04/21

### Added

- [1.2.1] and [1.2.2] release links in this changelog.

## [1.2.1] - 2023/04/21

### Added

- `<className>` props to the reviews components.

### Changed

- Moved the `<Navbar.js>`, `<Footer.js>`, `<Header.js>`, and `<Layout.js>` files from `<src/components>`
to the `<src/layouts>` subdirectory.

## [1.2.0] - 2023/04/21

### Added

- New images under the NavTabs section of the corporate landing page.
- Additional column in the header company features section.
- `.bg-white` definition in the `_backgrounds.scss` file.
  - Applied it across various sections of the corporate landing page.

### Changed

- Moved the reviews in the header to a dedicated `<Reviews.js>` file under the components subdirectory.
- `className` declaration in the FAQ section of the corporate landing page code.

### Fixed

- Copywriting of the corporate landing page.
- Header form of the corporate landing page.
- Padding on the FAQ accordion body areas.

## [1.1.1] - 2023/04/20

### Added

- New mobile device and browser images in the `<NavTabs>` section of the corporate page design.

### Fixed

- Class attribute declaration in the corporate page code.

## [1.1.0] - 2023/04/19

### Removed

- Consulting, business, agency, and services pages.
- Added a "503 under construction" page to replace the removed pages
as a temporary handler.

## [1.0.4] - 2023/04/19

### Changes

- Refactored router code in the `<App.js>` file for the index page route.
- Added the basename to the browser-router component in the `<index.js>` file.

### Fixed

- Github pages rendering issues.
- Readded the correct github pages link in the `<package.json>` file.
- Changed the private field in the `<package.json>` file from "true" to "false".
  - This seemed to have solved the issue.

## [1.0.3] - 2023/04/19

### Fixed

- Changed github link to "." in the homepage link inside the `<package.json>` file.

## [1.0.2] - 2023/04/19

### Added

- Homepage link back to the `<package.json>` file.
  - Experiencing issue with rendering project once deployed to gh-pages.

## [1.0.1] - 2023/04/19

### Fixed

- [unreleased] link in this change log file.

### Removed

- Homepage link in the `<package.json>` file.

## [1.0.0] - 2023/04/19

### Added

- `<src/components>` subdirectory to house all template components.
- `<src/pages>` subdirectory to house all pages.
- `<src/styles>` subdirectory to house all SASS styling for components and pages.
- Installed `<flag-icons>` dependency for frontend development use.
- Corporate landing page template complete.

### Fixed

- Release date for [0.0.1] in this change log file.
- Release link for [0.0.1] in this change log file.

## [0.0.1] - 2014-05-31

### Added

- Installed React files and dependencies.
- Installed and configured `<gh-pages>`.
- This CHANGELOG file to track the evolution of the project source code.

[unreleased]: https://github.com/ogre2/Omega//compare/v1.2.3...HEAD
[1.2.3]: https://github.com/ogre2/Omega/compare/v1.2.2...v1.2.3
[1.2.2]: https://github.com/ogre2/Omega/compare/v1.2.1...v1.2.2
[1.2.1]: https://github.com/ogre2/Omega/compare/v1.2.0...v1.2.1
[1.2.0]: https://github.com/ogre2/Omega/compare/v1.1.0...v1.2.0
[1.1.1]: https://github.com/ogre2/Omega/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/ogre2/Omega/compare/v1.0.4...v1.1.0
[1.0.4]: https://github.com/ogre2/Omega/compare/v1.0.3...v1.0.4
[1.0.3]: https://github.com/ogre2/Omega/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/ogre2/Omega/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/ogre2/Omega/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/ogre2/Omega/compare/v0.0.1...v1.0.0
[0.0.1]: https://github.com/ogre2/Omega/releases/tag/v0.0.1
