<template>
  <section class="for-sid">
    <h1>Hello Boyfriend</h1>
    <!-- Image Grid -->
    <div class="image-grid">
      <img src="/images/1.JPG" alt="Image" />
      <img src="/images/2.JPG" alt="Image" />
      <img src="/images/3.png" alt="Image" />
      <!-- <img :src="require('@/assets/3.JPG')" alt="Minimalist Image 2" />
      <img :src="require('@/assets/3.png')" alt="Minimalist Image 3" /> -->
    </div>
  </section>
</template>

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

h1 {
  font-size: 2.8rem;
  font-family: 'Playfair Display', serif;
  font-weight: 500;
  margin-bottom: 10px;
  color: #2c2c2c;
}

p {
  font-size: 1.2rem;
  color: #5a5a5a;
  margin-bottom: 40px;
}

/* Grid Styling */
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
