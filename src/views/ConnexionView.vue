<template>
    <div class="mx-8">
        <h1 class="text-center mt-40 font-bold text-3xl mb-10">Metalancolique</h1>
        <form @submit.prevent="onCnx">
                            <div class="card-body">  
                        
                                <div class="row">
                                    <div class="input-group mb-3">
                                        <input 
                                            class="form-control w-full h-12 p-3 rounded-xl mb-5" placeholder="Adresse mail" type="email"
                                            v-model="user.email" required
                                            />                    
                                    </div>
                                    <div class="input-group mb-3">
                                        <input 
                                            class="form-control w-full h-12 p-3 rounded-xl" placeholder="Mot de passe" 
                                            :type="type" v-model="user.password" required
                                            />                    
                                            <div class="input-group-after">
                                                <button class="btn btn-light" @click.prevent="affiche()">
                                                    <i class="fa fa-eye fa-lg" ></i>
                                                </button>
                                            </div>
                                    </div>

                                </div>
                                <div class="alert alert-warning" role="alert">
                                    {{message}}
                                </div>
                            </div>

                            <div class="card-footer">   
                                <button type="submit" class="float-left border-2 border-black mb-3 p-2 rounded-xl" >
                                     Test Connexion
                                </button>
                                <button type="button" class="float-right border-2 border-black mb-3 p-2 rounded-xl"
                                    @click="onDcnx">
                                    Test Deconnexion
                                </button>
                            </div>
                        </form>
    </div>
</template>

<script>
import {
    getAuth,
    signInWithEmailAndPassword,
    signOut
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js'

import { emitter } from '../main.js';

export default {
    name: "",
    created() {
        document.body.style.backgroundColor = "#F3DABC";
    },
    name:'',
    data() {
        return {
            user:{
                email:'',
                password:''
            },
            message:null,
            imageData:null,
            type:'password',
            view:false,
        }
    },
    mounted(){ // Montage de la vue
    },
    methods:{
        
        previewImage: function(event) {
            // Mise à jour de la photo du participant
            this.file = this.$refs.file.files[0];
            // Reference to the DOM input element
            // Reference du fichier à prévisualiser
            var input = event.target;
            // On s'assure que l'on a au moins un fichier à lire
            if (input.files && input.files[0]) {
                // Creation d'un filereader
                // Pour lire l'image et la convertir en base 64
                var reader = new FileReader();
                // fonction callback appellée lors que le fichier a été chargé
                reader.onload = (e) => {
                    // Read image as base64 and set to imageData
                    // lecture du fichier pour mettre à jour 
                    // la prévisualisation
                    this.imageData = e.target.result;
                }
                // Demarrage du reader pour la transformer en data URL (format base 64) 
                reader.readAsDataURL(input.files[0]);        
            }
        },
        onCnx(){
            signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
            .then((response)=>{
                this.user = response.user;
                emitter.emit('connectUser', { user: this.user });
                console.log("user", this.user);
                this.message = "User connecté : "+this.user.email;
            })
            .catch((error)=>{
                console.log('Erreur connexion', error);
                this.message = "Erreur d'authentification";
            })
        },
        onDcnx(){
            signOut(getAuth())
            .then(response=>{
                this.message = "User non connecté";
                this.user = {
                    email:null,
                    password:null
                };
                emitter.emit('deConnectUser', { user: this.user });
            })
            .catch(error=>{
                console.log('erreur deconnexion ', error);
            })
        },
        affiche(){
            this.view = !this.view;
            if(this.view) {this.type = 'text';}
            else {this.type = 'password';}
        },
    }
}
</script>

<style>

</style>