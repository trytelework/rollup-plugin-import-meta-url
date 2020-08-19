/**
 * @license MIT
 */
/**
 * @fileoverview
 * Entry point for module.
 */

/**
 * Change `import.meta.url` to the absolute path of the file where it is
 * referenced.
 *
 * @return {object}
 */
const resolveMetaUrl = () => ({
  name: 'resolveMetaUrl',
  resolveImportMeta: (property, chunk) => {
    if (property === 'url') {
      return `'file://${chunk.moduleId}'`;
    }
  },
});

module.exports = resolveMetaUrl;
