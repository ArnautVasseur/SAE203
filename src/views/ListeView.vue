<template>
    <div>
        <h1>Liste Artistes Synchro</h1>
        <form>
            <div>
            <input type="text" class="border-2" v-model='nom' required />
            <button type="button" @click='createArtistes()' title="Création">
                Create
            </button>
            </div>
        </form>
            <input type="text" v-model="filter" class="border-2"/>
            <button type="button"  title="Filtrage">
                filtrage
            </button>   
        <form v-for="artistes in filterByName" :key="artistes.id">
            <img :src="artistes.image" alt="image" class="w-32 h-32">
            <div>
                <input type="text" v-model='artistes.nom' required class="mt-2 border-2"/>
                <button type="button" class="mx-2" @click="updateArtistes(artistes)" title="Modification">
                Modify
                </button>
                <button type="button" @click="deleteArtistes(artistes)" title="Suppression">
                Delete
                </button>
            </div>
        </form>
    </div>
    <div>

    </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js'

import { 
    getFirestore, 
    collection, 
    doc, 
    getDocs, 
    addDoc, 
    updateDoc, 
    deleteDoc, 
    onSnapshot } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'


    export default {   
        data(){
            return{                
                user:{         
                    email:null,
                    password:null
                },
                message:null, 
                nom:null, 
                listeArtistesSynchro:[] ,
                filter:''
            }
        },
          computed:{
            orderByName:function(){
            return this.listeArtistesSynchro.sort(function(a,b){
                if(a.nom < b.nom) return -1;
                if(a.nom > b.nom) return 1;
                return 0;
            });
            },
            filterByName:function(){
            if(this.filter.length > 0){
                let filter = this.filter.toLowerCase();
                return this.orderByName.filter(function(artistes){
                return artistes.nom.toLowerCase().includes(filter);
                })
            }else{
                return this.orderByName;
            }
            }
        },

        mounted(){ 
            
                let user = getAuth().currentUser;
                if(user){
                    this.user = user;
                    this.message = "User déjà connecté : "+this.user.email;
                }else{
                    this.message = "User non connecté : "+this.user.email;
                }

           
            this.getArtistesSynchro();
        },

        methods:{

            async getArtistesSynchro(){
                const firestore = getFirestore();
                const dbArtistes= collection(firestore, "artistes");
                const query = await onSnapshot(dbArtistes, (snapshot) =>{
                this.listeArtistesSynchro = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}));
                })
            },

            async createArtistes(){
                const firestore = getFirestore();
                const dbArtistes= collection(firestore, "artistes");
                const docRef = await addDoc(dbArtistes,{
                    nom: this.nom
                })
                //console.log('document créé avec le id : ', docRef.id);
             },

            async updateArtistes(artistes){
                const firestore = getFirestore();
                const docRef = doc(firestore, "artistes", artistes.id);
                await updateDoc(docRef, {
                    nom: artistes.nom
                }) 
             },

            async deleteArtistes(artistes){
                const firestore = getFirestore();
                const docRef = doc(firestore, "artistes", artistes.id);
                await deleteDoc(docRef);
             },

        }
    }
</script>

<style>
body{
    height: 100%;
}
</style>