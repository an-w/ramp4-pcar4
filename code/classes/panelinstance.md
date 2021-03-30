[ramp-core](../README.md) / [Exports](../modules.md) / PanelInstance

# Class: PanelInstance

## Hierarchy

* [*APIScope*](apiscope.md)

  ↳ **PanelInstance**

## Table of contents

### Constructors

- [constructor](panelinstance.md#constructor)

### Properties

- [$iApi](panelinstance.md#$iapi)
- [id](panelinstance.md#id)
- [loadedScreens](panelinstance.md#loadedscreens)
- [route](panelinstance.md#route)
- [screens](panelinstance.md#screens)
- [style](panelinstance.md#style)

### Accessors

- [$vApp](panelinstance.md#$vapp)
- [isOpen](panelinstance.md#isopen)
- [isPinned](panelinstance.md#ispinned)
- [width](panelinstance.md#width)

### Methods

- [close](panelinstance.md#close)
- [isScreenLoaded](panelinstance.md#isscreenloaded)
- [open](panelinstance.md#open)
- [pin](panelinstance.md#pin)
- [registerScreen](panelinstance.md#registerscreen)
- [setStyles](panelinstance.md#setstyles)
- [show](panelinstance.md#show)
- [toggle](panelinstance.md#toggle)

## Constructors

### constructor

\+ **new PanelInstance**(`iApi`: [*InstanceAPI*](instanceapi.md), `id`: *string*, `config`: PanelConfig): [*PanelInstance*](panelinstance.md)

Creates an instance of PanelInstance.

**`memberof`** PanelInstance

#### Parameters:

Name | Type |
:------ | :------ |
`iApi` | [*InstanceAPI*](instanceapi.md) |
`id` | *string* |
`config` | PanelConfig |

**Returns:** [*PanelInstance*](panelinstance.md)

Overrides: [APIScope](apiscope.md)

Defined in: [panel-instance.ts:146](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/panel-instance.ts#L146)

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

ID of this panel.

**`memberof`** PanelInstance

Defined in: [panel-instance.ts:23](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/panel-instance.ts#L23)

___

### loadedScreens

• `Private` `Readonly` **loadedScreens**: *string*[]

A list of screen component ids which are loaded and ready to be rendered.

**`memberof`** PanelInstance

Defined in: [panel-instance.ts:40](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/panel-instance.ts#L40)

___

### route

• **route**: PanelConfigRoute

Specifies which panel screen to display and optional props to be passed to the screen panel component.

**`memberof`** PanelConfig

Defined in: [panel-instance.ts:146](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/panel-instance.ts#L146)

___

### screens

• `Readonly` **screens**: PanelConfigScreens

A collection of panel screens to be displayed inside the panel.

**`memberof`** PanelInstance

Defined in: [panel-instance.ts:31](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/panel-instance.ts#L31)

___

### style

• **style**: PanelConfigStyle

The style object to apply to the panel.

**`memberof`** PanelConfig

Defined in: [panel-instance.ts:123](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/panel-instance.ts#L123)

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

### isOpen

• get **isOpen**(): *boolean*

Checks if the panel is open or not.

**`readonly`** 

**`memberof`** PanelInstance

**Returns:** *boolean*

Defined in: [panel-instance.ts:208](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/panel-instance.ts#L208)

___

### isPinned

• get **isPinned**(): *boolean*

Checks if this panel is pinned or not.

**`readonly`** 

**`memberof`** PanelInstance

**Returns:** *boolean*

Defined in: [panel-instance.ts:279](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/panel-instance.ts#L279)

___

### width

• get **width**(): *undefined* \| *number*

Returns the width of the panel in pixels or undefined if not set.

**`readonly`** 

**`memberof`** PanelInstance

**Returns:** *undefined* \| *number*

Defined in: [panel-instance.ts:132](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/panel-instance.ts#L132)

## Methods

### close

▸ **close**(): [*PanelInstance*](panelinstance.md)

Close this panel.
This is a proxy to `RAMP.panel.close(...)`.

**`memberof`** PanelInstance

**Returns:** [*PanelInstance*](panelinstance.md)

Defined in: [panel-instance.ts:219](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/panel-instance.ts#L219)

___

### isScreenLoaded

▸ **isScreenLoaded**(`id`: *string*): *boolean*

Checks if a given screen component id is already loaded and ready to render.

**`memberof`** PanelInstance

#### Parameters:

Name | Type |
:------ | :------ |
`id` | *string* |

**Returns:** *boolean*

Defined in: [panel-instance.ts:49](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/panel-instance.ts#L49)

___

### open

▸ **open**(`value?`: *string* \| { `props?`: *object* ; `screen`: *string*  }): [*PanelInstance*](panelinstance.md)

Opens a registered panel in the panel stack.
This is a proxy to `RAMP.panel.open(...)`.

 - `somePanel.open()` -- opens the panel on the first screen in the set
 - `somePanel.open('screen-id')` -- opens the panel on the 'screen-id' screen
 - `somePanel.open({ screen: 'screen-id', props: {... } })` -- opens the panel on the 'screen-id' screen passing supplied `props` to it

**`memberof`** PanelInstance

#### Parameters:

Name | Type |
:------ | :------ |
`value?` | *string* \| { `props?`: *object* ; `screen`: *string*  } |

**Returns:** [*PanelInstance*](panelinstance.md)

Defined in: [panel-instance.ts:189](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/panel-instance.ts#L189)

___

### pin

▸ **pin**(`value?`: *boolean*): [*PanelInstance*](panelinstance.md)

Pin/unpin/toggle (if no value provided) pin status of this panel. When pinning, automatically unpins any previous pinned panel if exists.
This is a proxy to `RAMP.panel.pin(...)`.

**`memberof`** PanelInstance

#### Parameters:

Name | Type |
:------ | :------ |
`value?` | *boolean* |

**Returns:** [*PanelInstance*](panelinstance.md)

Defined in: [panel-instance.ts:262](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/panel-instance.ts#L262)

___

### registerScreen

▸ **registerScreen**(`id`: *string*): *void*

Loads and register panel screen components.
This function should be called just before the screen is to be shown; this will avoid needlessly loading components upfront
(sometimes certain screens might not get used at all).

**`memberof`** PanelInstance

#### Parameters:

Name | Type |
:------ | :------ |
`id` | *string* |

**Returns:** *void*

Defined in: [panel-instance.ts:61](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/panel-instance.ts#L61)

___

### setStyles

▸ **setStyles**(`style`: *object*, `replace?`: *boolean*): [*PanelInstance*](panelinstance.md)

Sets the styles of the specified panel by using a provided CSS styles object.
This is a proxy to `RAMP.panel.setStyles(...)`.

**`memberof`** PanelInstance

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`style` | *object* | - |
`replace` | *boolean* | false |

**Returns:** [*PanelInstance*](panelinstance.md)

Defined in: [panel-instance.ts:308](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/panel-instance.ts#L308)

___

### show

▸ **show**(`value`: *string* \| PanelConfigRoute): [*PanelInstance*](panelinstance.md)

Sets route to the specified screen id and pass props to the panel screen components.
This is a proxy to `RAMP.panel.route(...)`.

**`memberof`** PanelInstance

#### Parameters:

Name | Type |
:------ | :------ |
`value` | *string* \| PanelConfigRoute |

**Returns:** [*PanelInstance*](panelinstance.md)

Defined in: [panel-instance.ts:291](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/panel-instance.ts#L291)

___

### toggle

▸ **toggle**(`value?`: *boolean* \| { `props?`: *object* ; `screen`: *string* ; `toggle?`: *boolean*  }): [*PanelInstance*](panelinstance.md)

Toggle panel.
This is a proxy to `RAMP.panel.toggle(...)`.

**`memberof`** PanelInstance

#### Parameters:

Name | Type |
:------ | :------ |
`value?` | *boolean* \| { `props?`: *object* ; `screen`: *string* ; `toggle?`: *boolean*  } |

**Returns:** [*PanelInstance*](panelinstance.md)

Defined in: [panel-instance.ts:233](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/panel-instance.ts#L233)
