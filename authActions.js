export const connexion = (Credentials) => {
    return(dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            Credentials.email,
            Credentials.password
        ).then(()=> {
            dispatch({ type: 'LOGIN_SUCCESS'});
        }).catch((err)=> {
            dispatch({ type: 'LOGIN_ERROR', err});
        });
    }
}
    export const Déconnexion = () => {
        return(dispatch, getState, {getFirebase}) => {
            const firebase= getFirebase();
            firebase.auth().signOut().then(()=> {
                dispatch({type: 'SIGNOUT_SUCCESS'});
            });
        }

    }

    export const SignUp = (newUser) => {
        return( dispatch, getState, {getFirebase, getFirestore}) => {
            const firebase = getFirebase();
            const firestore = getFirestore();

            firebase.auth().createUserWithEmailAndPassword(
                newUser.email,
                newUser.password
            ).then((resp) => {
                return firestore.collection('users').doc(resp.user.uid).set({
                    firstname: newUser.firstname,
                    lastname: newUser.lastname,
                    initials: newUser.firstname[0] + newUser.lastname[0]
                })

            }).then(()=> {
                dispatch({ type: 'SIGNUP_SUCCESS'})
            }).catch(err=>{
                dispatch({ type: 'SIGNUP_ERROR', err})
            })
        
            
        }
    }
