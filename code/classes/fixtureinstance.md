[ramp-core](../README.md) / [Exports](../modules.md) / FixtureInstance

# Class: FixtureInstance

A base class for Fixture subclasses. It provides some utility functions to Fixtures and also gives access to `$iApi` and `$vApp` globals.

**`export`** 

**`implements`** {FixtureBase}

## Hierarchy

* [*APIScope*](apiscope.md)

  ↳ **FixtureInstance**

## Implements

* *FixtureBase*

## Table of contents

### Constructors

- [constructor](fixtureinstance.md#constructor)

### Properties

- [$iApi](fixtureinstance.md#$iapi)
- [id](fixtureinstance.md#id)

### Accessors

- [$vApp](fixtureinstance.md#$vapp)
- [config](fixtureinstance.md#config)

### Methods

- [added](fixtureinstance.md#added)
- [extend](fixtureinstance.md#extend)
- [initialized](fixtureinstance.md#initialized)
- [remove](fixtureinstance.md#remove)
- [removed](fixtureinstance.md#removed)
- [terminated](fixtureinstance.md#terminated)
- [updateBaseToInstance](fixtureinstance.md#updatebasetoinstance)

## Constructors

### constructor

\+ **new FixtureInstance**(`id`: *string*, `iApi`: [*InstanceAPI*](instanceapi.md)): [*FixtureInstance*](fixtureinstance.md)

Creates an instance of FixtureInstance.

**`memberof`** FixtureInstance

#### Parameters:

Name | Type |
:------ | :------ |
`id` | *string* |
`iApi` | [*InstanceAPI*](instanceapi.md) |

**Returns:** [*FixtureInstance*](fixtureinstance.md)

Overrides: [APIScope](apiscope.md)

Defined in: [fixture.ts:197](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/fixture.ts#L197)

## Properties

### $iApi

• `Readonly` **$iApi**: [*InstanceAPI*](instanceapi.md)

The instance of RampMap API scoped to a single Vue R4MP application.

**`memberof`** APIScope

Inherited from: [APIScope](apiscope.md).[$iApi](apiscope.md#$iapi)

Defined in: [common.ts:17](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/common.ts#L17)

___

### id

• `Readonly` **id**: *string*

ID of this fixture.

**`memberof`** FixtureInstance

Implementation of: void

Defined in: [fixture.ts:197](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/fixture.ts#L197)

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

### config

• get **config**(): *any*

Returns the fixture config section (JSON) taken from the global config.

**`readonly`** 

**`memberof`** FixtureInstance

**Returns:** *any*

Defined in: [fixture.ts:260](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/fixture.ts#L260)

## Methods

### added

▸ `Optional`**added**(): *void*

**Returns:** *void*

Implementation of: void

Defined in: [fixture.ts:248](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/fixture.ts#L248)

___

### extend

▸ **extend**(`vueConstructor`: *VueConstructor*<Vue\>, `options?`: *ComponentOptions*<Vue, DefaultData<Vue\>, DefaultMethods<Vue\>, DefaultComputed, PropsDefinition<Record<string, any\>\>, Record<string, any\>\>, `mount?`: *boolean*): *Vue*

A helper function to create a "subclass" of the base Vue constructor

**`memberof`** FixtureInstance

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`vueConstructor` | *VueConstructor*<Vue\> | - |
`options` | *ComponentOptions*<Vue, DefaultData<Vue\>, DefaultMethods<Vue\>, DefaultComputed, PropsDefinition<Record<string, any\>\>, Record<string, any\>\> | - |
`mount` | *boolean* | true |

**Returns:** *Vue*

Defined in: [fixture.ts:233](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/fixture.ts#L233)

___

### initialized

▸ `Optional`**initialized**(): *void*

**Returns:** *void*

Implementation of: void

Defined in: [fixture.ts:250](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/fixture.ts#L250)

___

### remove

▸ **remove**(): [*FixtureInstance*](fixtureinstance.md)

Removes the specified fixture from R4MP instance.
This is a proxy to `RAMP.fixture.remove(...)`.

**`memberof`** FixtureInstance

**Returns:** [*FixtureInstance*](fixtureinstance.md)

Defined in: [fixture.ts:219](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/fixture.ts#L219)

___

### removed

▸ `Optional`**removed**(): *void*

**Returns:** *void*

Implementation of: void

Defined in: [fixture.ts:249](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/fixture.ts#L249)

___

### terminated

▸ `Optional`**terminated**(): *void*

**Returns:** *void*

Implementation of: void

Defined in: [fixture.ts:251](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/fixture.ts#L251)

___

### updateBaseToInstance

▸ `Static`**updateBaseToInstance**(`value`: FixtureBase, `id`: *string*, `$iApi`: [*InstanceAPI*](instanceapi.md)): [*FixtureInstance*](fixtureinstance.md)

Adds missing functions and properties to the object implementing FixtureBase interface.
This is only needed for external fixtures as they can't inherit from FixtureInstance.

TODO: If you know a better way to deep-mixin props/getters/functions from a class into another class instance, please tell me. I honestly don't know 🤷‍♂️.

**`static`** 

**`memberof`** FixtureInstance

#### Parameters:

Name | Type |
:------ | :------ |
`value` | FixtureBase |
`id` | *string* |
`$iApi` | [*InstanceAPI*](instanceapi.md) |

**Returns:** [*FixtureInstance*](fixtureinstance.md)

Defined in: [fixture.ts:168](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/fixture.ts#L168)
