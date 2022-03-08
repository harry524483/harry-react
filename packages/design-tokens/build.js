const StyleDictionary = require('style-dictionary');

const brands = ['healthforce'];

const getBasePxFontSize = (options) => {
  return (options && options.basePxFontSize) || 16;
};

const throwSizeError = (name, value, unitType) => {
  throw `Invalid Number: '${name}: ${value}' is not a valid number, cannot transform to '${unitType}' \n`;
};

StyleDictionary.registerTransform({
  type: 'value',
  name: 'size/pxToRem',
  matcher: (token) => {
    return token.attributes.category === 'size' || token.type === 'size';
  },
  transformer: (token, options) => {
    const baseFont = getBasePxFontSize(options);
    const floatVal = parseFloat(token.value);
    if (isNaN(floatVal)) {
      throwSizeError(token.name, token.value, 'rem');
    }
    if (floatVal === 0) {
      return '0';
    }
    return `${floatVal / baseFont}rem`;
  },
});

const getStyleDictionaryConfig = (brand) => ({
  source: [
    'tokens/globals/**/*.json',
    'tokens/components/*.json',
    `tokens/brands/${brand}/*.json`,
  ],
  platforms: {
    native: {
      transforms: ['attribute/cti', 'name/cti/pascal', 'color/rgb'],
      buildPath: `dist/${brand}/`,
      files: [
        {
          destination: `index.js`,
          format: 'javascript/es6',
        },
        {
          format: 'typescript/es6-declarations',
          destination: 'index.d.ts',
        },
      ],
    },
    web: {
      transforms: [
        'attribute/cti',
        'name/cti/kebab',
        'time/seconds',
        'content/icon',
        'color/css',
        'size/pxToRem',
      ],
      buildPath: `style/${brand}/`,
      files: [
        {
          destination: '_tokens.scss',
          format: 'scss/variables',
        },
      ],
    },
  },
});

const getTokenTypesConfig = (brand) => ({
  source: [
    'tokens/globals/**/*.json',
    'tokens/components/*.json',
    `tokens/brands/${brand}/*.json`,
  ],
  platforms: {
    types: {
      transforms: ['attribute/cti', 'name/cti/pascal'],
      buildPath: 'build/',
      files: [
        {
          format: 'typescript/es6-declarations',
          destination: `${brand}.d.ts`,
        },
      ],
    },
  },
});

const buildTokens = () => {
  brands.map((brand) => {
    StyleDictionary.extend(getStyleDictionaryConfig(brand)).buildAllPlatforms();
  });
};

const buildTypes = () => {
  brands.map((brand) => {
    StyleDictionary.extend(getTokenTypesConfig(brand)).buildAllPlatforms();
  });
};

buildTokens();
