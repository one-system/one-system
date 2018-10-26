CD one-sys\ClientApp
ng build @one-system/one-sys-core
ng build @one-system/one-sys-portal-azure
CD dist\one-system\one-sys-core && npm pack && CD ..\..\..
CD dist\one-system\one-sys-portal-azure && npm pack && CD ..\..\..
CD ..\..

CD sample1\app1\ClientApp
npm install ..\..\..\one-sys\clientapp\dist\one-system\one-sys-core\one-system-one-sys-core-0.0.1.tgz
npm install ..\..\..\one-sys\clientapp\dist\one-system\one-sys-portal-azure\one-system-one-sys-portal-azure-0.0.1.tgz
ng build app1
CD dist\app1 && npm pack && CD ..\..
CD ..\..\..

CD sample1\app2\ClientApp
npm install ..\..\..\one-sys\clientapp\dist\one-system\one-sys-core\one-system-one-sys-core-0.0.1.tgz
npm install ..\..\..\one-sys\clientapp\dist\one-system\one-sys-portal-azure\one-system-one-sys-portal-azure-0.0.1.tgz
ng build app2
CD dist\app2 && npm pack && CD ..\..
CD ..\..\..

CD sample1\sample-portal-1\ClientApp
npm install ..\..\..\one-sys\clientapp\dist\one-system\one-sys-core\one-system-one-sys-core-0.0.1.tgz
npm install ..\..\..\one-sys\clientapp\dist\one-system\one-sys-portal-azure\one-system-one-sys-portal-azure-0.0.1.tgz
npm install ..\..\app1\clientapp\dist\app1\app1-0.0.1.tgz
npm install ..\..\app2\clientapp\dist\app2\app2-0.0.1.tgz
ng build
CD ..\..\..
