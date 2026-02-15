<script setup>
import { ref } from 'vue';

const showForm = ref(false);
let newMemo = ref('');
const memos = ref([]);
const errorMessage = ref('');

function addMemo() {
  if(!newMemo.value.trim()){
    errorMessage.value = 'Please enter a memo.';
    return;
  }

    memos.value.push({
      id: Date.now(),
      memo : newMemo.value,
      date : new Date().toLocaleDateString(),
      color: '#' + Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')

    });
  newMemo.value = '';
  showForm.value = false;
  errorMessage.value = '';
}
</script>

<template>
    <main>
        <div class="container">
          <header>
              <h1 class="header-title">Memo</h1>
              <button @click="showForm = true" class="header-button">+</button>
            </header>
            <div class="card-container">
              <div v-for="memo in memos" :key="memo.id" class="card" :style="{backgroundColor : memo.color}" >
                  <p class="card-content">
                  {{ memo.memo }}
                  </p>
                  <p class="card-date">{{ memo.date }}</p>
              </div>
            </div>
        </div>

        <div v-if="showForm" class="form-overlay">
          <div class="form-modal">
              <p v-if="errorMessage" class="text-danger">{{ errorMessage }}</p>
                <button @click="showForm = false" class="form-close-btn">&times;</button>
                  <textarea v-model="newMemo" name="memo" id="memo" cols="30" rows="10"></textarea>
                <button @click="addMemo" class="form-save-btn">Save</button>
            </div>
        </div>
    </main>
</template>

<style scoped>
  main {
    height: 100vh;
    width: 95vw;
  }

  .container {
    max-width: 1000px;
    padding: 10px;
    margin:  0 auto;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-title {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .header-button {
    font-size: 26px;
    border: none;
    border-radius: 100%;
    width: 50px;
    height: 50px;
    color: chartreuse;
    cursor: pointer;
  }

  .card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px
  }

  .card{
    width: 255px;
    height: 255px;
    padding: 10px;
    /* box-shadow: 1px 1px 5px rgba(red, green, blue, alpha); */
    /* background-color: blanchedalmond; */
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .form-overlay {
    position:absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.77);
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .form-modal {
    width: 420px;
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .form-save-btn {
    padding: 10px 20px;
    background-color: #495a7d ;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 15px;
    color: white;
  }

  .form-close-btn {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
  }

  .text-danger {
    color : red;
  }
</style>
