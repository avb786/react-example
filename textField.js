import { useField, ErrorMessage } from 'formik'
import React from 'react'
export default function TextField({label, ...props}) {
    const [field, meta] = useField(props)
    // console.log(field, meta);
    return (
        <div className="mb-2">
            <label htmlFor={field.name}>{label}</label>
            <input {...field} {...props} className={`form-control ${meta.error && meta.touched && 'is-invalid'}`} autoComplete="off"  />
            <ErrorMessage component="small" name={field.name} className="text-danger" />
        </div>
    )
}
