[ramp-core](../README.md) / [Exports](../modules.md) / PanelAPI

# Class: PanelAPI

## Hierarchy

* [*APIScope*](apiscope.md)

  ↳ **PanelAPI**

## Table of contents

### Constructors

- [constructor](panelapi.md#constructor)

### Properties

- [$iApi](panelapi.md#$iapi)

### Accessors

- [$vApp](panelapi.md#$vapp)
- [opened](panelapi.md#opened)
- [pinned](panelapi.md#pinned)

### Methods

- [close](panelapi.md#close)
- [get](panelapi.md#get)
- [open](panelapi.md#open)
- [pin](panelapi.md#pin)
- [register](panelapi.md#register)
- [setStyle](panelapi.md#setstyle)
- [show](panelapi.md#show)
- [toggle](panelapi.md#toggle)

## Constructors

### constructor

\+ **new PanelAPI**(`iApi`: [*InstanceAPI*](instanceapi.md)): [*PanelAPI*](panelapi.md)

Creates an instance of APIScope.

**`memberof`** APIScope

#### Parameters:

Name | Type |
:------ | :------ |
`iApi` | [*InstanceAPI*](instanceapi.md) |

**Returns:** [*PanelAPI*](panelapi.md)

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

___

### opened

• get **opened**(): [*PanelInstance*](panelinstance.md)[]

Returns an array of open `PanelInstance` objects.

**`readonly`** 

**`memberof`** PanelAPI

**Returns:** [*PanelInstance*](panelinstance.md)[]

Defined in: [panel.ts:123](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/panel.ts#L123)

___

### pinned

• get **pinned**(): *null* \| [*PanelInstance*](panelinstance.md)

Returns the currently pinned panel instance, if exists.

**`readonly`** 

**`memberof`** PanelAPI

**Returns:** *null* \| [*PanelInstance*](panelinstance.md)

Defined in: [panel.ts:208](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/panel.ts#L208)

## Methods

### close

▸ **close**(`value`: *string* \| [*PanelInstance*](panelinstance.md)): [*PanelInstance*](panelinstance.md)

Closes the panel specified.

**`memberof`** PanelAPI

#### Parameters:

Name | Type |
:------ | :------ |
`value` | *string* \| [*PanelInstance*](panelinstance.md) |

**Returns:** [*PanelInstance*](panelinstance.md)

Defined in: [panel.ts:134](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/panel.ts#L134)

___

### get

▸ **get**(`value`: *string* \| [*PanelInstance*](panelinstance.md)): [*PanelInstance*](panelinstance.md)

Finds and returns a panel with the id specified.

**`memberof`** PanelAPI

#### Parameters:

Name | Type |
:------ | :------ |
`value` | *string* \| [*PanelInstance*](panelinstance.md) |

**Returns:** [*PanelInstance*](panelinstance.md)

Defined in: [panel.ts:70](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/panel.ts#L70)

___

### open

▸ **open**(`value`: *string* \| [*PanelInstance*](panelinstance.md) \| [*PanelInstancePath*](../modules.md#panelinstancepath)): [*PanelInstance*](panelinstance.md)

Opens a registered panel in the panel stack.

 - `RAMP.panel.open('panel-id')` -- opens the 'panel-id' panel on the first screen in the set
 - `RAMP.panel.open(<PanelInstance>)` -- opens the provided `PanelInstance` object on the first screen in the set
 - `RAMP.panel.open({ id: 'panel-id', screen: 'screen-id' })` -- opens the 'panel-id' panel on the 'screen-id' screen
 - `RAMP.panel.open({ id: 'panel-id', screen: 'screen-id', props: {... } })` -- opens the 'panel-id' panel on the 'screen-id' screen passing supplied `props` to it

**`memberof`** PanelAPI

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`value` | *string* \| [*PanelInstance*](panelinstance.md) \| [*PanelInstancePath*](../modules.md#panelinstancepath) | a panel id, a `PanelInstance` object or an object of the form `{ id: <panel-id>, screen: <id>, props: <object> }`.   |

**Returns:** [*PanelInstance*](panelinstance.md)

Defined in: [panel.ts:93](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/panel.ts#L93)

___

### pin

▸ **pin**(`value`: *string* \| [*PanelInstance*](panelinstance.md), `pin?`: *boolean*): [*PanelInstance*](panelinstance.md)

Pin/unpin/toggle (if no value provided) pin status of the provided panel. When pinning, automatically unpins any previous pinned panel if exists.

**`memberof`** PanelAPI

#### Parameters:

Name | Type |
:------ | :------ |
`value` | *string* \| [*PanelInstance*](panelinstance.md) |
`pin?` | *boolean* |

**Returns:** [*PanelInstance*](panelinstance.md)

Defined in: [panel.ts:182](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/panel.ts#L182)

___

### register

▸ **register**(`value`: [*PanelConfigPair*](../modules.md#panelconfigpair), `options?`: [*PanelRegistrationOptions*](../modules.md#panelregistrationoptions)): [*PanelInstance*](panelinstance.md)

Registers a provided panel object and returns the resulting `PanelInstance` objects.
When the panel is registered, all its screens are added to the Vue as components right away.

**`memberof`** PanelAPI

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`value` | [*PanelConfigPair*](../modules.md#panelconfigpair) | a PanelConfig/id pair in the form of `{ id: string, config: PanelConfig }`   |
`options?` | [*PanelRegistrationOptions*](../modules.md#panelregistrationoptions) | - |

**Returns:** [*PanelInstance*](panelinstance.md)

Defined in: [panel.ts:16](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/panel.ts#L16)

▸ **register**(`value`: [*PanelConfigSet*](../modules.md#panelconfigset), `options?`: [*PanelRegistrationOptions*](../modules.md#panelregistrationoptions)): [*PanelInstanceSet*](../modules.md#panelinstanceset)

Registers a set of provided panel objects and returns the resulting `PanelInstance` object set.
When the panel is registered, all its screens are added to the Vue as components right away.

**`memberof`** PanelAPI

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`value` | [*PanelConfigSet*](../modules.md#panelconfigset) | a set of PanelConfig objects in the form of `{ [name: string]: PanelConfig }` where keys assumed to be ids   |
`options?` | [*PanelRegistrationOptions*](../modules.md#panelregistrationoptions) | - |

**Returns:** [*PanelInstanceSet*](../modules.md#panelinstanceset)

Defined in: [panel.ts:26](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/panel.ts#L26)

___

### setStyle

▸ **setStyle**(`value`: *string* \| [*PanelInstance*](panelinstance.md), `style`: *object*, `replace?`: *boolean*): *null* \| [*PanelInstance*](panelinstance.md)

Sets the styles of the specified panel by using a provided CSS styles object.

**`memberof`** PanelAPI

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`value` | *string* \| [*PanelInstance*](panelinstance.md) | - |
`style` | *object* | - |
`replace` | *boolean* | false |

**Returns:** *null* \| [*PanelInstance*](panelinstance.md)

Defined in: [panel.ts:244](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/panel.ts#L244)

___

### show

▸ **show**(`value`: *string* \| [*PanelInstance*](panelinstance.md), `route`: PanelConfigRoute): [*PanelInstance*](panelinstance.md)

Sets route to the specified screen id and pass props to the panel screen components.

**`memberof`** PanelAPI

#### Parameters:

Name | Type |
:------ | :------ |
`value` | *string* \| [*PanelInstance*](panelinstance.md) |
`route` | PanelConfigRoute |

**Returns:** [*PanelInstance*](panelinstance.md)

Defined in: [panel.ts:221](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/panel.ts#L221)

___

### toggle

▸ **toggle**(`value`: *string* \| [*PanelInstance*](panelinstance.md) \| [*PanelInstancePath*](../modules.md#panelinstancepath), `toggle?`: *boolean*): [*PanelInstance*](panelinstance.md)

Toggle panel.

**`memberof`** PanelAPI

#### Parameters:

Name | Type |
:------ | :------ |
`value` | *string* \| [*PanelInstance*](panelinstance.md) \| [*PanelInstancePath*](../modules.md#panelinstancepath) |
`toggle?` | *boolean* |

**Returns:** [*PanelInstance*](panelinstance.md)

Defined in: [panel.ts:155](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/panel.ts#L155)
