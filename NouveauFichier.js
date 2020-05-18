import React, {Component} from 'react'
import FileUploader from 'react-firebase-file-uploader';
import firebase from 'firebase'

class NouveauFichier extends Component {
    state = {
        titre:'',
        description:'',
        image:'',
        imageURL:'',
        progress: 0,

    }
handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value

    })
}
handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
}
handleUploadStart =() => {
    this.setState({
        progress: 0
    })
}

handleUploadSuccess = filename => {
    this.setState({
        image: filename,
        progress: 100
    })

    firebase.storage().ref('docs').child(filename).getDownloadURL()
    .then(url => this.setState({
        imageURL: url

    }))
}

    render() {
        console.log(this.state)
        return(

            <div>
                <title>
                    <p>Selectionner un nouveau fichier</p>
            
                    </title>
                <FileUploader
                
                accept="image/document"
                name= 'image'
                storageRef={firebase.storage().ref('docs')}
                onUploadStart={this.handleUploadStart}
                onUploadSuccess={this.handleUploadSuccess}></FileUploader>




            </div>
            
            
        
            
        )
    }
}
export default NouveauFichier
