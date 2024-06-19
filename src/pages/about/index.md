# About GeoStyler

GeoStyler is about styling maps. Maybe you are a developer looking for a set of UI components 
to build custom and flexible styling widgets for your geospatial application. Maybe you 
are a cartographer trying to get the style you worked so hard on in your favorite (Q)GIS into the 
web. Or maybe you are a project lead worrying about migrating all your styles to that new fancy 
rendering engine everyone (and in particular your boss) is talking about. The GeoStyler ecosystem is 
here to help. 

###  React Library

One key project of the ecosystem is the React Library providing developers with widgets and 
tools to build powerful and flexible UIs to style geodata over the web. To get an idea of 
its features and capabilities you can have a look at the [Demo Application](https://geostyler.github.io/geostyler-demo/) or dive into the [Source Code](https://github.com/geostyler/geostyler-demo). If you want to learn how to build your own custom map styling applications 
be sure to look into the [tutorials](/#tutorials) and the [documentation](https://geostyler.github.io/geostyler/latest/index.html).

### Style Parsers and Transformations

GeoStyler supports multiple style formats used in the open source geospatial ecosystem: 
QML from QGIS, Mapbox JSON used in MapLibre, OpenLayers Styling Format and the OGC-standardized 
SLD format used by Geoserver. Each of those can be transformed into one of the others. Each style parser is provided as seperate Github 
repository and NPM package. You can get an overview of the available style parsers and 
links [here](/parsers). Be aware that not every styling capability of a particular style 
is supported. Luckily, GeoStyler is open source and it is easy to contribute and get 
involved in the community. Styles can either be transformed using JavaScript in your application 
or with the GeoStyler command-line interface (CLI). 

### Batch Conversion with the GeoStyler CLI 

The GeoStyler command-line interface let's you convert single style files or entire directories from one of the 
supported formats into another. Assuming you have node installed on your system, installation 
is as easy as typing `npm install -g geostyler-cli`. Once you have the CLI installed you 
can transform a style, e.g. from QGIS QML format to SLD directly from the command-line: 

```
geostyler -s qgis -t sld -o output.sld input.qml
```

Make sure to have a look at the [repository](https://github.com/geostyler/geostyler-cli) for 
further instructions and examples. 

### Conversion over the Web

Maybe a conversion over the web via HTTP requests is the way to go for your setup and workflow.
If so, make sure to have a look at the GeoStyler REST API. Using GET and POST 
requests you can transform your style over the web. The REST API is built on top of the popular 
Node.js framework `express`. Check out the [documentation](https://services.meggsimum.de/geostyler-rest/api-docs) and the [repository](https://github.com/geostyler/geostyler-rest). 
Similar to the example above, the following cURL call will transform a simple Mapbox (JSON-Format) style to SLD (XML): 


<!-- Erst Rücksprache mit Christian Mayer ob Meggsimum API verlinkt werden kann / soll -->
<!-- Alternative: Local dev-host dann müsste oben noch ein Satz rein, der darauf 
hinweist, dass eine API auf localhost gestartet werden muss -->
```sh
curl -X 'POST' \
  'https://services.meggsimum.de/geostyler-rest/api/rpc/transform?sourceFormat=Mapbox&targetFormat=SLD' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "version": 8,
  "name": "Demo Style",
  "layers": [
    {
      "id": "Rule 1",
      "type": "circle",
      "paint": {
        "circle-radius": 16,
        "circle-color": "#4b33c8"
      }
    }
  ]
}'
```

 
### Invitation 

We hope that GeoStyler can help you building open geospatial tools 
and maps. If it does, we invite you to get involved: Whether you 
are a developer providing bug fixes and features, or a user improving 
the documentation or writing tutorials. We wish you happy and stylish 
mapping.   