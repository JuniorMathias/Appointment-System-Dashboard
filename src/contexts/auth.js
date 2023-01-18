
import { useState, createContext, useEffect } from "react";
import firebase from '../services/firebaseConnection';


export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    
    useEffect(()=>{
        function loadStorage() {
            const storageUser = localStorage.getItem('UserSystem');
            if(storageUser) {
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }
            setLoading(false);
        }
        loadStorage();
    }, [])
    async function signUp(email, password, name) {
        setLoadingAuth(true);
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( async (value)=> {
            let uid = value.user.uid;

            //these line below will create in firebase the values
            await firebase.firestore().collection('users')
            .doc(uid).set({
                name: name,
                avaterUrl: null,
            })
            .then( ()=> {
                let data = {
                    uid: uid,
                    name: name,
                    email: value.user.email,
                    avatarUrl: null
                };
                setUser(data);
                storageUser(data);
                setLoadingAuth(false);
            })
        })
        .catch((error)=> {
            console.log(error);
            setLoadingAuth(false);
        })
    }

    function storageUser(data){
        localStorage.getItem('UserSystem', JSON.stringify(data));
    }
    //first get the local storage and remove from userSystem and then set up setUser for null again like the begin
    async function signOut(){
        await firebase.auth().signOut();
        localStorage.removeItem('UserSystem');
        setUser(null);
      }
    return(
        //this is where sends the auth provider/functinos with the values to route to know if the user is logged in or not also signIn and UP
        <AuthContext.Provider 
        value={{ 
            signed: !!user,  
            user, 
            loading, 
            signUp,
            signOut
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;