[ramp-core](../README.md) / [Exports](../modules.md) / FixtureAPI

# Class: FixtureAPI

## Hierarchy

* [*APIScope*](apiscope.md)

  ↳ **FixtureAPI**

## Table of contents

### Constructors

- [constructor](fixtureapi.md#constructor)

### Properties

- [$iApi](fixtureapi.md#$iapi)

### Accessors

- [$vApp](fixtureapi.md#$vapp)

### Methods

- [add](fixtureapi.md#add)
- [addDefaultFixtures](fixtureapi.md#adddefaultfixtures)
- [get](fixtureapi.md#get)
- [remove](fixtureapi.md#remove)

## Constructors

### constructor

\+ **new FixtureAPI**(`iApi`: [*InstanceAPI*](instanceapi.md)): [*FixtureAPI*](fixtureapi.md)

Creates an instance of APIScope.

**`memberof`** APIScope

#### Parameters:

Name | Type |
:------ | :------ |
`iApi` | [*InstanceAPI*](instanceapi.md) |

**Returns:** [*FixtureAPI*](fixtureapi.md)

Inherited from: [APIScope](apiscope.md)

Defined in: [common.ts:29](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/common.ts#L29)

## Properties

### $iApi

• `Readonly` **$iApi**: [*InstanceAPI*](instanceapi.md)

The instance of RampMap API scoped to a single Vue R4MP application.

**`memberof`** APIScope

Inherited from: [APIScope](apiscope.md).[$iApi](apiscope.md#$iapi)

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

## Methods

### add

▸ **add**(`id`: *string*, `constructor?`: IFixtureBase): *Promise*<FixtureBase\>

Loads a (built-in) fixture or adds supplied fixture into the R4MP Vue instance.

**`memberof`** FixtureAPI

#### Parameters:

Name | Type |
:------ | :------ |
`id` | *string* |
`constructor?` | IFixtureBase |

**Returns:** *Promise*<FixtureBase\>

Defined in: [fixture.ts:28](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/fixture.ts#L28)

___

### addDefaultFixtures

▸ **addDefaultFixtures**(`fixtureNames?`: *string*[]): *Promise*<FixtureBase[]\>

Loads the set of standard, built-in fixtures to the R4MP Vue instance.
This will quickly set up the vanilla version of RAMP.
Note this function is automatically run by the instance startup unless the loadDefaultFixtures option is
set to false. The function is exposed to allow custom pages the ability to call it at a different point
in the startup. Also, a subset of standard fixtures can be provided on the optional parameter if one
wishes to omit some of the standard fixtures.

**`memberof`** FixtureAPI

#### Parameters:

Name | Type |
:------ | :------ |
`fixtureNames?` | *string*[] |

**Returns:** *Promise*<FixtureBase[]\>

resolves with array of default fixtures

Defined in: [fixture.ts:134](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/fixture.ts#L134)

___

### get

▸ **get**<T\>(`item`: *string* \| FixtureBase): T

Finds and returns a `FixtureBase` object with the id specified.

**`memberof`** FixtureAPI

#### Type parameters:

Name | Type | Default | Description |
:------ | :------ | :------ | :------ |
`T` | FixtureBase | FixtureBase | subclass of the `FixtureBase`; defaults to `FixtureBase`   |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`item` | *string* \| FixtureBase | fixture id or `FixtureBase` item   |

**Returns:** T

Defined in: [fixture.ts:84](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/fixture.ts#L84)

▸ **get**<T\>(`item`: *string*[]): T[]

Finds and returns a collection of `FixtureBase` objects given a list of ids.
This can be useful when retrieving several fixtures at one time as follows:
```ts
const [one, two, three] = RAMP.fixture.get(['fixture-one', 'fixture-two', 'fixture-three']);
```

**`memberof`** FixtureAPI

#### Type parameters:

Name | Type | Default | Description |
:------ | :------ | :------ | :------ |
`T` | FixtureBase | FixtureBase | subclass of the `FixtureBase`; defaults to `FixtureBase`   |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`item` | *string*[] | a list of fixture ids   |

**Returns:** T[]

Defined in: [fixture.ts:97](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/fixture.ts#L97)

___

### remove

▸ **remove**<T\>(`fixtureOrId`: *string* \| FixtureBase): T

Removes the specified fixture from R4MP instance.

**`memberof`** FixtureAPI

#### Type parameters:

Name | Type | Default |
:------ | :------ | :------ |
`T` | FixtureBase | FixtureBase |

#### Parameters:

Name | Type |
:------ | :------ |
`fixtureOrId` | *string* \| FixtureBase |

**Returns:** T

Defined in: [fixture.ts:68](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/fixture.ts#L68)
