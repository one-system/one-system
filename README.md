# PATCH | BUILD | PACK | PUBLISH

## PATCH

REM RELEASE PATCH: cd projects\one-system\one-sys-core && npm version patch && cd ..\..\..
REM RELEASE PATCH: cd projects\one-system\one-sys-portal-azure && npm version patch && cd ..\..\..

## BUILD

ng build @one-system/one-sys-core
ng build @one-system/one-sys-portal-azure
REM DOES NOT WORK: ng build --prod @one-system/one-sys-core
REM DOES NOT WORK: ng build --prod @one-system/one-sys-portal-azure

## PACK

cd dist\one-system\one-sys-core && npm pack && cd ..\..\..
cd dist\one-system\one-sys-portal-azure && npm pack && cd ..\..\..

## PUBLISH

REM RELEASE: cd dist\one-system\one-sys-core && npm pack && npm publish && cd ..\..\..
REM RELEASE: cd dist\one-system\one-sys-portal-azure && npm pack && npm publish && cd ..\..\..

# DOCUMENTATION

## @ONE-SYSTEM/ONE-SYS

- @one-system/one-sys-core
  - Angular Element Prefix: osc
  - Is an Angular library within the one-sys Angular project
  - No UI
  - Responsible for all one-system core entities and services
  - Entities:
    - Apps 
  - Pack and publish a npm package

- @one-system/one-sys-portal-azure
  - Angular Element Prefix: ospa
  - Is an Angular library within the one-sys Angular project
  - UI similar to Microsoft Azure Portal
  - Responsible for providing base UI components
  - Pack and publish a npm package

- one-sys
  - Is an Angular project
  - Contains one-sys-core
  - Contains one-sys-portal-azure

## SAMPLE1

- sample-portal-1
  - Is an ASP.NET Core Web Application, with Angular
  - Includes npm package: one-sys-core
  - Includes npm package: one-sys-portal-azure
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

## ROUTING

- https://www.sitepoint.com/component-routing-angular-router/

## AUTHENTICATION

- https://www.sitepoint.com/angular-2-authentication-protecting-private-content/

## REST API

- https://www.sitepoint.com/angular-rxjs-create-api-service-rest-backend/

# ISSUES

- It would be nice, if we could combine WebApplication1 and WebLib and deploy it as one unit, not as two.
  .NET Core and Angular should be bundled as a nuget or npm package.

- How can we build and deploy the Angular (ev. Elements) project

# BUILD ONE-SYS

## CREATE

ng new one-sys
rename one-sys ClientApp
ng generate library @one-system/one-sys-core --prefix=osc
ng generate library @one-system/one-sys-portal-azure --prefix=ospa

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
import { OneSysPortalAzureModule } from '@one-system/one-sys-portal-azure';

  imports: [
    OneSysCoreModule,
    OneSysPortalAzureModule
  ],


ng build sample1

# USING THE LIBRARIES

## INSTALL PACKAGES FOR DEVOLOPMENT (WITHOUT USING NPMJS.ORG)

npm install ..\..\..\one-sys\clientapp\dist\one-system\one-sys-core\one-system-one-sys-core-0.0.1.tgz
npm install ..\..\..\one-sys\clientapp\dist\one-system\one-sys-portal-azure\one-system-one-sys-portal-azure-0.0.1.tgz

## ADD MODULES

ADD TO src\app\app.module.ts

import { OneSysCoreModule } from '@one-system/one-sys-core';
import { OneSysPortalAzureModule } from '@one-system/ones-ys-portal-azure';

  imports: [
    OneSysCoreModule,
    OneSysPortalAzureModule
  ],

import { App1Module } from 'app1';
import { App2Module } from 'app2';

  imports: [
    App1Module,
    App2Module
  ],

## USE COMPONENTS

<osc-one-sys-core></osc-one-sys-core>
<ospa-one-sys-portal-azure></ospa-one-sys-portal-azure>

## TSCONFIG.JSON SETTINGS IN PROJECT ONE-SYS

VERIFY IF THE PATHES ARE DEFINED IN tsconfig.json:

    "paths": {
      "@one-system/one-sys-core": [
        "dist/one-system/one-sys-core"
      ],
      "@one-system/one-sys-core/*": [
        "dist/one-system/one-sys-core/*"
      ],
      "@one-system/one-sys-portal-azure": [
        "dist/one-system/one-sys-portal-azure"
      ],
      "@one-system/one-sys-portal-azure/*": [
        "dist/one-system/one-sys-portal-azure/*"
      ]

# DEVELOPMENT

ng generate component PageNotFound --project @one-system/one-sys-portal-azure
