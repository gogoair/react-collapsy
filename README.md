# react-collapsy
Simple accordion component

## Usability
This plugin require for you to have react and font-awesome, after that import react combo select
```javascript
import Accordion from 'react-collapsy';
```
and include css files
```javascript
require('../node_modules/react-collapsy/lib/index.css');
```

## Usage
After you imported libs, somewhere in your component's code:
```javascript
<Accordion>
    <span>Some content</span>
</Accordion>

```

## props/options

#### isOpen
If passed Accordion will render expanded
```javascript
<Accordion isOpen />
```

#### onToggle

onToggle will fire after Accordion expands/collapses with boolean value passed in which will indicated if Accordion is open or closed (true, false)
```javascript
<Accordion onToggle={isOpen => console.log('Is Accordion open?:', isOpen) } /> // if expanded true will be passed
```

#### title

If passed title will be displayed
```javascript
<Accordion title='Some title' />
```

#### headerClass/contentWrapperClass

If passed classes will be added to header div and content wrapper div, respectfully. (e.g. 'Accordion__header ' + this.props.headerClass)

```javascript
<Accordion title='Some title' />
```