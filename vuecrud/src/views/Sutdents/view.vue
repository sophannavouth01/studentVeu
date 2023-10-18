
<template>
    <div class="container" >
        <div class="card">
            <div class="card-header">
                <h4>
                    Students 
                    <router-link to="/students/add" class="btn btn-primary float-end"> Add Student</router-link>
                </h4>
            </div>
            <div class="card-body">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th class=" text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr v-for="student in this.students" :key="student">
                            <td>{{ student.id }}</td>
                            <td>{{ student.name }}</td>
                            <td>{{ student.email }}</td>
                            <td>{{ student.address }}</td>
                            <td >
                                <button @click="this.$router.push(`/students/create/${student.id}`)" class=" btn btn-success mx-3 "> Edit</button>
                                <button @click="deleteStudent(student.id)" type="button" class=" btn btn-danger ">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                  
                </table>
            </div>
        </div>
    </div>
  </template>

<script>
import axios from "axios"
export default {
    name:"Students",
    data(){ 
        return{
            students: [],
        
        }
    },

    mounted() {
        console.log("I am here")
        this.getStudents();
    },
     
    methods:{
        getStudents(){
          axios.get('http://192.168.1.108:8000/api/get-student').then(res =>{
            this.students = res.data
             console.log(this.data)
          });
        },
        deleteStudent(studentId){
                axios.delete(`http://192.168.1.108:8000/api/delete-student/${studentId}`)
                .then(res => {
                   this.getStudents();
                })
                console.log(studentId)
            
        },
      
      
     },
}
</script>