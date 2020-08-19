# Resolve `import.meta.url`
Replaces import.meta.url with the CJS equivalent of __filename. For use in [gnv
workspaces](https://github.com/TeleworkInc/gnv), which will always bundle to
single outputs, and can therefore resolve `import.meta.url` safely to the
filename of the script where it is called.