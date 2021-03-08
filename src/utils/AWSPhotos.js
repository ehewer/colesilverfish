import React, { useEffect, useState } from "react"
import { API, Storage } from "aws-amplify"
import { listPhotos } from "../graphql/queries"
import { createPhoto as createPhotoMutation,
    // updatePhoto as updatePhotoMutation,
    deletePhoto as deletePhotoMutation } from  "../graphql/mutations"

function AWSPhotos () {
    const initialFormState = { name: "", altText: "", camera: "" }
    const [photos, setPhotos] = useState([]);
    const [formData, setFormData] = useState(initialFormState);

    useEffect(() => {
        this.fetchPhotos();
    }, []);

    this.fetchPhotos = async function () {
        const apiData = await API.graphql({ query: listPhotos });
        const photosFromAPI = apiData.data.listPhotos.items;
        await Promise.all(photosFromAPI.map(async photo => {
            const image = await Storage.get(photo.image);
            photo.image = image;
            return photo;
        }));
        setPhotos(apiData.data.listPhotos.items);
    }

    this.createPhoto = async function () {
        if (!formData.name || !formData.image) {
            return;
        }
        await API.graphql({query: createPhotoMutation, variables: { input: formData } });

        const image = await Storage.get(formData.image);
        formData.image = image;

        setPhotos([ ...photos, formData]);
        setFormData(initialFormState);
    }

    this.deletePhoto = async function ({ id }) {
        const newPhotosArray = photos.filter(photo => photo.id !== id);
        setPhotos(newPhotosArray);
        await API.graphql({ query: deletePhotoMutation, variables: { input: { id } } });
    }

    this.onChange = async function (e) {
        if (!e.target.files[0]) {
            return;
        }
        const file = e.target.files[0];
        setFormData({ ...formData, image: file.name});
        await Storage.put(file.name, file);
        fetchPhotos();
    }

}

module.exports = AWSPhotos