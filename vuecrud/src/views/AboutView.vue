<template>
    <div >
      <div class="users" v-for="user in users" :key="user.id">
  <h2>{{ user.name }}</h2>
  <p>{{ user.email }}</p>

  <button @click="editUser(user)">Edit</button>
  <button @click="deleteUser(user.id)">Delete</button>
</div>
    </div>
</template>

<script>
export default {
  data(){
  return {
    email: '',
    name: '',
  }
  },
  methods: {
    async deleteUser(id) {
  let x = window.confirm("You want to delete the user?");

  if (x) {
    const user = await axios.delete(
      "https://jsonplaceholder.typicode.com/users/" + id
    );

    console.log(user);
    alert("User deleted!");
  }
},

  }
}
</script>
