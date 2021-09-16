module.exports = {
  client: {
    includes: ['./mutations/**/*.ts', './queries/**/*.ts'], // array of glob patterns
    excludes: ['**/.next/**/*', '**/pages/**/*', '**/public/**/*'], // array of glob patterns
    service: {
      name: 'bellingham-3d-db',
      localSchemaFile: './schema.graphql',
    },
  },
};
