<template>
  <div class="body">
    <div class="top">
      <div class="title">
        <img src="@/assets/img/rocket.png" alt="rocket" />
        <h1>フリーランススタート</h1>
      </div>
      <p>案件・求人数{{ totalCount }}件（{{ updatedDate }}更新）</p>
      <p>フリーランスエンジニア専用のIT求人・案件検索サイトで仕事探し</p>
    </div>
    <!-- valueの値をコンソールに表示したいが、undefineになる　⇒'value'では値がそのまま出る -->
    <div class="second">
      <!--  <BasicButton
        value="tesbutton"
        @OnClick="clickButton($event)"
        width="Auto"
        borderRadius="20px"
      />-->

      <p class="oomozi">フリーワードで案件検索</p>
      <div class="serchBox">
        <BasicInput value="aiueo" />
        <input type="text" placeholder="キーワードを入れて探す" />
        <button>案件を検索</button>
        <BasicButton
          @OnClick="clickButton('検索ボタン')"
          value="案件を検索"
          width=" AUTO"
          borderRadius="20px"
        />
      </div>
      <p class="oomozi">おすすめキーワードで探す</p>
      <div class="developLang">
        <li v-for="(keyWord, key) in keyWords" :key="key">
          <BasicButton
            @OnClick="clickButton(keyWord.name)"
            :value="keyWord.name"
            width="Auto"
            borderRadius="20px"
          />
        </li>
      </div>

      <p class="oomozi">開発言語・環境でフリーランス求人・案件を探す</p>
      <p class="tyuumozi">開発言語</p>

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
      <p class="tyuumozi">フレームワーク</p>
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
      <p class="tyuumozi">インフラ</p>
      <div class="developLang">
        <li
          v-for="(develop1, key) in mattersKeyWord.infrastructures"
          :key="key"
        >
          <BasicButton
            @OnClick="clickButton(develop1.name)"
            :value="develop1.name"
            width="Auto"
            borderRadius="20px"
          />
        </li>
      </div>
      <p class="tyuumozi">デザイン</p>
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
      <p class="tyuumozi">その他</p>
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
      <p class="oomozi">新着フリーランス求人・案件</p>
      <div class="cards">
        <div v-for="(matter, key) in matters" :key="key">
          <BasicCard
            :area="matter.area"
            :contract="matter.contract"
            :language="matter.language"
            :title="matter.title"
            :price="matter.unit_price"
          />
          <!-- 2つのカードを表示するごとに改行を挿入 -->
          <br v-if="(key + 1) % 2 === 0" />
        </div>
      </div>
      <div class="cards">
        <BasicCard :area="matters[0]?.area" />
        <BasicCard :area="matters[0]?.area" />
        <br />
        <BasicCard :area="matters[0]?.area" />
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  getTotalCount,
  getProLang,
  getMatters,
  getKeyword,
  getPrefecture,
} from "@/api/matter";
import { BasicCard } from "@/components/Atoms/Cards";
import { BasicButton } from "@/components/Atoms/Buttons";
import { BasicInput } from "@/components/Atoms/Inputs";

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
const keyWords = ref([]);

const mattersKeyWord = reactive({
  develops: ["1", "2", "3"],
  frameworks: [],
  infrastructures: [],
  designs: [],
  others: [],
});
//let keyNum = ref(1);
//let token = ref("");

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

    keyWords.value = await getKeyword();
    console.log(keyWords.value);

    console.log(await getPrefecture());

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
})();

const clickButton = (value) => {
  console.log(value + "がclicked!!!");
};
</script>

<style lang="scss" scoped>
p {
  padding: 10px 0px;
}

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
    padding: 20px 5px;
  }
}

.oomozi {
  font-size: 20px;
  font-weight: bold;
}

.tyuumozi {
  font-size: 15px;
  font-weight: bold;
}

.oomozi {
  padding-top: 30px;
}
.second {
  padding-left: 80px;
}

.cards {
  display: flex;
  flex-wrap: wrap;
}

.serchBox {
  display: flex;
  input {
    width: 60%;
  }
  button {
    color: aqua;
    background-color: red;
  }
  p {
    color: red;
  }
}
</style>
