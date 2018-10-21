
# DOCUMENTATION

## @ONESYSTEM/ONESYS

- @onesystem/onesys-core
  - Angular Element Prefix: osc
  - Is an Angular library within the onesys Angular project
  - No UI
  - Responsible for all one-system core entities and services
  - Entities:
    - Apps 
  - Pack and publish a npm package

- @onesystem/onesys-portal-azure
  - Angular Element Prefix: ospa
  - Is an Angular library within the onesys Angular project
  - UI similar to Microsoft Azure Portal
  - Responsible for providing base UI components
  - Pack and publish a npm package

- onesys
  - Is an Angular project
  - Contains onesys-core
  - Contains onesys-portal-azure

## SAMPLE1

- sample-portal-1
  - Is an ASP.NET Core Web Application, with Angular
  - Includes npm package: onesys-core
  - Includes npm package: onesys-portal-azure
  - Includes npm package: app1
  - Includes npm package: app2
  - Includes nuget package: app1-webapi
  - Includes nuget package: app2-webapi
  - Deployed as a Web Application

- app1
  - Is an Angular library within the app1-host angular project
  - Pack and publish a npm package

- app1-webapi
  - Is a Class Library (.NET Core)
  - Pack and publish a nuget package

- app2
  - Is an Angular library within the app1-host angular project
  - Pack and publish a npm package

- app2-webapi
  - Is a Class Library (.NET Core)
  - Pack and publish a nuget package

# KB

- Enable IE 11 Support for Portal App only (main app, there is no need to do it for all)
  - https://blog.angularindepth.com/angular-and-internet-explorer-5e59bb6fb4e9

- Tutorial angular workspace, apps and libs
  - https://blog.angularindepth.com/creating-a-library-in-angular-6-87799552e7e5

- Add npm local packages
  - https://stackoverflow.com/questions/8088795/installing-a-local-module-using-npm

# ISSUES

- It would be nice, if we could combine WebApplication1 and WebLib and deploy it as one unit, not as two.
  .NET Core and Angular should be bundled as a nuget or npm package.

- How can we build and deploy the Angular (ev. Elements) project

# BUILD ONESYS

## CREATE

ng new onesys
rename onesys to ClientApp
ng generate library @onesystem/onesys-core --prefix=osc
ng generate library @onesystem/onesys-portal-azure --prefix=ospa

## PATCH | BUILD | PACK | PUBLISH

### PATCH

REM RELEASE PATCH: cd projects\onesystem\onesys-core && npm version patch && cd ..\..\..
REM RELEASE PATCH: cd projects\onesystem\onesys-portal-azure && npm version patch && cd ..\..\..

### BUILD

ng build @onesystem/onesys-core
ng build @onesystem/onesys-portal-azure
REM DOES NOT WORK: ng build --prod @onesystem/onesys-core
REM DOES NOT WORK: ng build --prod @onesystem/onesys-portal-azure

### PACK

cd dist\onesystem\onesys-core && npm pack && cd ..\..\..
cd dist\onesystem\onesys-portal-azure && npm pack && cd ..\..\..

### PUBLISH

REM RELEASE: cd dist\onesystem\onesys-core && npm pack && npm publish && cd ..\..\..
REM RELEASE: cd dist\onesystem\onesys-portal-azure && npm pack && npm publish && cd ..\..\..

# BUILD SAMPLE

## APP1

ng new app1-dev
rename app1-dev ClientApp
cd ClientApp
ng generate library app1 --prefix=app1

see Using the libraries

REM RELEASE PATCH: cd projects\app1 && npm version patch && cd ..\..
ng build app1
cd dist\app1 && npm pack && cd ..\..

## APP2

ng new app2-dev
rename app2-dev ClientApp
cd ClientApp
ng generate library app2 --prefix=app2

see Using the libraries

REM RELEASE PATCH: cd projects\app2 && npm version patch && cd ..\..
ng build app2
cd dist\app2 && npm pack && cd ..\..

## SAMPLE1

npm install ..\..\app1\clientapp\dist\app1\app1-0.0.1.tgz
npm install ..\..\app2\clientapp\dist\app2\app2-0.0.1.tgz

ADD TO src\app\app.module.ts

import { App1 } from 'app1';
import { App1 } from 'app1';
import { OnesysPortalAzureModule } from '@onesystem/onesys-portal-azure';

  imports: [
    OnesysCoreModule,
    OnesysPortalAzureModule
  ],

# USING THE LIBRARIES

## INSTALL PACKAGES FOR DEVOLOPMENT (WITHOUT USING NPMJS.ORG)

npm install ..\..\..\onesys\clientapp\dist\onesystem\onesys-core\onesystem-onesys-core-0.0.1.tgz
npm install ..\..\..\onesys\clientapp\dist\onesystem\onesys-portal-azure\onesystem-onesys-portal-azure-0.0.1.tgz

## ADD MODULES

ADD TO src\app\app.module.ts

import { OnesysCoreModule } from '@onesystem/onesys-core';
import { OnesysPortalAzureModule } from '@onesystem/onesys-portal-azure';

  imports: [
    OnesysCoreModule,
    OnesysPortalAzureModule
  ],

import { App1Module } from 'app1';
import { App2Module } from 'app2';

  imports: [
    App1Module,
    App2Module
  ],

## USE COMPONENTS

<osc-onesys-core></osc-onesys-core>
<ospa-onesys-portal-azure></ospa-onesys-portal-azure>

## TSCONFIG.JSON SETTINGS IN PROJECT ONESYS

VERIFY IF THE PATHES ARE DEFINED IN tsconfig.json:

    "paths": {
      "@onesystem/onesys-core": [
        "dist/onesystem/onesys-core"
      ],
      "@onesystem/onesys-core/*": [
        "dist/onesystem/onesys-core/*"
      ],
      "@onesystem/onesys-portal-azure": [
        "dist/onesystem/onesys-portal-azure"
      ],
      "@onesystem/onesys-portal-azure/*": [
        "dist/onesystem/onesys-portal-azure/*"
      ]
