<template>
  <div class="wiki">
    <h1 class="subheading grey--text view__title">wiki</h1>
    <div>
      <div>projects</div>
      <img
        src="https://user-images.githubusercontent.com/15625235/63575386-3e20b380-c58a-11e9-8f28-e196fd7e97a7.png"
        alt="puk"
      />
    </div>

    <ul>
      <div>ЧО ботать</div>
      <li v-for="item in items4" :key="item">
        {{ item.description }}
      </li>
    </ul>

    <ul>
      <div>Виды дирректив во Vue.js</div>
      <li v-for="item in items" :key="item">
        {{ item.code }} - {{ item.title }} - {{ item.description }}
      </li>
    </ul>

    <div class="table__container">
      <table border="1">
        <thead>
          <th>имя</th>
          <th>что это</th>
          <th>Зачем это</th>
          <th>Как это</th>
        </thead>
        <tbody>
          <tr v-for="item in items2" :key="item">
            <td>{{ item.name }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.description }}</td>
            <td>{{ item.how }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="subheading grey--text">vuex</div>
    <div class="table__container">
      <table border="1">
        <thead>
          <th>имя</th>
          <th>что это</th>
          <th>Зачем это</th>
        </thead>
        <tbody>
          <tr v-for="item in items3" :key="item">
            <td>{{ item.code }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.description }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
const BOTAT = [
  {
    description:
      "Структура однофайлового компонента Vue.js что зчем дата компутед воч кеттеры сеттеры",
  },
  { description: "встроенные компоненты" },
  { description: "vuex" },
  { description: "vuetify актуальный синтаксис" },
  { description: "список типичный ворнингов" },
  { description: "???" },
  { description: "profit!!11" },
];

const HELPERS = [
  { code: "mapState", title: "вспомогательная функция", description: "-" },
  {
    code: "mapGetters",
    title: "вспомогательная функция",
    description:
      "Функция mapGetters просто проксирует геттеры хранилища в локальные вычисляемые свойства компонента",
  },
  {
    code: "mapMutations",
    title: "вспомогательная функция",
    description:
      "Мутации можно вызывать из кода компонентов, используя this.$store.commit('xxx'), или применяя вспомогательный метод mapMutations, который проксирует вызовы store.commit через методы компонентов (для этого требуется наличие корневой ссылки на хранилище $store)",
  },
  {
    code: "mapActions",
    title:
      "создающая локальные псевдонимы для действий в виде методов компонента",
    description:
      "проксирует `this.increment()` в `this.$store.dispatch('increment')`",
  },
];

const BASE_THINGS = [
  {
    name: "state",
    title: "Состояние",
    description: "куда уж без него",
    how: "",
  },
  {
    name: "getters",
    title: "Просто гетеры",
    description: "Действия которые возвращают данные из хранилища",
    how: "",
  },
  {
    name: "mutations",
    title: "Синхронные изменения состояния",
    description: "Синхронные транзакции",
    how: 'this.$store.commit("increment")',
  },
  {
    name: "actions",
    title: "Действия — похожи на мутации с несколькими отличиями",
    description:
      "Вместо того, чтобы напрямую менять состояние, действия инициируют мутации. Действия могут использоваться для асинхронных операций.",
    how: 'this.$store.dispatch("increment")',
  },
  {
    name: "modules",
    title: "ну модули там...",
    description: "не дочитал еще",
    how: "",
  },
];

const DIRECTIVES = [
  {
    code: "v-once",
    title: "Однократная привязка",
    description:
      "если необходимо, чтобы значение было привязано к элементу html только один раз и впоследствии не изменялось",
  },
  {
    code: "v-html",
    title: "Привязка к html",
    description: "Для привязки элемента к коду html",
  },
  {
    code: "v-on",
    title: "Обработка событий",
    description: "Для обработки событий элементов html в Vue.js",
  },
  {
    code: "v-model",
    title: "Двусторонняя привязка",
    description: "Для создания  двусторонней привязки",
  },
  {
    code: "v-if",
    title: "Условный рендеринг",
    description: "Позволяет отобразить или скрыть элемент html по условию",
  },
  {
    code: "v-show",
    title: "Условный рендеринг",
    description:
      "аналогично v-if позволяет скрывать или отображать элементы по определенному условию",
  },
  {
    code: "v-for",
    title: "Цикл for",
    description: "Для рендеринга коллекций",
  },
];

export default {
  name: "Wiki",
  data() {
    return {
      items: DIRECTIVES,
      items2: BASE_THINGS,
      items3: HELPERS,
      items4: BOTAT,
    };
  },
};
</script>

<style>
.table__container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
}
</style>