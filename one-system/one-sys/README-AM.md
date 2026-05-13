# ANGULAR CODING

## CREATE

````
ng new one-sys --create-application false
ng generate application sample1
ng generate library @one-system/one-sys-core
ng generate library @one-system/one-sys-portal-azure
````

## BUILD

````
ng build @one-system/one-sys-core --configuration development
ng build @one-system/one-sys-portal-azure --configuration development
ng build sample1 --configuration development

ng build @one-system/one-sys-core --configuration production
ng build @one-system/one-sys-portal-azure --configuration production
ng build sample1 --configuration production
````

## CODING

### ADD LIBRARY ASSETS TO APPLICATION

#### LIBRARY

Add the following to **lib-path\ng-package.json**

````
"assets": [
   "assets"
],
````

Add the assets (images, *.sass, etc.) into to the following directory **lib-path\assets**

Use the assets as follow:

````
<img style="width:200px;" src="/assets/one-system/one-sys-portal-azure/one-system.png" >
````

#### APLLICATION

Add the following in **angular.json** (to every application where the library is used)
````
application > "architect" > "build" >
"assets": [
   {
       "glob": "**/*",
       "input": "dist/one-system/one-sys-portal-azure/assets",
       "output": "./assets/one-system/one-sys-portal-azure/"
   }
],
````

# USING @one-system/one-sys-portal-azure

## app.module.ts

Add the following code:

````
import { OneSysCoreModule } from '@one-system/one-sys-core';
import { OneSysPortalAzureModule } from '@one-system/one-sys-portal-azure';

const appConfig: AppConfig = new AppConfig();

imports: [
    OneSysCoreModule.forRoot(appConfig),
    OneSysPortalAzureModule
],
````

## app.component.ts

Add the following code:

````
export class AppComponent implements OnInit {
    title = 'one-sys-sample-1';

    constructor(private mainOscService: MainOscService) { }

    ngOnInit() {
        //this.mainOscService.appConfigService.appConfig.sidebar.isVisible = false;
        //this.mainOscService.appConfigService.appConfig.sidebar.push(new SidebarEntry('My App1', 'icon1'));

        this.mainOscService.appConfigService.appConfig.appboard.isVisible = true;
        this.mainOscService.appConfigService.appConfig.appboard.push(new AppboardEntry('My App1', 'bladenav1', 'Blade Nav 1', 'far fa-tablet', 'rgb(201, 112, 112)'));
    }
}
````
