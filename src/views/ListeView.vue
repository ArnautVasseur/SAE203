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
        <form v-for="artistes in filterByArtistes" :key="artistes.id">
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


        <h2 class="mt-16">Liste des participants</h2>
        <form>
            <div>
            <input type="text" class="border-2" v-model='nom' required />
            <button type="button" @click='createParticipant()' title="Création">
                Create
            </button>
            </div>
        </form>
            <input type="text" v-model="filter" class="border-2"/>
            <button type="button"  title="Filtrage">
                filtrage
            </button>   
        <form v-for="participant in filterByParticipant" :key="participant.id">
            <div>
                <input type="text" v-model='participant.nom' required class="mt-2 border-2"/>
                <button type="button" class="mx-2" @click="updateParticipant(participant)" title="Modification">
                Modify
                </button>
                <button type="button" @click="deleteParticipant(participant)" title="Suppression">
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
                listeArtistesSynchro:[],
                listeParticipantSynchro:[],
                filter:''
            }
        },
          computed:{
            orderByArtistes:function(){
            return this.listeArtistesSynchro.sort(function(a,b){
                if(a.nom < b.nom) return -1;
                if(a.nom > b.nom) return 1;
                return 0;
            });
            },
            filterByArtistes:function(){
            if(this.filter.length > 0){
                let filter = this.filter.toLowerCase();
                return this.orderByArtistes.filter(function(artistes){
                return artistes.nom.toLowerCase().includes(filter);
                })
            }else{
                return this.orderByArtistes;
            }
            },

            orderByParticipant:function(){
            return this.listeParticipantSynchro.sort(function(a,b){
                if(a.nom < b.nom) return -1;
                if(a.nom > b.nom) return 1;
                return 0;
            });
            },
            filterByParticipant:function(){
            if(this.filter.length > 0){
                let filter = this.filter.toLowerCase();
                return this.orderByParticipant.filter(function(participant){
                return participant.nom.toLowerCase().includes(filter);
                })
            }else{
                return this.orderByParticipant;
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
            this.getParticipantSynchro();
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

             async getParticipantSynchro(){
                const firestore = getFirestore();
                const dbParticipant= collection(firestore, "participant");
                const query = await onSnapshot(dbParticipant, (snapshot) =>{
                this.listeParticipantSynchro = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}));
                })
            },

            async createParticipant(){
                const firestore = getFirestore();
                const dbParticipant= collection(firestore, "participant");
                const docRef = await addDoc(dbParticipant,{
                    nom: this.nom
                })
                //console.log('document créé avec le id : ', docRef.id);
             },

            async updateParticipant(participant){
                const firestore = getFirestore();
                const docRef = doc(firestore, "participant", participant.id);
                await updateDoc(docRef, {
                    nom: participant.nom
                }) 
             },

            async deleteParticipant(participant){
                const firestore = getFirestore();
                const docRef = doc(firestore, "participant", participant.id);
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