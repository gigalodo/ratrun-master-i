<template>
  <div>
    <h1>新規会員登録</h1>
    <form @submit.prevent>
      <BasicInput
        @input-value="handleInput($event)"
        :value="user.email"
        title="メールアドレス:"
        type="email"
        name="email"
      />
      <BasicInput
        @input-value="handleInput($event)"
        :value="user.password"
        title="パスワード:"
        type="password"
        name="password"
      />
      <BasicButton @OnClick="clickButton()" value="送信" />
      <input type="submit" value="送信" />
    </form>
  </div>
</template>

<script setup>
import { BasicInput } from "@/components/Atoms/Inputs";
import { BasicButton } from "@/components/Atoms/Buttons";
import { postRegistration } from "@/api/user";
const user = reactive({
  email: "",
  password: "",
});

const handleInput = (data) => {
  console.log(data);
  /*
  if(data.name === "email"){
    user.email = data.value;
  }else if(data.name === "password"){
    user.password = data.value;
  }
  */
  user[data.name] = data.value;
};

/*
const clickButton = () =>{
  console.log("cliked");

  fetch('https://us-central1-modaneducation.cloudfunctions.net/registration', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify( {email: user.email, password: user.password}),
})
  .then(data => {
    // レスポンスデータを処理する
    console.log(data);
  })
  .catch(error => {
    // エラーハンドリング
    console.error(error);
  });
}
*/

//postRegistration
//postRegistrationを使用していない・・・？
const clickButton = async () => {
  try {
    const response = await postRegistration(user);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

/*
const clickButton =async()=> {
    try {
      const response = await fetch('https://us-central1-modaneducation.cloudfunctions.net/registration', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify( {email: user.email, password: user.password}),
});
  const data = await response.json();
     console.log(data);
      return {
        data: data
      };
    } catch (error) {
      console.error(error);
      return {
        data: null
      };
    }
  }

*/
</script>

<style lang="scss" scope>
p {
  padding-top: 30px;
}

input {
  margin-top: 10px;
}

div {
  padding: 50px 100px;
}
</style>
