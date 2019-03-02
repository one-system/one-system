# angularportalazure
```

ospa-shell (class)
> ospa-portal (class)
  > ospa-topbar (class)
    > ospa-topbar-exit-customize (class)
    > ospa-topbar-content (class)
      > ospa-topbar-brand (class)
        > ospa-topbar-home (class) ** appService.appConfigService.appConfig.appTitle
      > ospa-topbar-placeholder (class)
      > ospa-topbar-search (class)
      > ospa-topbar-buttons (class)
      > ospa-topbar-actionsmenu (class)
      > ospa-topbar-avatarmenu (class)
        > ospa-dropmenu (class)
          > ospa-dropmenu-button (class)
            > ospa-avatarmenu-tenant-container (class)
              > ospa-avatarmenu-username (class) ** appService.appConfigService.appConfig.username
              > ospa-avatarmenu-tenant (class) ** appService.appConfigService.appConfig.usernameTenant
            > ospa-avatarmenu-tenant-image-container (class)
              > ospa-avatarmenu-tenant-image (class)
          > ospa-dropmenu-button (class)
    > ospa-dashboard (class)
    > ospa-loading5dots (class)
  > ospa-portal-tip (class)
  > ospa-portal-main (class)
  > ospa-portal-console (class)
  > ospa-accessible-label (class)
  > ospa-commands-contextMenu (class)
> ospa-splash-screen (element)



MainService (PortalService)
> PortalShell                    : ospa-shell
  >                              : ospa-portal
    >                            : ospa-topbar
    >                            : ospa-portal-tip
    >                            : ospa-portal-main
    >                            : ospa-portal-console
    >                            : ospa-accessible-label
    >                            : ospa-commands-contextMenu
  > SplashscreenComponent        : ospa-splashscreen

> AreaBlades          : UserControlBase
  > Blade[]           : UserControlBase
> AreaNotification    : UserControlBase
> Panorama            : UserControlBase
  > AvatarMenu        : UserControlBase
  > Startboard        : UserControlBase
    > Tiles
      > Tile[]
        > TileSize
> BladeParameter


BladeData           : Blade
BladeDetails        : BladeData<T>
BladeGrid           : BladeData<any>
BladeNav            : BladeData<BladeNavItem>
BladeNavItem

Debug
Exception
ExceptionDotNet
IAddBladeEventArgs
TileSizes
UserAccount
UserControlBase

```
