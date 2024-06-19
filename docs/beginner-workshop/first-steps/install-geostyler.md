# Install GeoStyler

## Install GeoStyler UI

Since we are using npm, the installation of GeoStyler is straightforward.
Open a terminal and run the following command from the root of your application directory:

```sh
npm i geostyler@7.2.1
```

Additionally, we have to install a few dependencies, which can be installed in the same manner:

```sh
npm i ol@6 antd@4
```

Through this, we install [OpenLayers](https://openlayers.org/) in version 6 and [antd](https://ant.design/) in version 4. OpenLayers will be used
for the displaying of (preview-) maps and antd provides the very basic ui components, such as buttons.

# Install GeoStyler Parsers

The Style and Data Parsers have to be installed separately. This makes sure that you really just installed those parsers that you actually want to use.
In this workshop, we will use the SLD and OpenLayers Style Parser, as well as the WFS Data Parser.

Execute following command to install the parsers:

```sh
npm i geostyler-sld-parser@3.0.1
```
```sh
npm i geostyler-openlayers-parser@3.0.0
```
```sh
npm i geostyler-wfs-parser@1.0.1
```
