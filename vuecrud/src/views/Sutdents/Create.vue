<template>

    <div class="container mt-5">
        <div class="card">
            <div class=" card-header">
                <h4>Add Student</h4>
            </div>
            <div class="card-body">
               
                <div class="mb-3">
                    <label for="" class=" mx-2">Name:</label>
                    <input v-model="student.name" type="text" class="from-control ">
                    <label for="" class=" mx-2">Email:</label>
                    <input v-model="student.email" type="text" class="from-control ">
                    <label for="" class=" mx-2">Address:</label>
                    <input v-model="student.address" type="text" class="from-control ">
                </div>
                <div class="mb-3">
                    <button @click="editStudent()" type="button" class="btn btn-primary  mx-5 my-5">Edit</button>
                    <button @click="saveStudent" type="button" class="btn btn-primary  mx-5 my-5">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
    name:"Studentscreate",
    data(){
        const id = this.$route.params
        return{
           student: {
           name:"",
            email:"",
            address :""
           
           },
           id
           
        }
    },
    mounted() {
      this.getStudentByID();
   
    },
     
    methods:{
        saveStudent(){
            var mythis = this;
            axios.post('http://192.168.1.108:8000/api/add-student',{
                name:  this.student.name,
                email: this.student.email,
                address:this.student.address
              
            })
            .then(() =>{
               this.student.name = "",
               this.student.email = "",
               this.student.address = ""
              
            })
            .catch(function (error){
                if(error.response){
                    if (error.response.status == 422) {
                            mythis.errorList = error.response.data.error;
                    }       
                    } else if (error.request) {
   
                      console.log(error.request);
                    } else {
                      console.log('Error', error.message);
                    }    
               })
        },
        editStudent(){
            axios.put(`http://192.168.1.108:8000/api/update-student/${this.id.id}`, {
                name:  this.student.name,
                email: this.student.email,
                address:this.student.address 
            })
        },
        getStudentByID(){
            axios.get(`http://192.168.1.108:8000/api/get-student/${this.id.id}`).then((res) =>{
                console.log(res)
                this.student.name = res.data.name,
                this.student.email = res.data.email,
                this.student.address = res.data.address
            }) 
        },

     }
}
</script>