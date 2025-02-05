<template>
  <section class="for-sid">
    <div v-if="authenticated">
      <h1>Hi Baby!!</h1>
      <!-- Image Grid -->
      <div class="image-grid">
        <img :src="getImageUrl('1.JPG')" alt="Image 1" />
        <img :src="getImageUrl('2.JPG')" alt="Image 2" />
        <img :src="getImageUrl('3.png')" alt="Image 3" />

      </div>
    </div>

    <!-- Password Form -->
    <div v-else class="password-container">
      <h2>Enter Password</h2>
      <input v-model="password" type="password" placeholder="Password..." />
      <button @click="checkPassword">Submit</button>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      password: '',
      authenticated: false,
      errorMessage: ''
    };
  },
  methods: {
    checkPassword() {
      if (this.password === 'onlysid') {
        this.authenticated = true;
        this.errorMessage = '';
      } else {
        this.errorMessage = 'Incorrect password. Try again.';
      }
    },
    getImageUrl(filename) {
      return process.env.BASE_URL + 'images/' + filename;
    }
    
  }
};
</script>

<style scoped>
/* Importing Modern Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;600&family=Playfair+Display:wght@500&display=swap');

.for-sid {
  text-align: center;
  padding: 60px 20px;
  background: #f5efe6; /* Soft Beige Background */
  color: #3c3c3c;
  font-family: 'Inter', sans-serif;
}

/* Password Input Section */
.password-container {
  text-align: center;
  padding: 40px;
}

h2 {
  font-size: 2rem;
  margin-bottom: 15px;
}

input {
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
}

button {
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  background: #3c3c3c;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s ease-in-out;
}

button:hover {
  background: #2c2c2c;
}

/* Error Message */
.error {
  color: red;
  margin-top: 10px;
  font-size: 1rem;
}

/* Image Grid */
.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  margin: auto;
}

.image-grid img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.image-grid img:hover {
  transform: scale(1.03);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}
</style>
