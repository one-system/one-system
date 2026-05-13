/*
 * Public API Surface of one-sys-core
 */

//export * from './lib/one-sys-core.service';
//export * from './lib/one-sys-core.component';
//export * from './lib/one-sys-core.module';

// #region Directive

export * from './lib/directive/router-outlet-named/router-outlet-named.directive';
export * from './lib/directive/theming/theming.directive';

// #endregion

// #region Domain

export * from './lib/domain/app-config';

export * from './lib/domain/blade/blade';
export * from './lib/domain/blade/blades';
export * from './lib/domain/dashboard/appboard/appboard';
export * from './lib/domain/dashboard/appboard/appboard-entry';
export * from './lib/domain/sidebar/sidebar';
export * from './lib/domain/sidebar/sidebar-entry';

export * from './lib/service/browser/viewport';

// #endregion

// #region Services

export * from './lib/service/main-osc/main-osc.service';
//export * from './lib/service/app/app.service';
//export * from './lib/service/app-config/app-config.service';

// #endregion

// #region Modules

export * from './lib/one-sys-core.module';

// #endregion
