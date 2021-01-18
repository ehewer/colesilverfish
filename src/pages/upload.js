import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import { API, Storage } from "aws-amplify";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listPhotos } from "../graphql/queries"
import { createPhoto as createPhotoMutation,
          // updatePhoto as updatePhotoMutation,
          deletePhoto as deletePhotoMutation } from  "../graphql/mutations"


// components
import Menu from "../components/menu"
import Img from "gatsby-image"

const initialFormState = { name: "", altText: "", camera: "" }

const Upload = () => {
    const [photos, setPhotos] = useState([]);
    const [formData, setFormData] = useState(initialFormState);

    useEffect(() => {
        fetchPhotos();
    }, []);

    async function fetchPhotos() {
        const apiData = await API.graphql({ query: listPhotos });
        const photosFromAPI = apiData.data.listPhotos.items;
        await Promise.all(photosFromAPI.map(async photo => {
            const image = await Storage.get(photo.image);
            photo.image = image;
            return photo;
        }));
        setPhotos(apiData.data.listPhotos.items);
    }

    async function createPhoto() {
        if (!formData.name || !formData.image) {
            return;
        }
        await API.graphql({query: createPhotoMutation, variables: { input: formData } });

        const image = await Storage.get(formData.image);
        formData.image = image;

        setPhotos([ ...photos, formData]);
        setFormData(initialFormState);
    }

    async function deletePhoto({ id }) {
        const newPhotosArray = photos.filter(photo => photo.id !== id);
        setPhotos(newPhotosArray);
        await API.graphql({ query: deletePhotoMutation, variables: { input: { id } } });
    }

    async function onChange(e) {
        if (!e.target.files[0]) {
            return;
        }
        const file = e.target.files[0];
        setFormData({ ...formData, image: file.name});
        await Storage.put(file.name, file);
        fetchPhotos();
    }

    return(
        <div>
            <Menu>
                <h3>Upload</h3>
                <input
                    onChange={e => setFormData({ ...formData, 'name': e.target.value})}
                    placeholder="Photo name"
                    value={formData.name}
                />
                <input
                    onChange={e => setFormData({ ...formData, 'altText': e.target.value})}
                    placeholder="Photo alt. text"
                    value={formData.altText}
                />
                <input
                    onChange={e => setFormData({ ...formData, 'camera': e.target.value})}
                    placeholder="Camera model"
                    value={formData.camera}
                />
                <input
                    type="file"
                    onChange={onChange}
                />
                <button onClick={createPhoto}>Create Photo</button>
                <div style={{margin: 30}}>

                </div>
                <div style={{marginBottom: 30}}>
                    {
                    photos.map(photo => (
                        <div key={photo.id || photo.name}>
                            <h3>"{photo.name}"</h3>
                            <p>Camera: {photo.camera}</p>
                            <img src={photo.image} alt={photo.altText}/>
                            <button onClick={() => deletePhoto(photo)}>Delete photo</button>
                        </div>
                    ))
                    }
                </div>
                <AmplifySignOut/>
            </Menu>
        </div>
    );
}

export default withAuthenticator(Upload);