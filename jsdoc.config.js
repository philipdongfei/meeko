module.exports = {
  plugins: ['plugins/markdown'],
  recurseDepth: 10,
  source: {
    include: ['lib', 'index.js', 'lib/tools', 'lib/fake'],
    exclude: [ /* array of paths to exclude */ ],
    includePattern: '.+\\.js(doc|x)?$',
    excludePattern: '(^|\\/|\\\\)_'
  },
  sourceType: 'module',
  tags: {
    allowUnknownTags: true,
    dictionaries: ['jsdoc', 'closure']
  },
  opts: {
    'encoding': 'utf8',
    'private': true,
    'recurse': true,
    'template': './node_modules/minami'
  },
  templates: {
    cleverLinks: false,
    monospaceLinks: false,
    default: {
      outputSourceFiles: false,
      staticFiles: {
      }
    }
  }
}