# Usage in your project

helping-js works in Node (CJS and ESM), Express, Vite, Vue, React, Next.js, Create React App, and other bundlers. No extra config — install and import. Below are multiple examples per stack.

---

## Node (CommonJS)

### Basic imports

```javascript
const { isString, isNumber, isArray } = require('helping-js/core/types');
const { RX_EMAIL, RX_URL } = require('helping-js/core/regex');
const { validate } = require('helping-js/core/validate');
```

### Using type checkers

```javascript
const { isString, isPlainObject } = require('helping-js/core/types');

if (isString(input)) {
  console.log('Input is a string');
}
if (isPlainObject(config)) {
  console.log('Config is a plain object');
}
```

### Using validate in Node (CJS)

```javascript
const { validate } = require('helping-js/core/validate');
const { RX_EMAIL } = require('helping-js/core/regex');
const { isNumber } = require('helping-js/core/types');

const result = validate(
  { email: 'user@example.com', age: 25 },
  { email: RX_EMAIL, age: isNumber }
);
if (!result.valid) console.log('Errors:', result.errors);
```

### Using regex only

```javascript
const { RX_EMAIL, RX_PHONE } = require('helping-js/core/regex');

if (RX_EMAIL.test(email)) console.log('Valid email');
if (RX_PHONE.test(phone)) console.log('Valid phone');
```

---

## Node (ESM)

Use `"type": "module"` in your `package.json` or use the `.mjs` extension.

### Basic imports

```javascript
import { isString, isNumber } from 'helping-js/core/types';
import { RX_EMAIL, RX_URL } from 'helping-js/core/regex';
import { validate } from 'helping-js/core/validate';
```

### Using the form preset (one import)

```javascript
import { validate, RX_EMAIL, isNumber, isString } from 'helping-js/preset/form';

const result = validate(
  { email: 'a@b.co', age: 30 },
  { email: RX_EMAIL, age: isNumber }
);
```

### Type checkers + regex

```javascript
import { isNumeric, isEmptyString } from 'helping-js/core/types';
import { RX_UUID } from 'helping-js/core/regex';

if (isNumeric(str)) console.log('Numeric string');
if (!isEmptyString(name) && RX_UUID.test(id)) console.log('Valid UUID');
```

---

## Express

### In a route (CJS)

```javascript
const express = require('express');
const { validate } = require('helping-js/core/validate');
const { RX_EMAIL } = require('helping-js/core/regex');
const { isString } = require('helping-js/core/types');

const app = express();
app.use(express.json());

app.post('/users', (req, res) => {
  const result = validate(req.body, {
    email: RX_EMAIL,
    name: isString,
  });
  if (!result.valid) {
    return res.status(400).json({ errors: result.errors });
  }
  // create user...
});
```

### In a route (ESM)

```javascript
import express from 'express';
import { validate, RX_EMAIL, isString } from 'helping-js/preset/form';

const app = express();
app.use(express.json());

app.post('/api/contact', (req, res) => {
  const result = validate(req.body, {
    email: RX_EMAIL,
    message: isString,
  });
  if (!result.valid) return res.status(400).json(result.errors);
  res.json({ ok: true });
});
```

### Middleware example (CJS)

```javascript
const { validate } = require('helping-js/core/validate');
const { RX_EMAIL } = require('helping-js/core/regex');
const { isString } = require('helping-js/core/types');

const validateBody = (rules) => (req, res, next) => {
  const result = validate(req.body || {}, rules);
  if (!result.valid) return res.status(400).json({ errors: result.errors });
  next();
};

app.post('/login', validateBody({ email: RX_EMAIL }), (req, res) => {
  // req.body.email is valid
});
```

### Using types for query/params

```javascript
const { isNumeric, isString } = require('helping-js/core/types');

app.get('/users/:id', (req, res) => {
  if (!isNumeric(req.params.id)) {
    return res.status(400).send('Invalid id');
  }
  // ...
});
```

---

## Vue 3

### Composition API – types and regex

```javascript
<script setup>
import { ref, computed } from 'vue';
import { isString, isNumber } from 'helping-js/core/types';
import { RX_EMAIL } from 'helping-js/core/regex';

const email = ref('');
const age = ref('');

const isEmailValid = computed(() => isString(email.value) && RX_EMAIL.test(email.value));
const isAgeValid = computed(() => isNumber(age.value) || (isString(age.value) && /^\d+$/.test(age.value)));
</script>
```

### Composition API – validate on submit

```javascript
<script setup>
import { ref, reactive } from 'vue';
import { validate, RX_EMAIL, isNumber } from 'helping-js/preset/form';

const form = reactive({ email: '', age: null });
const errors = ref({});

function onSubmit() {
  const result = validate(form, { email: RX_EMAIL, age: isNumber });
  errors.value = result.errors;
  if (result.valid) {
    // submit
  }
}
</script>
```

### Options API – type checkers

```javascript
<script>
import { isString, isArray } from 'helping-js/core/types';

export default {
  data() {
    return { items: [] };
  },
  methods: {
    add(item) {
      if (!isString(item)) return;
      if (!isArray(this.items)) this.items = [];
      this.items.push(item);
    },
  },
};
</script>
```

### Vue 3 + script setup – full form example

