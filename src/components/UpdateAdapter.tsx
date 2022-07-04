
import firebase from "firebase/compat"
import { storage } from "../utils/demo/firebase"


class UploadAdapter {
    loader: any

    constructor(loader : any) {
        this.loader = loader
    }
    upload() {
        return this.loader.file.then(
            (file : any) =>
                new Promise((resolve, reject) => {
                    let uploadTask = storage.ref()
                        .child(`images/${file.name}`)
                        .put(file)
                    uploadTask.on(
                        firebase.storage.TaskEvent.STATE_CHANGED,
                        (snapshot) => {},
                        (error) => {},
                        () => {
                            // upload successful
                            uploadTask.snapshot.ref
                                .getDownloadURL()
                                .then((downloadURL) => {
                                    resolve({
                                        default: downloadURL
                                    })
                                })
                        }
                    )
                })
        )
    }
}

export default UploadAdapter