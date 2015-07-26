#!/usr/bin/env node
import keycodes from 'keycodes';
import meow from 'meow';

const cli = meow({
  help: [
    'Usage',
    '  keycodes <key>',
    '',
    'Examples',
    '  keycodes enter',
    '  keycodes 13 --name',
    '',
    'Options',
    '  -n, --name  get key name'
  ]
}, {
  boolean: [
    'name'
  ],
  alias: {
    n: 'name'
  }
});

let input = cli.input[0];
if (!cli.flags.name) input += '';
console.log(keycodes(input));
