[ramp-core](../README.md) / [Exports](../modules.md) / InstanceAPI

# Class: InstanceAPI

## Table of contents

### Constructors

- [constructor](instanceapi.md#constructor)

### Properties

- [$vApp](instanceapi.md#$vapp)
- [\_isFullscreen](instanceapi.md#_isfullscreen)
- [event](instanceapi.md#event)
- [fixture](instanceapi.md#fixture)
- [map](instanceapi.md#map)
- [mapActions](instanceapi.md#mapactions)
- [panel](instanceapi.md#panel)

### Accessors

- [animate](instanceapi.md#animate)
- [isFullscreen](instanceapi.md#isfullscreen)
- [language](instanceapi.md#language)
- [screenSize](instanceapi.md#screensize)

### Methods

- [component](instanceapi.md#component)
- [getConfig](instanceapi.md#getconfig)
- [setLanguage](instanceapi.md#setlanguage)
- [toggleFullscreen](instanceapi.md#togglefullscreen)

## Constructors

### constructor

\+ **new InstanceAPI**(`element`: HTMLElement, `configs?`: RampConfigs, `options?`: RampOptions): [*InstanceAPI*](instanceapi.md)

#### Parameters:

Name | Type |
:------ | :------ |
`element` | HTMLElement |
`configs?` | RampConfigs |
`options?` | RampOptions |

**Returns:** [*InstanceAPI*](instanceapi.md)

Defined in: [instance.ts:38](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/instance.ts#L38)

## Properties

### $vApp

• `Readonly` **$vApp**: *Vue*

The instance of Vue R4MP application controlled by this InstanceAPI.

**`memberof`** InstanceAPI

Defined in: [instance.ts:36](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/instance.ts#L36)

___

### \_isFullscreen

• `Private` **\_isFullscreen**: *boolean*

Defined in: [instance.ts:38](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/instance.ts#L38)

___

### event

• `Readonly` **event**: [*EventAPI*](eventapi.md)

Defined in: [instance.ts:23](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/instance.ts#L23)

___

### fixture

• `Readonly` **fixture**: [*FixtureAPI*](fixtureapi.md)

Defined in: [instance.ts:21](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/instance.ts#L21)

___

### map

• **map**: *RampMap*

Defined in: [instance.ts:28](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/instance.ts#L28)

___

### mapActions

• `Readonly` **mapActions**: [*MapAPI*](mapapi.md)

Defined in: [instance.ts:24](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/instance.ts#L24)

___

### panel

• `Readonly` **panel**: [*PanelAPI*](panelapi.md)

Defined in: [instance.ts:22](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/instance.ts#L22)

## Accessors

### animate

• get **animate**(): *string*

The current animation status.

**`readonly`** 

**`memberof`** InstanceAPI

**Returns:** *string*

Defined in: [instance.ts:179](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/instance.ts#L179)

___

### isFullscreen

• get **isFullscreen**(): *boolean*

Whether the app is fullscreen.

**`readonly`** 

**`memberof`** InstanceAPI

**Returns:** *boolean*

Defined in: [instance.ts:205](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/instance.ts#L205)

___

### language

• get **language**(): *string*

The current locale string for the app.

**`readonly`** 

**`memberof`** InstanceAPI

**Returns:** *string*

Defined in: [instance.ts:168](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/instance.ts#L168)

___

### screenSize

• get **screenSize**(): *null* \| *string*

The 'screen' size for the app. Returns the largest screen class on the element; 'lg', 'md', 'sm' or 'xs'.

**`readonly`** 

**`memberof`** InstanceAPI

**Returns:** *null* \| *string*

Defined in: [instance.ts:122](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/instance.ts#L122)

## Methods

### component

▸ **component**(`id`: *string*): *VueConstructor*<Vue\>

Retrieves a global Vue component by its id.

**`memberof`** InstanceAPI

#### Parameters:

Name | Type |
:------ | :------ |
`id` | *string* |

**Returns:** *VueConstructor*<Vue\>

Defined in: [instance.ts:94](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/instance.ts#L94)

▸ **component**<VC\>(`id`: *string*, `vueConstructor`: VC): VC

Registers a global Vue component given an id and a constructor.

**`memberof`** InstanceAPI

#### Type parameters:

Name | Type |
:------ | :------ |
`VC` | *VueConstructor*<Vue, VC\> |

#### Parameters:

Name | Type |
:------ | :------ |
`id` | *string* |
`vueConstructor` | VC |

**Returns:** VC

Defined in: [instance.ts:104](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/instance.ts#L104)

___

### getConfig

▸ **getConfig**(): *void*

Gets the config linked to the current language of the app.

**`memberof`** InstanceAPI

**Returns:** *void*

Defined in: [instance.ts:143](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/instance.ts#L143)

___

### setLanguage

▸ **setLanguage**(`language`: *string*): *void*

Sets the language of the app to the specified string (e.g. 'en' or 'fr').

**`memberof`** InstanceAPI

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`language` | *string* | The locale string to switch to   |

**Returns:** *void*

Defined in: [instance.ts:154](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/instance.ts#L154)

___

### toggleFullscreen

▸ **toggleFullscreen**(): *void*

Toggles fullscreen for the app.

**`memberof`** InstanceAPI

**Returns:** *void*

Defined in: [instance.ts:191](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/instance.ts#L191)