```javascript
<script setup>
import { reactive, ref } from 'vue';
import { validate, RX_EMAIL, RX_PHONE, isString } from 'helping-js/preset/form';

const form = reactive({ email: '', phone: '', name: '' });
const errors = ref({});

const rules = {
  email: RX_EMAIL,
  phone: RX_PHONE,
  name: (v) => isString(v) && v.length >= 2,
};

function submit() {
  const result = validate(form, rules);
  errors.value = result.errors;
  if (result.valid) console.log('Submit', form);
}
</script>

<template>
  <form @submit.prevent="submit">
    <input v-model="form.name" placeholder="Name" />
    <span v-if="errors.name">Invalid name</span>
    <input v-model="form.email" type="email" placeholder="Email" />
    <span v-if="errors.email">Invalid email</span>
    <input v-model="form.phone" placeholder="Phone" />
    <span v-if="errors.phone">Invalid phone</span>
    <button type="submit">Submit</button>
  </form>
</template>
```

---

## React

### Hooks – type checkers

```javascript
import { useState } from 'react';
import { isString, isNumber } from 'helping-js/core/types';

function useInput(initial) {
  const [value, setValue] = useState(initial);
  const isValid = isString(value) && value.trim().length > 0;
  return [value, setValue, isValid];
}
```

### Hooks – validate on submit

```javascript
import { useState } from 'react';
import { validate, RX_EMAIL, isNumber } from 'helping-js/preset/form';

function ContactForm() {
  const [form, setForm] = useState({ email: '', age: '' });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = validate(form, { email: RX_EMAIL, age: isNumber });
    setErrors(result.errors);
    if (result.valid) {
      // submit
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={form.email}
        onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
      />
      {errors.email && <span>Invalid email</span>}
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Class component – regex and types

```javascript
import { Component } from 'react';
import { RX_EMAIL } from 'helping-js/core/regex';
import { isString } from 'helping-js/core/types';

class MyForm extends Component {
  state = { email: '' };

  isValid = () => isString(this.state.email) && RX_EMAIL.test(this.state.email);

  render() {
    return (
      <input
        value={this.state.email}
        onChange={(e) => this.setState({ email: e.target.value })}
      />
    );
  }
}
```

### React – full form with validate

```javascript
import { useState } from 'react';
import { validate, RX_EMAIL, RX_PHONE, isString } from 'helping-js/preset/form';

export function SignupForm() {
  const [form, setForm] = useState({ email: '', phone: '', name: '' });
  const [errors, setErrors] = useState({});

  const rules = {
    email: RX_EMAIL,
    phone: RX_PHONE,
    name: (v) => isString(v) && v.length >= 2,
  };

  function handleSubmit(e) {
    e.preventDefault();
    const result = validate(form, rules);
    setErrors(result.errors);
    if (result.valid) alert('Submitted');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={form.name}
        onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
        placeholder="Name"
      />
      {errors.name && <span>Invalid name</span>}
      <input
        value={form.email}
        onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
        type="email"
        placeholder="Email"
      />
      {errors.email && <span>Invalid email</span>}
      <input
        value={form.phone}
        onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))}
        placeholder="Phone"
      />
      {errors.phone && <span>Invalid phone</span>}
      <button type="submit">Sign up</button>
    </form>
  );
}
```

---

## Vite

### Vanilla JS (ESM)

```javascript
import { isString } from 'helping-js/core/types';
import { RX_EMAIL } from 'helping-js/core/regex';
import { validate } from 'helping-js/core/validate';
```

### Vue + Vite (script setup)

```javascript
import { validate, RX_EMAIL, isNumber } from 'helping-js/preset/form';
```

### React + Vite

```javascript
import { validate, RX_EMAIL, isNumber } from 'helping-js/preset/form';
```

---

## Next.js

Works in both client and server components; same ESM imports.

### Server action / API route

```javascript
import { validate, RX_EMAIL, isString } from 'helping-js/preset/form';

export async function POST(request) {
  const body = await request.json();
  const result = validate(body, { email: RX_EMAIL, name: isString });
  if (!result.valid) {
    return Response.json({ errors: result.errors }, { status: 400 });
  }
  return Response.json({ ok: true });
}
```

### Client component (React)

```javascript
'use client';
import { useState } from 'react';
import { validate, RX_EMAIL } from 'helping-js/preset/form';

export default function ContactPage() {
  const [form, setForm] = useState({ email: '' });
  const [errors, setErrors] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    const result = validate(form, { email: RX_EMAIL });
    setErrors(result.errors);
    if (result.valid) fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) });
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={form.email}
        onChange={(e) => setForm({ email: e.target.value })}
      />
      {errors.email && <span>Invalid email</span>}
      <button type="submit">Send</button>
    </form>
  );
}
```

---

## Create React App

### Functional component

```javascript
import { validate, RX_EMAIL, isNumber } from 'helping-js/preset/form';
```

### With types only

```javascript
import { isString, isArray } from 'helping-js/core/types';
```

### With regex only

```javascript
import { RX_EMAIL, RX_URL } from 'helping-js/core/regex';
```

---

## CDN (browser ESM)

For browser-only usage without a bundler. Pin a version in production (e.g. `helping-js@2`).

### Types and regex

```javascript
import { isString } from 'https://unpkg.com/helping-js/core/types.js';
import { RX_EMAIL } from 'https://unpkg.com/helping-js/core/regex.js';
```

### Form preset (validate + rules)

```javascript
import { validate, RX_EMAIL, isNumber } from 'https://unpkg.com/helping-js/preset/form.js';

const result = validate(
  { email: 'user@example.com', age: 25 },
  { email: RX_EMAIL, age: isNumber }
);
```
