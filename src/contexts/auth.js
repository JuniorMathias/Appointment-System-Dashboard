
import { useState, createContext, useEffect } from "react";
import firebase from '../services/firebaseConnection';
import { toast } from "react-toastify";

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

    async function signIn(email, password) {
        setLoadingAuth(true);

        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then(async (value)=>{
            let uid = value.user.uid;

            const userProfile = await firebase.firestore().collection('users')
            .doc(uid).get();

            let data = {
                uid: uid,
                name: userProfile.data().name,
                avatarUrl: userProfile.data().avatarUrl,
                email: value.user.email
            };

            setUser(data);
            storageUser(data);
            setLoadingAuth(false);
            toast.success('Welcome Back');

        })
        .catch((error)=>{
            toast.error('Ops something went wrong');
            setLoadingAuth(false);
        })
        
    }

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
                toast.success('Welcome to Dashboard System');
            })
        })
        .catch((error)=> {
            toast.error('Ops something went wrong');
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
            signOut,
            signIn,
            loadingAuth
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;