import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext';
import { ModalContext } from '../Context/ModalContext';
import { useFormik } from 'formik';
// import { useParams } from 'react-router-dom';

const EditProfile = () => {
    const { user, setUser } = useContext(UserContext)
    const { setVisible } = useContext(ModalContext)

    const formik = useFormik({
        initialValues: {
            name: user.name,
            bio: user.bio,
            location: user.location,
            website: user.location
        },
        onSubmit:(values) =>{ 
            // console.log("values ",values);
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
            ...values
          })
        })
        const profileEdited = await editProfile.json()
        setUser(profileEdited) // mise à jour des valeurs de l'user
        setVisible(false) // fermeture de la modal lorsqu'on enregistre les modifications
    }

    return (
        <>
            <div>
                <form className='d-flex flex-column' onSubmit={formik.handleSubmit}>
                    <div className='d-flex justify-content-between align-items-center ms-4'>
                        <h3>Éditer le profil</h3>
                        <button 
                            type="submit" 
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