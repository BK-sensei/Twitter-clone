import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext';
import { useFormik } from 'formik';
// import { useParams } from 'react-router-dom';

const EditProfile = () => {
    const { user, setUser } = useContext(UserContext)

    const formik = useFormik({
        initialValues: {
            name: user.name,
            bio: user.bio,
            location: user.location,
            website: user.location
        },
        // onSubmit:(values, { resetForm }) =>{
        //     setUser(values)
        //     .then(response => {
        //         setUser(response)
        //         resetForm()
        //     })
        // }
        onSubmit:(values) =>{ 
            console.log(values);
            edit(values)
        }
    })

    const edit = async values => {
        console.log("edit");
        const editProfile = await fetch(`http://localhost:5000/users/${user._id}`, {
          method: 'put',
          headers: {
            'Content-type': 'application/json'
          },
          credentials: 'include',
          body: JSON.stringify({
            values
          })
        })
        const res = editProfile.json()
        console.log(res);
    }

    return (
        <>
            {/* <div className='d-flex justify-content-between align-items-center ms-4'>
                <h3>Éditer le profil</h3>
                <button 
                    type="button" 
                    class="btn rounded-pill btn-dark"
                    onSubmit={edit}
                >Enregistrer
                </button>
            </div> */}
            <div>
                <form className='d-flex flex-column' onSubmit={formik.handleSubmit}>
                    <div className='d-flex justify-content-between align-items-center ms-4'>
                        <h3>Éditer le profil</h3>
                        <button 
                            type="button" 
                            class="btn rounded-pill btn-dark"
                        >Enregistrer
                        </button>
                    </div>
                    <div className='mb-3 border border-secondary rounded mt-4 p-2'>
                        <p>Nom</p>
                        <input 
                            type="text"
                            name="name"
                            className='border-0 form-control'
                            value={formik.values.name}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className='mb-3 border border-secondary rounded p-2'>
                        <p>Bio</p>
                        <input 
                            type="text"
                            name="bio"
                            className='border-0 form-control'
                            value={formik.values.bio}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className='mb-3 border border-secondary rounded p-2'>
                        <p>Localisation</p>
                        <input 
                            type="text"
                            name="location"
                            className='border-0 form-control'
                            value={formik.values.location}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className='mb-3 border border-secondary rounded p-2'>
                        <p>Site Web</p>
                        <input 
                            type="text"
                            name="website"
                            className='border-0 form-control'
                            value={formik.values.website}
                            onChange={formik.handleChange}
                        />
                    </div>
                </form>
            </div>
        </>
    );
};

export default EditProfile;