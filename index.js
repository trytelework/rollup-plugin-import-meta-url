/**
 * @license MIT
 */
/**
 * @fileoverview
 * Entry point for module.
 */

const babel = require('@babel/core');
const shebangPattern = /^#!.*/;

/**
 * Modify the AST.
 *
 * @param {string} moduleId
 * The abs path to the chunk being parsed.
 *
 * @return {object}
 */
const transformAst = (moduleId) => ({
  visitor: {
    MemberExpression(path, state) {
      const node = path.node;
      if (
        node.object.type === 'MetaProperty' &&
        node.property.name === 'url'
      ) {
        const newNode = babel.types.stringLiteral(`file://${moduleId}`);
        path.replaceWith(newNode);
      }
    },
  },
});

/**
 * Change `import.meta.url` to the absolute path of the file where it is
 * referenced.
 *
 * @return {object}
 */
const disablePackages = () => ({
  name: 'disablePackages',
  transform: (code, id) => {
    /**
     * Handle shebangs which might be in the beginning of files.
     */
    code = code.replace(shebangPattern, '');

    const output = babel.transformSync(code, {
      plugins: [transformAst(id)],
    });

    return output.code;
  },
});

module.exports = disablePackages;
