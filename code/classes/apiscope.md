[ramp-core](../README.md) / [Exports](../modules.md) / APIScope

# Class: APIScope

A base class for anything requiring access to the InstanceApi and instance of Vue app controlled by it.

**`export`** 

## Hierarchy

* **APIScope**

  ↳ [*EventAPI*](eventapi.md)

  ↳ [*FixtureAPI*](fixtureapi.md)

  ↳ [*FixtureInstance*](fixtureinstance.md)

  ↳ [*PanelAPI*](panelapi.md)

  ↳ [*PanelInstance*](panelinstance.md)

  ↳ [*MapAPI*](mapapi.md)

## Table of contents

### Constructors

- [constructor](apiscope.md#constructor)

### Properties

- [$iApi](apiscope.md#$iapi)

### Accessors

- [$vApp](apiscope.md#$vapp)

## Constructors

### constructor

\+ **new APIScope**(`iApi`: [*InstanceAPI*](instanceapi.md)): [*APIScope*](apiscope.md)

Creates an instance of APIScope.

**`memberof`** APIScope

#### Parameters:

Name | Type |
:------ | :------ |
`iApi` | [*InstanceAPI*](instanceapi.md) |

**Returns:** [*APIScope*](apiscope.md)

Defined in: [common.ts:29](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/common.ts#L29)

## Properties

### $iApi

• `Readonly` **$iApi**: [*InstanceAPI*](instanceapi.md)

The instance of RampMap API scoped to a single Vue R4MP application.

**`memberof`** APIScope

Defined in: [common.ts:17](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/common.ts#L17)

## Accessors

### $vApp

• get **$vApp**(): *Vue*

The instance of Vue R4MP application controlled by this InstanceAPI.
This is just a shorthand for `this.$iApi.$vApp`.

**`readonly`** 

**`memberof`** APIScope

**Returns:** *Vue*

Defined in: [common.ts:27](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/common.ts#L27)
