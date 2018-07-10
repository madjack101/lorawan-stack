// Copyright © 2018 The Things Network Foundation, The Things Industries B.V.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React from 'react'
import { storiesOf } from '@storybook/react'

import Field from '.'

storiesOf('Field', module)
  .add('Default', () => (
    <Field
      title="Foo"
      name="foo"
      description="Foo is a required field"
      required
      form={false}
    />
  ))
  .add('Number', () => (
    <Field
      title="Foo"
      name="foo"
      description="Foo is a field containing a number"
      type="number"
      form={false}
    />
  ))
  .add('Boolean', () => (
    <Field
      type="checkbox"
      name="foo"
      title="Foo"
      description="Foo field."
      form={false}
    />
  ))
  .add('Error', () => (
    <Field
      name="email"
      title="Email Address"
      description="Your email address"
      value="foo?@bar.com"
      type="text"
      error="Invalid email address"
      touched
      form={false}
    />
  ))
  .add('Boolean Error', () => (
    <Field
      type="checkbox"
      name="foo"
      title="Foo"
      description="Foo field."
      error="Are you sure?"
      touched
      form={false}
    />
  ))
  .add('Warning', () => (
    <Field
      name="password"
      title="Password"
      description="Create a new password."
      value="123456"
      type="password"
      warning="Insecure password"
      touched
      form={false}
    />
  ))