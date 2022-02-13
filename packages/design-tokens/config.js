module.exports = {
  source: ['tokens/**/*.json'],
  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: 'style/',
      files: [
        {
          destination: '_color.scss',
          format: 'scss/variables',
          filter: {
            attributes: {
              category: 'color',
            },
          },
        },
        {
          destination: '_button.scss',
          format: 'scss/variables',
          filter: {
            attributes: {
              category: 'button',
            },
          },
        },
      ],
    },
    native: {
      transforms: ['attribute/cti', 'name/cti/pascal'],
      buildPath: 'style/',
      files: [
        {
          destination: 'color.ts',
          format: 'javascript/es6',
          filter: {
            attributes: {
              category: 'color',
            },
          },
        },
        {
          destination: 'button.ts',
          format: 'javascript/es6',
          filter: {
            attributes: {
              category: 'button',
            },
          },
        },
      ],
    },
  },
};
