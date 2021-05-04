# quasar-q-select-group

Multi-select component with option groups for the Quasar Framework (Vue.js)

# Installation

`npm i --save q-select-group`

# Usage

```
import QSelectGroup from "q-select-group";
...
 components: {
    QSelectGroup,
  },
...
<q-select-group
    :model="value"
    @update:model="(v) => $emit('input', v)"
    v-bind="$attrs"
    v-on="$listeners"
    :string-options="options"
  />
```

This component accept all attributes, listeners accepted by Quasar's QSelect component.

Props:
options: Array of list
model: it is the input value. (can also use model.sync)
multiple: Boolean, specifies whether component accepts multiple values
disabled: Boolean, specifies whether component is disabled

# Publish

## Add user to npm
`npm adduser`

## Login and verify
`npm login`

## Publish
`npm run build`
`npm publish`