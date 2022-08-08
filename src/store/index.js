import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

// 40 % осталось 05,08
const API_KEY = 'jDayz1ZsFklm09ANyUygRMme63Qne8Yl'
const SECOND_API_KEY = "nA86ZXAOOPaCClF50VFDrUcVALuY70cO"
const SYMBOLS = "RUB"
const BASE = "USD"
const START_DATE = "2022-02-20"
const END_DATE = "2022-03-30"
// https://apilayer.com/marketplace/exchangerates_data-api#details-tab
//https://apilayer.com/marketplace/exchangerates_data-api#documentation-tab
var myHeaders = new Headers();
myHeaders.append("apikey", SECOND_API_KEY);

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

async function getLatest() {
  let latest = await fetch(`https://api.apilayer.com/exchangerates_data/latest?symbols=${SYMBOLS}&base=${BASE}`, requestOptions)
    .then(response => response.text())
    .then(result => {
      //console.log(result)
      return result
    })
    .catch(error => console.log('error', error))
    return latest
}

async function getTimeseries() {
  const timeseries = await fetch(`https://api.apilayer.com/exchangerates_data/timeseries?start_date=${START_DATE}&end_date=${END_DATE}`, requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result)
    return JSON.stringify(result)
  })
  .catch(error => console.log('error', error));
  return timeseries
}

async function getTimeseriesSymbols() {
  let timeseriesSymbols = ''
  await fetch(`https://api.apilayer.com/exchangerates_data/timeseries?symbols=${SYMBOLS}&base=${BASE}&start_date=${START_DATE}&end_date=${END_DATE}`, requestOptions)
  .then(response => response.text())
  .then(result => {
    //console.log(result)
    timeseriesSymbols = JSON.parse(result)
  })
  .catch(error => console.log('error', error));
  return timeseriesSymbols
}

async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments');
  return await response.json();
}


const multiChartModule = {
  namespaced: true,
  state: {
    //отладочная переменная для ответа
    responseJSON: "",
    rates: "",
    test: 'Testando azazahizxfgiyagk',

    timeseriesSymbolsResponse: "",
    timeseriesSymbolsRates: "",
    values: [],
    marks: [],

    symbols: '',
    base: '',
    start: '',
    end: ''
  },
  mutations: {
    gotData(state, payload) {
      console.log('mutation - gotData')
      console.log("payload", payload)
      state.responseJSON = payload
    },
    gotTimeseriesSymbols(state, payload) {
      console.log('mutation - gotTimeseriesSymbols')
      console.log("payload", payload)
      //отладочная запись
      state.responseJSON = payload

      //норм запись данных из апи
      state.timeseriesSymbolsResponse = payload
      state.timeseriesSymbolsRates = payload.rates

      //для построения графика
      state.marks = Object.keys(payload.rates)

      let loco = Object.entries(payload.rates)
      let resultArr = []
      loco.map(el => {
        let roco = new Array(el[1])
        roco.map(subEl => {
          let coco = Object.values(subEl)[0]
          resultArr.push(coco)
        })
      })
      state.values = resultArr
    },
    setBase(state, payload){
      state.base = payload
    },
    setSymbols(state, payload){
      state.symbols = payload
    },
    setStart(state, payload){
      state.start = payload
    },
    setEnd(state, payload){
      state.end = payload
    },
  },
  actions: {
    async getLatest({ commit }) {
      commit('gotData', await getLatest())
    },
    async getTimeseriesSymbolsAction({commit, state}) {
      const timeseriesSymbols = await fetch(`https://api.apilayer.com/exchangerates_data/timeseries?symbols=${state.symbols}&base=${state.base}&start_date=${state.start}&end_date=${state.end}`, requestOptions)
      commit('gotTimeseriesSymbols', await timeseriesSymbols.json())
    },
    async getTimeseries({ commit }) {
      commit('gotData', await getTimeseries())
    }
  },
  getters: {
    getResponseJSON(state) {
      return state.responseJSON
    },
    getTimeseriesSymbolsRates(state) {
      return state.timeseriesSymbolsRates
    },
    getValues(state){
      console.log('values', state.values)
      return state.values
    },
    getMarks(state){
      return state.marks
    }
  }
}






const exchangeModule = {
  namespaced: true,
  state: {
    //отладочная переменная для ответа
    responseJSON: "",
    rates: "",
    test: 'Testando azazahizxfgiyagk',

    timeseriesSymbolsResponse: "",
    timeseriesSymbolsRates: "",
    values: [],
    marks: [],
    symbols: '',
    base: '',
    start: '',
    end: ''
  },
  mutations: {
    gotData(state, payload) {
      console.log('mutation - gotData')
      console.log("payload", payload)
      state.responseJSON = payload
    },
    gotTimeseriesSymbols(state, payload) {
      console.log('mutation - gotTimeseriesSymbols')
      console.log("payload", payload)
      //отладочная запись
      state.responseJSON = payload

      //норм запись данных из апи
      state.timeseriesSymbolsResponse = payload
      state.timeseriesSymbolsRates = payload.rates

      //для построения графика
      state.marks = Object.keys(payload.rates)

      let loco = Object.entries(payload.rates)
      let resultArr = []
      loco.map(el => {
        let roco = new Array(el[1])
        roco.map(subEl => {
          let coco = Object.values(subEl)[0]
          resultArr.push(coco)
        })
      })

      state.values = resultArr
    }
  },
  actions: {
    async getLatest({ commit }) {
      commit('gotData', await getLatest())
    },
    async getTimeseriesSymbolsAction({commit}) {
      const timeseriesSymbols = await fetch(`https://api.apilayer.com/exchangerates_data/timeseries?symbols=${SYMBOLS}&base=${BASE}&start_date=${START_DATE}&end_date=${END_DATE}`, requestOptions)
      commit('gotTimeseriesSymbols', await timeseriesSymbols.json())
    },
    async getTimeseries({ commit }) {
      commit('gotData', await getTimeseries())
    }
  },
  getters: {
    getResponseJSON(state) {
      return state.responseJSON
    },
    getTimeseriesSymbolsRates(state) {
      return state.timeseriesSymbolsRates
    },
    getValues(state){
      console.log('values', state.values)
      return state.values
    },
    getMarks(state){
      return state.marks
    }
  }
}

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    exchangeModule: exchangeModule,
    multiChartModule: multiChartModule 
  }
})
