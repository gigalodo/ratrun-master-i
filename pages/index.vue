<template>
  <div>
    <div class="top">
      <div class="title">
        <img src="@/assets/img/rocket.png" alt="rocket" />
        <h1>フリーランススタート</h1>
      </div>
      <p>案件・求人数{{ totalCount }}件（{{ updatedDate }}更新）</p>
      <p>フリーランスエンジニア専用のIT求人・案件検索サイトで仕事探し</p>
    </div>
    <!-- valueの値をコンソールに表示したいが、undefineになる　⇒'value'では値がそのまま出る -->
    <BasicButton
      value="tesbutton"
      @OnClick="clickButton($event)"
      width="Auto"
      borderRadius="20px"
    />

    <p>開発言語・環境でフリーランス求人・案件を探す</p>
    <p>開発言語</p>

    <div class="developLang">
      <li v-for="(develop, key) in mattersKeyWord.develops" :key="key">
        <BasicButton
          @OnClick="clickButton(develop.name)"
          :value="develop.name"
          width="Auto"
          borderRadius="20px"
        />
      </li>
    </div>
    <p>フレームワーク</p>
    <div class="developLang">
      <li v-for="(develop1, key) in mattersKeyWord.frameworks" :key="key">
        <BasicButton
          @OnClick="clickButton(develop1.name)"
          :value="develop1.name"
          width="Auto"
          borderRadius="20px"
        />
      </li>
    </div>
    <p>インフラ</p>
    <div class="developLang">
      <li v-for="(develop1, key) in mattersKeyWord.infrastructures" :key="key">
        <BasicButton
          @OnClick="clickButton(develop1.name)"
          :value="develop1.name"
          width="Auto"
          borderRadius="20px"
        />
      </li>
    </div>
    <p>デザイン</p>
    <div class="developLang">
      <li v-for="(develop1, key) in mattersKeyWord.designs" :key="key">
        <BasicButton
          @OnClick="clickButton(develop1.name)"
          :value="develop1.name"
          width="Auto"
          borderRadius="20px"
        />
      </li>
    </div>
    <p>その他</p>
    <div class="developLang">
      <li v-for="(develop1, key) in mattersKeyWord.others" :key="key">
        <BasicButton
          @OnClick="clickButton(develop1.name)"
          :value="develop1.name"
          width="Auto"
          borderRadius="20px"
        />
      </li>
    </div>
    <div>言語api用</div>
    <div v-for="(matter, key) in matters" :key="key">
      <BasicCard
        :area="matter.area"
        :contract="matter.contract"
        :language="matter.language"
        :title="matter.title"
        :price="matter.unit_price"
      />
    </div>
    <BasicCard :area="matters[0]?.area" />
  </div>
</template>

<script setup>
import {
  getTotalCount,
  getProLang,
  getMatters,
  getKeyword,
} from "@/api/matter";
import { BasicCard } from "@/components/Atoms/Cards";
import { BasicButton } from "@/components/Atoms/Buttons";
/*
const user = reactive({
  count: "",
  date: "",
});
*/
const totalCount = ref(0);
const updatedDate = ref("");
const dayjs = useDayjs();
const matters = ref([]);

const mattersKeyWord = reactive({
  develops: ["1", "2", "3"],
  frameworks: [],
  infrastructures: [],
  designs: [],
  others: [],
});
/*
title: { type: String, default: "nakatoです。" },
  price: { type: String, default: "0" },
  contract: { type: String, default: "no" },
  area: { type: String, default: "no" },
  language: { type: String, default: "no" },



const d = reactive({
  develops: ["yaa", "hi", "hey"],
  frameworks: [],
  infrastructures: [],
  designs: [],
  others: [],
});
*/
let keyNum = ref(1);
let token = ref("");

(async () => {
  try {
    const TCresponse = await getTotalCount();
    console.log(TCresponse);
    totalCount.value = TCresponse.total_count;
    updatedDate.value = dayjs(TCresponse.date).format("YYYY/MM/DD");

    const PLresponse = await getProLang();
    console.log(PLresponse);
    mattersKeyWord.develops = PLresponse.develops;
    mattersKeyWord.frameworks = PLresponse.frameworks;
    mattersKeyWord.infrastructures = PLresponse.infrastructures;
    mattersKeyWord.designs = PLresponse.designs;
    mattersKeyWord.others = PLresponse.others;

    matters.value = await getMatters();
    console.log(matters.value);
    /*matters.value = GMresponse;*/
  } catch (error) {
    console.error(error);
  }

  /*
  try {
    const response = await getKeyword(keyNum.value);
    console.log(response);
    //totalCount.value = response.total_count;
    //updatedDate.value = dayjs(response.date).format("YYYY/MM/DD");
  } catch (error) {
    console.error(error);
  }
  */
  /*
  try {
    const response = await fetch(
      "https://us-central1-modaneducation.cloudfunctions.net/mattersKeyword",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(keyNum.value),
      }
    );

    const data = await response.json();
    console.log(data);
    //      return {
    //        data: data
    //      };
  } catch (error) {
    console.error(error);
    //      return {
    //        data: null
    //      };
  }*/
})();

const clickButton = (value) => {
  console.log(value + "がclicked!!!");
};
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 32px;
    height: 32px;
  }
}

.top {
  text-align: center;
}

.developLang {
  display: flex;
  li {
    padding: 10px;
  }
}
</style>
