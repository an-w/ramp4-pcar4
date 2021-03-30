[ramp-core](../README.md) / [Exports](../modules.md) / MapAPI

# Class: MapAPI

## Hierarchy

* [*APIScope*](apiscope.md)

  ↳ **MapAPI**

## Table of contents

### Constructors

- [constructor](mapapi.md#constructor)

### Properties

- [$iApi](mapapi.md#$iapi)
- [\_activeKeys](mapapi.md#_activekeys)
- [\_identifyMode](mapapi.md#_identifymode)
- [\_panInterval](mapapi.md#_paninterval)

### Accessors

- [$vApp](mapapi.md#$vapp)
- [keysActive](mapapi.md#keysactive)

### Methods

- [identify](mapapi.md#identify)
- [mapKeyDown](mapapi.md#mapkeydown)
- [mapKeyUp](mapapi.md#mapkeyup)
- [pan](mapapi.md#pan)
- [stopPan](mapapi.md#stoppan)
- [zoom](mapapi.md#zoom)

## Constructors

### constructor

\+ **new MapAPI**(`iApi`: [*InstanceAPI*](instanceapi.md)): [*MapAPI*](mapapi.md)

Creates an instance of APIScope.

**`memberof`** APIScope

#### Parameters:

Name | Type |
:------ | :------ |
`iApi` | [*InstanceAPI*](instanceapi.md) |

**Returns:** [*MapAPI*](mapapi.md)

Inherited from: [APIScope](apiscope.md)

Defined in: [common.ts:29](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/common.ts#L29)

## Properties

### $iApi

• `Readonly` **$iApi**: [*InstanceAPI*](instanceapi.md)

The instance of RampMap API scoped to a single Vue R4MP application.

**`memberof`** APIScope

Inherited from: [APIScope](apiscope.md).[$iApi](apiscope.md#$iapi)

Defined in: [common.ts:17](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/common.ts#L17)

___

### \_activeKeys

• `Private` **\_activeKeys**: *string*[]

Defined in: [map.ts:73](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/map.ts#L73)

___

### \_identifyMode

• **\_identifyMode**: [*IdentifyMode*](../enums/identifymode.md)[]

Defined in: [map.ts:7](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/map.ts#L7)

___

### \_panInterval

• `Private` **\_panInterval**: *any*

Defined in: [map.ts:76](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/map.ts#L76)

## Accessors

### $vApp

• get **$vApp**(): *Vue*

The instance of Vue R4MP application controlled by this InstanceAPI.
This is just a shorthand for `this.$iApi.$vApp`.

**`readonly`** 

**`memberof`** APIScope

**Returns:** *Vue*

Defined in: [common.ts:27](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/common.ts#L27)

___

### keysActive

• get **keysActive**(): *boolean*

Returns if keys are active on map

**`memberof`** MapAPI

**Returns:** *boolean*

- true if any pan/zoom keys are active

Defined in: [map.ts:137](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/map.ts#L137)

## Methods

### identify

▸ **identify**(`payload`: *default* \| MapClick): *void*

Performs an identify request on all layers that support identify, and combines the results into an object that is readable by the details panel.

**`memberof`** DetailsFixture

#### Parameters:

Name | Type |
:------ | :------ |
`payload` | *default* \| MapClick |

**Returns:** *void*

Defined in: [map.ts:33](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/map.ts#L33)

___

### mapKeyDown

▸ **mapKeyDown**(`payload`: KeyboardEvent): *void*

Processes keydown event on map and initiates panning/zooming

**`memberof`** MapAPI

#### Parameters:

Name | Type |
:------ | :------ |
`payload` | KeyboardEvent |

**Returns:** *void*

Defined in: [map.ts:84](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/map.ts#L84)

___

### mapKeyUp

▸ **mapKeyUp**(`payload`: KeyboardEvent): *void*

Processes keyup event on map and deactivates key

**`memberof`** MapAPI

#### Parameters:

Name | Type |
:------ | :------ |
`payload` | KeyboardEvent |

**Returns:** *void*

Defined in: [map.ts:108](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/map.ts#L108)

___

### pan

▸ `Private`**pan**(): *void*

Starts/restarts panning with active keys

**`memberof`** MapAPI

**Returns:** *void*

Defined in: [map.ts:166](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/map.ts#L166)

___

### stopPan

▸ **stopPan**(): *void*

Stops panning and deactivates all keys

**`memberof`** MapAPI

**Returns:** *void*

Defined in: [map.ts:126](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/map.ts#L126)

___

### zoom

▸ `Private`**zoom**(`payload`: KeyboardEvent): *Promise*<void\>

Pauses pan interval to process zoom from keyboard

**`memberof`** MapAPI

#### Parameters:

Name | Type |
:------ | :------ |
`payload` | KeyboardEvent |

**Returns:** *Promise*<void\>

Defined in: [map.ts:149](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/map.ts#L149)
