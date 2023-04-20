# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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

[unreleased]: https://github.com/ogre2/Omega//compare/v1.1.0...HEAD
[1.1.0]: https://github.com/ogre2/Omega/compare/v1.0.4...v1.1.0
[1.0.4]: https://github.com/ogre2/Omega/compare/v1.0.3...v1.0.4
[1.0.3]: https://github.com/ogre2/Omega/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/ogre2/Omega/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/ogre2/Omega/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/ogre2/Omega/compare/v0.0.1...v1.0.0
[0.0.1]: https://github.com/ogre2/Omega/releases/tag/v0.0.1
