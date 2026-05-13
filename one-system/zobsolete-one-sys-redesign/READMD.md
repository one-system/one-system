## BUILD FOR DEVELPOMEN

    ng build @one-system/one-sys-portal-azure --watch

## PUBLISH TO NPM

This is a public package:

    cd projects\one-system\one-sys-portal-azure && npm version patch && cd ..\..\..

    ng build @one-system/one-sys-portal-azure

    cd dist\one-system\one-sys-portal-azure && npm pack && npm publish --access public && cd ..\..\..
