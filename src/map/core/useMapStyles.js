import { useMemo } from 'react';
import { useTranslation } from '../../common/components/LocalizationProvider';


const styleCustom = ({ tiles, minZoom, maxZoom, attribution }) => {
  const source = {
    type: 'raster',
    tiles,
    attribution,
    tileSize: 256,
    minzoom: minZoom,
    maxzoom: maxZoom,
  };
  Object.keys(source).forEach((key) => source[key] === undefined && delete source[key]);
  return {
    version: 8,
    sources: {
      custom: source,
    },
    glyphs: 'https://cdn.traccar.com/map/fonts/{fontstack}/{range}.pbf',
    layers: [{
      id: 'custom',
      type: 'raster',
      source: 'custom',
    }],
  };
};

export default () => {
  const t = useTranslation();

  return useMemo(() => [
    {
      id: 'googleRoad',
      title: t('mapGoogleRoad'),
      style: styleCustom({
        tiles: [0, 1, 2, 3].map((i) => `https://mt${i}.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}&s=Ga`),
        maxZoom: 20,
        attribution: '© Google',
      }),
      available: true,
    },
    {
      id: 'googleSatellite',
      title: t('mapGoogleSatellite'),
      style: styleCustom({
        tiles: [0, 1, 2, 3].map((i) => `https://mt${i}.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}&s=Ga`),
        maxZoom: 20,
        attribution: '© Google',
      }),
      available: true,
    },
    {
      id: 'googleHybrid',
      title: t('mapGoogleHybrid'),
      style: styleCustom({
        tiles: [0, 1, 2, 3].map((i) => `https://mt${i}.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}&s=Ga`),
        maxZoom: 20,
        attribution: '© Google',
      }),
      available: true,
    },
  ], [t]);
};
