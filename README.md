# Resolve `import.meta.url`
Replaces import.meta.url with the CJS equivalent of __filename. For use in [gnv
workspaces](https://github.com/TeleworkInc/gnv), which will always bundle to
single outputs, and can therefore resolve `import.meta.url` safely to the
filename of the script where it is called.

### Source
```javascript
/**
 * Change `import.meta.url` to the absolute path of the file where it is
 * referenced.
 *
 * @return {object}
 */
const resolveMetaUrl = () => ({
  name: 'disablePackages',
  resolveImportMeta: (property, chunk) => {
    if (property === 'url') {
      return `'file://${chunk.moduleId}'`;
    }
  },
});
```