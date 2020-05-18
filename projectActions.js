import { firestore } from "firebase";
import projectReducer from "../reducers/projectReducer";

export const NouveauFichier = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore})=> {
        //make async call to database
        const getfirestore= getFirestore();
        firestore.collection('Fichiers').add({
            ...project ,
            Contenu: 'freeFire',
            Titre: 'un jeu pour enfant',
            createdAt: new Date()
        }).then(()=> {
            dispatch({type: 'NouveauFichier', project});
        }).catch((err) => {
            dispatch({type: 'NouveauFichier-ERROR', err});


        })
            

        
    }
};