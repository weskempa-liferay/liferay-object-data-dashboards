/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: MIT
 */

 const path = require('path');

 module.exports = {
   env: {
 
     // Available environments: https://eslint.org/docs/user-guide/configuring#specifying-environments
 
     node: true,
   },
   extends: ['plugin:@liferay/general'],
   ignorePatterns: [
 
     // Third-party code
 
     '/third-party/projects',
     'node_modules',
   ],
   overrides: [
     {
       env: {
         jest: true,
       },
       files: [
         '**/__tests__/**/*.js',
         '**/test/**/*.js',
         '**/tests/**/*.js',
       ],
     },
   ],
 };