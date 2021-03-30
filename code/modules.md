[ramp-core](README.md) / Exports

# ramp-core

## Table of contents

### Enumerations

- [GlobalEvents](enums/globalevents.md)
- [IdentifyMode](enums/identifymode.md)

### Classes

- [APIScope](classes/apiscope.md)
- [EventAPI](classes/eventapi.md)
- [FixtureAPI](classes/fixtureapi.md)
- [FixtureInstance](classes/fixtureinstance.md)
- [InstanceAPI](classes/instanceapi.md)
- [MapAPI](classes/mapapi.md)
- [PanelAPI](classes/panelapi.md)
- [PanelInstance](classes/panelinstance.md)

### Interfaces

- [APIInterface](interfaces/apiinterface.md)
- [AppVersion](interfaces/appversion.md)
- [RampGeo](interfaces/rampgeo.md)

### Type aliases

- [PanelConfigPair](modules.md#panelconfigpair)
- [PanelConfigSet](modules.md#panelconfigset)
- [PanelInstancePath](modules.md#panelinstancepath)
- [PanelInstanceSet](modules.md#panelinstanceset)
- [PanelRegistrationOptions](modules.md#panelregistrationoptions)

### Properties

- [default](modules.md#default)

### Functions

- [isComponentOptions](modules.md#iscomponentoptions)
- [isTypeofImportVue](modules.md#istypeofimportvue)
- [isVueConstructor](modules.md#isvueconstructor)

## Type aliases

### PanelConfigPair

Ƭ **PanelConfigPair**: *object*

A single pair of `PanelConfig`/id values.

#### Type declaration:

Name | Type |
:------ | :------ |
`config` | PanelConfig |
`id` | *string* |

Defined in: [panel.ts:271](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/panel.ts#L271)

___

### PanelConfigSet

Ƭ **PanelConfigSet**: *object*

A set of key-value pairs with `PanelConfig` objects and their ids.

#### Type declaration:

Defined in: [panel.ts:266](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/panel.ts#L266)

___

### PanelInstancePath

Ƭ **PanelInstancePath**: *object*

A path specifying panel id, screen id, and any props for that panel screen. Used when opening a panel through `$iApi.panel.open(...)`.

#### Type declaration:

Name | Type |
:------ | :------ |
`id` | *string* |
`props`? | *object* |
`screen`? | *string* |

Defined in: [panel.ts:281](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/panel.ts#L281)

___

### PanelInstanceSet

Ƭ **PanelInstanceSet**: *object*

A set of key-value pairs with `PanelInstance` objects and their ids.

#### Type declaration:

Defined in: [panel.ts:276](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/panel.ts#L276)

___

### PanelRegistrationOptions

Ƭ **PanelRegistrationOptions**: *object*

A set of common registration options to apply to panels being registered.

#### Type declaration:

Name | Type | Description |
:------ | :------ | :------ |
`i18n`? | I18nComponentOptions | Locale messages in the form of either i18n options object or un-parsed CSV rows. These messages will be passed to any screen opened inside this panel.   |

Defined in: [panel.ts:286](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/panel.ts#L286)

## Properties

### default

• **default**: [*APIInterface*](interfaces/apiinterface.md)

## Functions

### isComponentOptions

▸ **isComponentOptions**(`value`: *ComponentOptions*<Vue\> \| *any*): value is ComponentOptions<Vue, DefaultData<Vue\>, DefaultMethods<Vue\>, DefaultComputed, PropsDefinition<Record<string, any\>\>, Record<string, any\>\>

Checks if the provided value is Vue `ComponentsOptions` object.

#### Parameters:

Name | Type |
:------ | :------ |
`value` | *ComponentOptions*<Vue\> \| *any* |

**Returns:** value is ComponentOptions<Vue, DefaultData<Vue\>, DefaultMethods<Vue\>, DefaultComputed, PropsDefinition<Record<string, any\>\>, Record<string, any\>\>

Defined in: [common.ts:74](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/common.ts#L74)

___

### isTypeofImportVue

▸ **isTypeofImportVue**(`value`: \_\_module \| *any*): value is \_\_module

Checks if the provided value is a dynamically imported `*.vue` file.

#### Parameters:

Name | Type |
:------ | :------ |
`value` | \_\_module \| *any* |

**Returns:** value is \_\_module

Defined in: [common.ts:89](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/common.ts#L89)

___

### isVueConstructor

▸ **isVueConstructor**(`value`: VueConstructor \| *any*): value is VueConstructor<Vue\>

Checks if the provided value is a `VueConstructor`.

#### Parameters:

Name | Type |
:------ | :------ |
`value` | VueConstructor \| *any* |

**Returns:** value is VueConstructor<Vue\>

Defined in: [common.ts:62](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/common.ts#L62)
