Jasmine Shared Examples [![Build Status](https://travis-ci.org/treppo/jasmine-shared-examples.png?branch=master)](https://travis-ci.org/treppo/jasmine-shared-examples)
===
Jasmine Shared Examples is bringing the ability to reuse your assertions
throughout your test suite, so that your code stays DRY.

Installation
---
Download [jasmine-shared-examples.js](https://raw.github.com/treppo/jasmine-shared-examples/master/src/jasmine-shared-examples.js)
and add it to your project. If you are using the jasmine gem, be sure the
location you put jasmine-shared-examples.js is included in your src_files path
in jasmine.yml.
If you are using Jasmine standalone, make sure you add it to your spec runner.

Usage
---

Bug reports
---
If you discover any bugs, feel free to create an issue on GitHub. Please add as
much information as possible to help us fixing the possible bug. We also
encourage you to help even more by forking and sending us a pull request.
https://github.com/treppo/jasmine-shared-examples/issues

Contributing
---
1. Fork the repo.

2. Run the tests. We only take pull requests with passing tests:
`npm install -g grunt-cli`, then `npm install && npm test`

3. Add a test for your change. Only refactoring and documentation changes
require no new tests. If you are adding functionality or fixing a bug, we need
a test!

4. Make the test pass.

5. Push to your fork and submit a pull request.

License
---
MIT License. Copyright 2013 Christian Treppo
