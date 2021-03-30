[ramp-core](../README.md) / [Exports](../modules.md) / EventAPI

# Class: EventAPI

## Hierarchy

* [*APIScope*](apiscope.md)

  ↳ **EventAPI**

## Table of contents

### Constructors

- [constructor](eventapi.md#constructor)

### Properties

- [$iApi](eventapi.md#$iapi)
- [\_eventBus](eventapi.md#_eventbus)
- [\_eventRegister](eventapi.md#_eventregister)
- [\_funCounter](eventapi.md#_funcounter)
- [\_nameRegister](eventapi.md#_nameregister)

### Accessors

- [$vApp](eventapi.md#$vapp)

### Methods

- [activeHandlers](eventapi.md#activehandlers)
- [addDefaultEvents](eventapi.md#adddefaultevents)
- [defaultHandlerFactory](eventapi.md#defaulthandlerfactory)
- [emit](eventapi.md#emit)
- [eventNames](eventapi.md#eventnames)
- [findHandler](eventapi.md#findhandler)
- [handlerNamer](eventapi.md#handlernamer)
- [off](eventapi.md#off)
- [on](eventapi.md#on)
- [once](eventapi.md#once)
- [registerEventName](eventapi.md#registereventname)

## Constructors

### constructor

\+ **new EventAPI**(`iApi`: [*InstanceAPI*](instanceapi.md)): [*EventAPI*](eventapi.md)

#### Parameters:

Name | Type |
:------ | :------ |
`iApi` | [*InstanceAPI*](instanceapi.md) |

**Returns:** [*EventAPI*](eventapi.md)

Overrides: [APIScope](apiscope.md)

Defined in: [event.ts:94](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/event.ts#L94)

## Properties

### $iApi

• `Readonly` **$iApi**: [*InstanceAPI*](instanceapi.md)

The instance of RampMap API scoped to a single Vue R4MP application.

**`memberof`** APIScope

Inherited from: [APIScope](apiscope.md).[$iApi](apiscope.md#$iapi)

Defined in: [common.ts:17](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/common.ts#L17)

___

### \_eventBus

• `Private` `Readonly` **\_eventBus**: *Vue*

A vue instance that provides an event bus for all events.

**`memberof`** EventAPI

Defined in: [event.ts:84](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/event.ts#L84)

___

### \_eventRegister

• `Private` `Readonly` **\_eventRegister**: *EventHandler*[]

Defined in: [event.ts:87](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/event.ts#L87)

___

### \_funCounter

• `Private` **\_funCounter**: *number*

Defined in: [event.ts:94](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/event.ts#L94)

___

### \_nameRegister

• `Private` `Readonly` **\_nameRegister**: *string*[]

Defined in: [event.ts:91](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/event.ts#L91)

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

### activeHandlers

▸ **activeHandlers**(`event?`: *string*): *string*[]

Returns any active event handlers, filtered to an event name if desired.

**`memberof`** EventAPI

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`event` | *string* | '' |

**Returns:** *string*[]

list of handler names

Defined in: [event.ts:262](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/event.ts#L262)

___

### addDefaultEvents

▸ **addDefaultEvents**(`eventHandlerNames?`: *string*[]): *string*[]

Loads the set of standard, built-in event handlers to the R4MP Vue instance.
This will quickly set up the vanilla version of RAMP.
Note this function is automatically run by the instance startup unless the loadDefaultEvents option is
set to false. The function is exposed to allow custom pages the ability to call it at a different point
in the startup. Also, a subset of standard event handlers can be provided on the optional parameter if one
wishes to omit some of the standard handlers.

**`memberof`** EventAPI

#### Parameters:

Name | Type |
:------ | :------ |
`eventHandlerNames?` | *string*[] |

**Returns:** *string*[]

resolves with array of event handler names

Defined in: [event.ts:283](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/event.ts#L283)

___

### defaultHandlerFactory

▸ `Private`**defaultHandlerFactory**(`handlerName`: *string*): *string*

Will apply the implementation of default events handlers

**`memberof`** EventAPI

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`handlerName` | *string* | the name of the default event handler to create   |

**Returns:** *string*

name of the event handler

Defined in: [event.ts:304](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/event.ts#L304)

___

### emit

▸ **emit**(`event`: *string*, ...`args`: *any*[]): *void*

Triggers an event.

**`memberof`** EventAPI

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`event` | *string* | the name of the event   |
`...args` | *any*[] | any arguements the event is expecting   |

**Returns:** *void*

Defined in: [event.ts:223](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/event.ts#L223)

___

### eventNames

▸ **eventNames**(): *string*[]

A list of event names that have been registered with the bus.

**`memberof`** EventAPI

**Returns:** *string*[]

list of event names

Defined in: [event.ts:156](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/event.ts#L156)

___

### findHandler

▸ `Private`**findHandler**(`handlerName`: *string*): *undefined* \| *EventHandler*

Locates a registered handler by name, or undefined if not found

**`memberof`** EventAPI

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`handlerName` | *string* | the name of the event handler   |

**Returns:** *undefined* \| *EventHandler*

handler information or undefined

Defined in: [event.ts:117](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/event.ts#L117)

___

### handlerNamer

▸ `Private`**handlerNamer**(`eventName`: *string*): *string*

Generates an event handler name. Used when caller doesnt provide one.

**`memberof`** EventAPI

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`eventName` | *string* | the name of the event the handler is handling   |

**Returns:** *string*

a handler name

Defined in: [event.ts:129](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/event.ts#L129)

___

### off

▸ **off**(`handlerName`: *string*): *void*

Removes an event handler from an event.

**`memberof`** EventAPI

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`handlerName` | *string* | name of the handler to remove   |

**Returns:** *void*

Defined in: [event.ts:196](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/event.ts#L196)

___

### on

▸ **on**(`event`: *string*, `callback`: Function, `handlerName?`: *string*): *string*

Adds an event handler to an event.

**`memberof`** EventAPI

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`event` | *string* | - | name of the event to react to   |
`callback` | Function | - | function to execute when event triggers   |
`handlerName` | *string* | '' | - |

**Returns:** *string*

the handler name

Defined in: [event.ts:171](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/event.ts#L171)

___

### once

▸ **once**(`event`: *string*, `callback`: Function, `handlerName?`: *string*): *string*

Adds an event handler to an event that will be respected once. After the handler
reacts to the event, it will be removed.

**`memberof`** EventAPI

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`event` | *string* | - | name of the event to react to once   |
`callback` | Function | - | function to execute when event triggers   |
`handlerName` | *string* | '' | - |

**Returns:** *string*

the handler name

Defined in: [event.ts:238](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/event.ts#L238)

___

### registerEventName

▸ **registerEventName**(`names`: *string* \| *string*[]): *void*

Adds event names to the names registry of the event bus.

**`memberof`** EventAPI

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`names` | *string* \| *string*[] | event names or names to register   |

**Returns:** *void*

Defined in: [event.ts:140](https://github.com/an-w/ramp4-pcar4/blob/e1fe25a/packages/ramp-core/src/api/event.ts#L140)
