import type { FeatureCollection, GeoJsonObject, Geometry, Feature } from "npm:@types/geojson";

const types: { [key: string]: string } = {
  Point: "geometry",
  MultiPoint: "geometry",
  LineString: "geometry",
  MultiLineString: "geometry",
  Polygon: "geometry",
  MultiPolygon: "geometry",
  GeometryCollection: "geometry",
  Feature: "feature",
  FeatureCollection: "featurecollection",
};

/**
 * Normalize a GeoJSON feature into a FeatureCollection.
 *
 * @param {GeoJsonObject} gj - GeoJSON data
 * @returns {FeatureCollection | null} - Normalized GeoJSON data
 */
export function normalize(gj: GeoJsonObject): FeatureCollection | null {
  if (gj?.type && typeof gj.type === "string") {
    const type = types[gj.type];

    if (!type) return null;

    if (type === "geometry") {
      return {
        type: "FeatureCollection",
        features: [{
          type: "Feature",
          properties: {},
          geometry: gj as Geometry,
        }],
      };
    }

    if (type === "feature") {
      return {
        type: "FeatureCollection",
        features: [gj as Feature],
      };
    }

    if (type === "featurecollection") {
      return gj as FeatureCollection;
    }
  }
  return null;
}
