<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup() {
        const username = ref('')
        const usernamevalidate = ref(false)
        const lastname = ref('')
        const lastnamevalidate = ref(false)
        const age = ref(0)
        const agevalidate = ref(false)
        const año = ref(0)
        const aniovalidate = ref(false)
        const email = ref('')
        const emailvalidate = ref(false)
        const password = ref('')
        const passwordvalidate = ref(false)
        const validate = ref(false)
        const users = ref([{}])

        return {
            username,
            usernamevalidate,
            lastname,
            lastnamevalidate,
            age,
            agevalidate,
            año,
            aniovalidate,
            email,
            emailvalidate,
            password,
            passwordvalidate,
            validate,
            users,
        }
    },
    methods: {
        validateForm() {
            this.validate = false
            this.usernamevalidate = false
            this.lastnamevalidate = false
            this.agevalidate = false
            this.aniovalidate = false
            this.emailvalidate = false
            this.passwordvalidate = false

            if (!this.username.trim()) {
                this.usernamevalidate = true
            }

            if (!this.lastname.trim()) {
                this.lastnamevalidate = true
            }

            if (this.age <= 0 || this.age > 120) {
                this.agevalidate = true
            }

            if (this.año < 1900 || this.año > new Date().getFullYear()) {
                this.aniovalidate = true
            }

            if (!this.email.trim() || !/\S+@\S+\.\S+/.test(this.email)) {
                this.emailvalidate = true
            }

            if (!this.password.trim() || this.password.length < 8) {
                this.passwordvalidate = true
            }

            if (this.usernamevalidate || this.lastnamevalidate || this.agevalidate || this.aniovalidate || this.emailvalidate || this.passwordvalidate) {
                this.validate = true
                console.log(this.validate)
                console.log(this.usernamevalidate)
                console.log(this.lastnamevalidate)
                console.log(this.agevalidate)
                console.log(this.aniovalidate)
                console.log(this.emailvalidate)
                console.log(this.passwordvalidate)
                return
            }

            alert('Formulario válido')
            this.addUser()
        },

        addUser() {
            this.users.push({
                username: this.username,
                lastname: this.lastname,
                age: this.age,
                anio: this.año,
                email: this.email,
                password: this.password
            })
            this.username = ''
            this.lastname = ''
            this.age = 0
            this.año = 0
            this.email = ''
            this.password = ''
            this.validate = false
        }
    }
})
</script>

<template>
    <div class=" d-flex flex-column align-items-center justify-content-start">
        <h1 class="text-center bg-dark text-white rounded-bottom w-100 py-3">Formulario</h1>
    </div>
    <div class="background">
        <div class="container ">
            <div class="row">
                <div class="col-md-4">
                    <div class="card p-4 shadow-lg">
                        <form @submit.prevent="validateForm">
                            <div class="mb-3">
                                <label class="form-label fs-5" for="username">Nombre</label>
                                <input class="form-control" v-model="username" type="text"
                                    placeholder="Ingresa tu nombre">
                                <span v-if="usernamevalidate" class="text-danger">Por favor, ingresa un nombre
                                    válido</span>
                            </div>

                            <div class="mb-3">
                                <label class="form-label fs-5" for="lastname">Apellido</label>
                                <input class="form-control" v-model="lastname" type="text"
                                    placeholder="Ingresa tu apellido">
                                <span v-if="lastnamevalidate" class="text-danger">Por favor, ingresa un apellido
                                    válido</span>
                            </div>

                            <div class="mb-3">
                                <label class="form-label fs-5" for="age">Edad</label>
                                <input class="form-control" v-model="age" type="number" placeholder="Ingresa tu edad">
                                <span v-if="agevalidate" class="text-danger">Por favor, ingresa una edad válida</span>
                            </div>

                            <div class="mb-3">
                                <label class="form-label fs-5" for="año">Año de nacimiento</label>
                                <input class="form-control" v-model="año" type="number"
                                    placeholder="Ingresa un año válido">
                                <span v-if="aniovalidate" class="text-danger">Por favor, ingresa un año válido de
                                    nacimiento valido</span>
                            </div>

                            <div class="mb-3">
                                <label class="form-label fs-5" for="correo">Correo</label>
                                <input class="form-control" v-model="email" type="email"
                                    placeholder="Ingresa tu correo">
                                <span v-if="emailvalidate" class="text-danger">Por favor, ingresa un correo
                                    válido</span>
                            </div>

                            <div class="mb-3">
                                <label class="form-label fs-5" for="password">Password</label>
                                <input class="form-control" v-model="password" type="password"
                                    placeholder="Ingresa una contraseña">
                                <span v-if="passwordvalidate" class="text-danger">Por favor, ingresa una contraseña
                                    válida de 8 caracteres</span>
                            </div>

                            <button class="btn btn-primary w-100" type="submit">Enviar</button>

                            <div v-if="validate" class="alert alert-danger mt-3">
                                Por favor, completa todos los campos.
                            </div>
                        </form>
                    </div>
                </div>

                <div class="col-md-8">
                    <div class="table-responsive mt-4">
                        <table class="table table-striped shadow-lg rounded shadow-primary">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Edad</th>
                                    <th>Año de nacimiento</th>
                                    <th>Correo</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr v-for="(user, index) in users" :key="index">
                                    <td>{{ user.username }}</td>
                                    <td>{{ user.lastname }}</td>
                                    <td>{{ user.age }}</td>
                                    <td>{{ user.anio }}</td>
                                    <td>{{ user.email }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.background {
    background:
        radial-gradient(35.36% 35.36% at 100% 25%, #0000 66%, #616161 68% 70%, #0000 72%) 10px 10px/calc(2 * 10px) calc(2 * 10px),
        radial-gradient(35.36% 35.36% at 0 75%, #0000 66%, #616161 68% 70%, #0000 72%) 10px 10px/calc(2 * 10px) calc(2 * 10px),
        radial-gradient(35.36% 35.36% at 100% 25%, #0000 66%, #616161 68% 70%, #0000 72%) 0 0/calc(2 * 10px) calc(2 * 10px),
        radial-gradient(35.36% 35.36% at 0 75%, #0000 66%, #616161 68% 70%, #0000 72%) 0 0/calc(2 * 10px) calc(2 * 10px),
        repeating-conic-gradient(#ffffff 0 25%, #0000 0 50%) 0 0/calc(2 * 10px) calc(2 * 10px),
        radial-gradient(#0000 66%, #616161 68% 70%, #0000 72%) 0 calc(10px / 2) / 10px 10px #ffffff;
}
</style>
