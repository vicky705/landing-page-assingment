import React, { useRef, useState } from 'react'
import {useFormik} from 'formik'
import validationSchema from './Schema/formschema'

const Contactus = () => {
    const fileFiled = useRef()
    const [file, setFile] = useState(null)
    const onClickFileSele = () => {
        fileFiled.current.click()
    }

    const onChangeFile = (event) => {
        const fileValue = event.target.files[0]
        setFile(fileValue)
    }

    const initail = {
        "first_name" : "",
        "last_name" : "",
        "email" : "",
        "phone" : "",
        "address" : "",
        "dob" : "",
        "bio" : ""
    }


    const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues : initail,
        validationSchema : validationSchema,
        onSubmit : (values) => {
            console.log(values)
        }
    }) 

    

  return (
    <div className='contact container-fluid'>
        <div className="container">
            <h1 className='heading'>Get In Touch</h1>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <input type='text' className='form-control mt-3' value={values.first_name} name='first_name'
                        placeholder='Enter First Name' onChange={handleChange} onBlur={handleBlur}/>
                        {errors.first_name && touched.first_name && <p className='error'>{errors.first_name}</p>}
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <input type='text' className='form-control mt-3' name="last_name" value={values.last_name} placeholder='Enter Last Name' onChange={handleChange} onBlur={handleBlur}/>
                        {errors.last_name && touched.last_name && <p className='error'>{errors.last_name}</p>}
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <input type='email' className='form-control mt-3' name='email' value={values.email} placeholder='Enter Email' onChange={handleChange} onBlur={handleBlur}/>
                        {errors.email && touched.email && <p className='error'>{errors.email}</p>}
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <input type='tel' className='form-control mt-3' name="phone" value={values.phone}
                        minLength={10}
                        maxLength={10} placeholder='Enter Mobile' onChange={handleChange} onBlur={handleBlur}/>
                        {errors.phone && touched.phone && <p className='error'>{errors.phone}</p>}
                    </div>
                    <div className="col-12">
                        <textarea className='form-control mt-3' rows={5} name='address' placeholder='Address' onChange={handleChange} onBlur={handleBlur}>
                            {values.address}
                        </textarea>
                        {errors.address && touched.address && <p className='error'>{errors.address}</p>}
                    </div>
                    <div className="col-lg-6 col-mg-6 col-sm-12 col-12">
                        <label className='mt-3'>Select DOB:</label>
                        <input type='date' className='form-control' name='dob' value={values.dob} onChange={handleChange} onBlur={handleBlur}/>
                        {errors.dob && touched.dob && <p className='error'>{errors.dob}</p>}
                    </div>
                    <div className="col-lg-6 col-mg-6 col-sm-12 col-12">
                        <label className='mt-3'>Bio:</label>
                        <textarea className='form-control' row={3} name='bio' placeholder='Enter Your Bio here' onChange={handleChange} onBlur={handleBlur}>
                            {values.bio}
                        </textarea>
                        {errors.bio && touched.bio && <p className='error'>{errors.bio}</p>}
                    </div>
                    <div className="col-12 d-flex" style={{gap: "20px", alignItems : "center"}}>
                        <p style={{cursor:"pointer", marginBottom: "0px"}} className='btn btn-info' onClick={onClickFileSele}>Select Profile</p>
                        {file && file.name && <p className='fileName' style={{marginBottom: "0px"}}>{file.name}</p>}
                        <input type='file' name='file' ref={fileFiled} className='d-none' onChange={e => onChangeFile(e)}/>
                    </div>
                    <div className="col-12">
                        <button type='submit' className='btn btn-primary mt-3'>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contactus
