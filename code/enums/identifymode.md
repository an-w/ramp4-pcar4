[ramp-core](../README.md) / [Exports](../modules.md) / IdentifyMode

# Enumeration: IdentifyMode

## Table of contents

### Enumeration members

- [Details](identifymode.md#details)
- [Haze](identifymode.md#haze)
- [Highlight](identifymode.md#highlight)
- [Marker](identifymode.md#marker)
- [Query](identifymode.md#query)

## Enumeration members

### Details

• **Details**: = "details"

Display the identify results in the details panel.
This option only works in conjunction with the `Query` option. Without `Query`, there will be no results to display in the details panel.

Defined in: [map.ts:228](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/map.ts#L228)

___

### Haze

• **Haze**: = "haze"

Dehighlights all other layers and features except the identify results (if `Highlight` is set) or the marker (if `Marker` is set`).
The haze will not be applied if neither `Marker` nor `Highlight` is set.

Defined in: [map.ts:245](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/map.ts#L245)

___

### Highlight

• **Highlight**: = "highlight"

Highlight the identify results on the map. If the `Marker` mode is set, highlighted features will replace the marker.
Only works when `Query` is set.

Defined in: [map.ts:234](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/map.ts#L234)

___

### Marker

• **Marker**: = "marker"

Adds a graphic marker at the point of a mouse click. The marker will be set on the map even if the `Query` option is not set.

Defined in: [map.ts:239](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/map.ts#L239)

___

### Query

• **Query**: = "query"

Runs the identify query and pipes the available results through the `identify` API endpoint.

Defined in: [map.ts:222](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/map.ts#L222)
