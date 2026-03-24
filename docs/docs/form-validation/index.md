---
title: Form validation
description: helping-js validate() — schema-style form validation with RegExp or functions. Vue and React examples. No dependencies.
---
# Form validation

Validate form data with `validate(obj, rules)` — no validator.js, no extra dependencies. Rules can be a **RegExp** (tests `String(value)`) or a **function** `(value) => boolean`.

## Result shape

- **Valid:** `{ valid: true, errors: {} }`
- **Invalid:** `{ valid: false, errors: { fieldName: false, ... } }` for each field that failed.

## Basic usage

```javascript
import { validate, RX_EMAIL, isNumber } from 'helping-js/preset/form';

const result = validate(
  { email: 'user@example.com', age: 25 },
  { email: RX_EMAIL, age: isNumber }
);
if (!result.valid) {
  console.log('Errors:', result.errors); // e.g. { age: false }
}
```

Or use subpaths and build your own rules:

```javascript
import { validate } from 'helping-js/core/validate';
import { RX_EMAIL, RX_PHONE } from 'helping-js/core/regex';
import { isString, isNumber } from 'helping-js/core/types';

const result = validate(
  { email, phone, age },
  { email: RX_EMAIL, phone: RX_PHONE, age: isNumber }
);
```

**Preset:** `helping-js/preset/form` re-exports `validate`, `isString`, `isNumber`, `isNumeric`, `isUndefinedOrNull`, `isEmptyString`, and `RX_EMAIL`, `RX_URL`, `RX_PHONE` so you can import everything for forms in one line.

---

## Vue 3 example

Simple form: refs for inputs, `validate(formData, rules)` on submit, display errors.

```vue
<template>
  <form @submit.prevent="onSubmit">
    <input v-model="form.email" type="email" placeholder="Email" />
    <span v-if="errors.email">Invalid email</span>
    <input v-model.number="form.age" type="number" placeholder="Age" />
    <span v-if="errors.age">Invalid age</span>
    <button type="submit">Submit</button>
  </form>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { validate, RX_EMAIL, isNumber } from 'helping-js/preset/form';

const form = reactive({ email: '', age: null });
const errors = ref({});

const rules = { email: RX_EMAIL, age: isNumber };

function onSubmit() {
  const result = validate(form, rules);
  errors.value = result.errors;
  if (result.valid) {
    // submit form
  }
}
</script>
```

---

## React example

Simple form: `useState` for form data and errors, `validate(formData, rules)` on submit.

```jsx
import { useState } from 'react';
import { validate, RX_EMAIL, isNumber } from 'helping-js/preset/form';

export function MyForm() {
  const [form, setForm] = useState({ email: '', age: '' });
  const [errors, setErrors] = useState({});

  const rules = { email: RX_EMAIL, age: isNumber };

  function onSubmit(e) {
    e.preventDefault();
    const result = validate(form, rules);
    setErrors(result.errors);
    if (result.valid) {
      // submit form
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        value={form.email}
        onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
        type="email"
        placeholder="Email"
      />
      {errors.email && <span>Invalid email</span>}
      <input
        value={form.age}
        onChange={(e) => setForm((s) => ({ ...s, age: e.target.value }))}
        type="number"
        placeholder="Age"
      />
      {errors.age && <span>Invalid age</span>}
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## Rule types

| Rule            | How it’s used |
|----------------|----------------|
| `RegExp`       | `rule.test(String(value))` |
| `(value) => boolean` | `rule(value)` must return `true` to pass |

Use `helping-js/core/types` (e.g. `isString`, `isNumber`, `isNumeric`) or `helping-js/core/regex` (e.g. `RX_EMAIL`, `RX_PHONE`) as rules, or pass your own functions/RegExps.
