- 'Yup' object schemaValidator installed

* spread-operator
* ternary-operator
* arrow function
* events => onchange, onSubmit, onBlur

###### Reducing the boiler-plate

```javascript
 onChange={formik.handleChange}
 onBlur={formik.handleBlur}
 value={formik.values.name}
```

the above code can be replaced by

```javascript
{...formik.getFieldProps("Field-name")}
```

###### Formik Components

- Formik
- Form
- Field
- ErrorMessage

* 'as' prop can also be written as 'component' for 'type' of input-tag in html written in React/Formik
