Package.describe({
  name: 'johnantoni:meteor-transit',
  summary: 'Super-smooth CSS transitions & transformations for jQuery ~ packaged for meteor',
  version: '0.0.1',
  git: 'https://github.com/johnantoni/meteor-transit',
  documentation: 'README.md'
});

Package.on_use(function(api) {
  api.add_files([
    'jquery.transit/jquery.transit.js'
  ], ['client']);
});
