<template>
  <div>
    <h1>ログイン</h1>
    <form @submit.prevent>
      <BasicInput @input-value="handleInput($event)" :value="user.email" type="email"  name="email" title="メールアドレス" />
      <BasicInput @input-value="handleInput($event)" :value="user.password" type="password"  name="password" title="パスワード" />
      <BasicButton @OnClick="clickButton()" value="送信"  />
      
    </form>
  </div>
</template>


<script setup>
import { BasicInput } from "@/components/Atoms/Inputs";
import { BasicButton } from "@/components/Atoms/Buttons";
import { postLogin } from "@/api/user";
const user = reactive({
    email: "",
    password: "",
  });

  const handleInput = (data) =>{
  console.log(data);
  /*
  if(data.name === "email"){
    user.email = data.value;
  }else if(data.name === "password"){
    user.password = data.value;
  }
  */
  user[data.name] = data.value;

}



const clickButton = async()=>{
  try{
    const response = await postLogin(user);
    console.log(response);
    if(response.code == 200 && response.message == "ログインに成功しました。"){
      const router = useRouter();
      router.push('/loginSuccess');

    }
  }catch(error){
    console.error(error);
    //console.log(error.response); 
    console.log(error.message); 

    
  }
}





/*
const clickButton =async()=> {
    try {
      const response = await fetch('https://us-central1-modaneducation.cloudfunctions.net/authResource', {
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