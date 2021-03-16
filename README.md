# FarmOS PDOK Maps: farm_map_pdok

Various layers layers originating from the Dutch PDOK [datasets](https://www.pdok.nl/datasets).

Currently supports:
- AHN2 5M
- AHN3 5M
- Luchtfotos Actueel RGB
- Luchtfotos Actueel IR

More layers could be added, but ideally WMTS would be used instead of WMS
(currently not supported in the FarmOS-map back-end https://github.com/farmOS/farmOS-map/issues/63).

## Installation

Upload on your FarmOS instance as a new Drupal Module

The module `.tar.gz` is uploaded on the [releases page](https://github.com/Sidiox/farm_map_pdok/releases) of this repository.

## Building From Source

```bash
tar czf farm_map_pdok.tar.gz --exclude=farm_map_dpok.tar.gz --exclude=.git -C $(pwd)/../ farm_map_pdok
```


# Sources
Partially based on: https://github.com/symbioquine/farm_map_sjc
and various other [FarmOS map projects](https://farmos.org/development/projects/)