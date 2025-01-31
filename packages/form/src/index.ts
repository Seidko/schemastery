import { App, Component } from 'vue'
import { useEntries, useModel } from './utils'
import SchemaBase from './base.vue'
import Primitive from './primitive.vue'
import SchemaBitset from './extensions/bitset.vue'
import SchemaGroup from './extensions/group.vue'
import SchemaIntersect from './extensions/intersect.vue'
import SchemaObject from './extensions/object.vue'
import SchemaRadio from './extensions/radio.vue'
import SchemaTable from './extensions/table.vue'
import SchemaTextarea from './extensions/textarea.vue'
import SchemaTuple from './extensions/tuple.vue'
import SchemaUnion from './extensions/union.vue'
import KSchema from './schema.vue'
import KForm from './form.vue'

export * from 'cosmokit'

export { Primitive }
export { Schema, useI18nText } from './utils'

export * from './icons'

export const form = Object.assign(SchemaBase, {
  useModel,
  useEntries,
  extensions: new Set(),
  install(app: App) {
    app.component('k-form', KForm)
    app.component('k-schema', KSchema)
  },
}) as typeof SchemaBase & {
  useModel: typeof useModel
  useEntries: typeof useEntries
  extensions: Set<form.Extension>
  install: (app: App) => void
}

export namespace form {
  export interface Extension {
    type: string
    role?: string
    validate?: (value: any, schema: any) => boolean
    component: Component
  }
}

form.extensions.add({
  type: 'bitset',
  component: SchemaBitset,
  validate: value => typeof value === 'number',
})

form.extensions.add({
  type: 'array',
  component: SchemaGroup,
  validate: value => Array.isArray(value),
})

form.extensions.add({
  type: 'dict',
  component: SchemaGroup,
  validate: value => typeof value === 'object',
})

form.extensions.add({
  type: 'object',
  component: SchemaObject,
  validate: value => typeof value === 'object',
})

form.extensions.add({
  type: 'intersect',
  component: SchemaIntersect,
  validate: value => typeof value === 'object',
})

form.extensions.add({
  type: 'union',
  role: 'radio',
  component: SchemaRadio,
})

form.extensions.add({
  type: 'array',
  role: 'table',
  component: SchemaTable,
  validate: value => Array.isArray(value),
})

form.extensions.add({
  type: 'dict',
  role: 'table',
  component: SchemaTable,
  validate: value => typeof value === 'object',
})

form.extensions.add({
  type: 'string',
  role: 'textarea',
  component: SchemaTextarea,
  validate: value => typeof value === 'string',
})

form.extensions.add({
  type: 'tuple',
  component: SchemaTuple,
  validate: value => Array.isArray(value),
})

form.extensions.add({
  type: 'union',
  component: SchemaUnion,
})

export default form
