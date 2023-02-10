import { createStore } from 'vuex'
import axiosClient from '../axios';

// const tmpSurveys = [
//   {
//     id: 100,
//     title: 'My first survey',
//     slug: 'my-first-survey',
//     status: 'draft',
//     image: 'https://partisia.com/wp-content/uploads/2020/07/surveys@2x.png',
//     description: "My first survey, I'm so excited to see the results of this survey and I hope it will be a success and I will be able to make a lot of money from it",
//     created_at: '2021-01-20 18:00:00',
//     updated_at: '2021-01-20 18:00:00',
//     expired_at: '2021-01-31 18:00:00',
//     questions: [
//       {
//         id: 1,
//         type: 'select',
//         question: 'From which country are you?',
//         description: null,
//         data: {
//           options: [
//             { uuid: self.crypto.randomUUID, text: 'USA' },
//             { uuid: self.crypto.randomUUID, text: 'Canada' },
//             { uuid: self.crypto.randomUUID, text: 'Mexico' },
//             { uuid: self.crypto.randomUUID, text: 'France' },
//             { uuid: self.crypto.randomUUID, text: 'Germany' },
//           ],
//         },
//       },
//       {
//         id: 2,
//         type: 'checkbox',
//         question: 'Which languages videos do you like to watch?',
//         description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//         data: {
//           options: [
//             { uuid: self.crypto.randomUUID, text: 'Javascript' },
//             { uuid: self.crypto.randomUUID, text: 'PHP' },
//             { uuid: self.crypto.randomUUID, text: 'Python' },
//             { uuid: self.crypto.randomUUID, text: 'Ruby' },
//             { uuid: self.crypto.randomUUID, text: 'C#' },
//           ],
//         },
//       },
//       {
//         id: 3,
//         type: 'checkbox',
//         question: 'Which PHP frameworks do you like to use?',
//         description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//         data: {
//           options: [
//             { uuid: self.crypto.randomUUID, text: 'Laravel' },
//             { uuid: self.crypto.randomUUID, text: 'Symfony' },
//             { uuid: self.crypto.randomUUID, text: 'CodeIgniter' },
//             { uuid: self.crypto.randomUUID, text: 'CakePHP' },
//           ],
//         },
//       },
//       {
//         id: 4,
//         type: 'radio',
//         question: 'Which Laravel version do you use?',
//         description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//         data: {
//           options: [
//             { uuid: self.crypto.randomUUID, text: 'Laravel 5' },
//             { uuid: self.crypto.randomUUID, text: 'Laravel 6' },
//             { uuid: self.crypto.randomUUID, text: 'Laravel 7' },
//             { uuid: self.crypto.randomUUID, text: 'Laravel 8' },
//           ],
//         },
//       },
//       {
//         id: 5,
//         type: 'checkbox',
//         question: 'Which Laravel packages do you use?',
//         description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//         data: {
//           options: [
//             { uuid: self.crypto.randomUUID, text: 'Laravel Debugbar' },
//             { uuid: self.crypto.randomUUID, text: 'Laravel Telescope' },
//             { uuid: self.crypto.randomUUID, text: 'Laravel Horizon' },
//             { uuid: self.crypto.randomUUID, text: 'Laravel Sanctum' },
//           ],
//         },
//       },
//       {
//         id: 6,
//         type: 'text',
//         question: 'What is your favorite Youtube channel?',
//         description: null,
//         data: {},
//       },
//       {
//         id: 7,
//         type: 'textarea',
//         question: 'What do you think about this survey?',
//         description: "I'm so excited to see the results of this survey and I hope it will be a success and I will be able to make a lot of money from it",
//         data: {},
//       },
//     ],
//   },
//   {
//     id: 200,
//     title: 'Laravel 9',
//     slug: 'laravel-9',
//     status: 'active',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png',
//     description: 'Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable, creative experience to be truly fulfilling. Laravel attempts to take the pain out of development by easing common tasks used in the majority of web projects, such as authentication, routing, sessions, queueing, and caching.',
//     created_at: '2021-01-20 18:00:00',
//     updated_at: '2021-01-20 18:00:00',
//     expired_at: '2021-01-31 18:00:00',
//     questions: [],
//   },
//   {
//     id: 300,
//     title: 'Vue 3',
//     slug: 'vue-3',
//     status: 'active',
//     image: 'https://vuejs.org/images/logo.png',
//     description: 'Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces.',
//   },
//   {
//     id: 400,
//     title: 'Tailwind 3',
//     slug: 'tailwind-3',
//     status: 'active',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png',
//     description: 'Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.',
//   },
// ];

const store = createStore({
  state: {
    user: {
      data: {},
      token: sessionStorage.getItem('TOKEN'),
    },
    dashboard: {
      loading: false,
      data: {},
    },
    currentSurvey: {
      loading: false,
      data: {},
    },
    surveys: {
      loading: false,
      links: [],
      data: [],
    },
    questionTypes: ["checkbox", "radio", "select", "text", "textarea"],
    notification: {
      show: false,
      type: null,
      message: null,
    }
  },
  getters: {},
  actions: {
    getDashboardData({ commit }) {
      commit('dashboardLoading', true)
      return axiosClient.get(`/dashboard`)
        .then((res) => {
          commit('dashboardLoading', false)
          commit('setDashboardData', res.data)
          return res;
        })
        .catch(error => {
          commit('dashboardLoading', false)
          return error;
        })
    },
    getSurvey({ commit }, id) {
      commit("setCurrentSurveyLoading", true);
      return axiosClient
        .get(`/survey/${id}`)
        .then((res) => {
          commit("setCurrentSurvey", res.data);
          commit("setCurrentSurveyLoading", false);
          return res;
        })
        .catch((err) => {
          commit("setCurrentSurveyLoading", false);
          throw err;
        });
    },
    saveSurvey({ commit }, survey) {
      delete survey.image_url;
      let response;
      if (survey.id) {
        response = axiosClient.put(`/survey/${survey.id}`, survey)
          .then((res) => {
            commit('setCurrentSurvey', res.data);
            return res;
          });
      } else {
        response = axiosClient.post('/survey', survey).then((res) => {
          commit('setCurrentSurvey', res.data);
          return res;
        });
      }

      return response;
    },
    getSurveys({ commit }, { url = null } = {}) {
      commit('setSurveysLoading', true)
      url = url || "/survey";
      return axiosClient.get(url).then((res) => {
        commit('setSurveysLoading', false)
        commit("setSurveys", res.data);
        return res;
      });
    },
    deleteSurvey({ dispatch }, id) {
      return axiosClient.delete(`/survey/${id}`).then((res) => {
        dispatch('getSurveys')
        return res;
      });
    },
    getSurveyBySlug({ commit }, slug) {
      commit("setCurrentSurveyLoading", true);
      return axiosClient
        .get(`/survey-by-slug/${slug}`)
        .then((res) => {
          commit("setCurrentSurvey", res.data);
          commit("setCurrentSurveyLoading", false);
          return res;
        })
        .catch((err) => {
          commit("setCurrentSurveyLoading", false);
          throw err;
        });
    },
    saveSurveyAnswer({ commit }, { surveyId, answers }) {
      return axiosClient.post(`/survey/${surveyId}/answer`, { answers });
    },
    register({ commit }, user) {
      return axiosClient.post('/register', user)
        .then(({ data }) => {
          commit('setUser', data);
          return data;
        });
    },
    login({ commit }, user) {
      return axiosClient.post('/login', user)
        .then(({ data }) => {
          commit('setUser', data);
          return data;
        });
    },
    logout({ commit }) {
      return axiosClient.post('/logout')
        .then(response => {
          commit('logout');
          return response;
        })
    },
  },
  mutations: {
    dashboardLoading: (state, loading) => {
      state.dashboard.loading = loading;
    },
    setDashboardData: (state, data) => {
      state.dashboard.data = data
    },
    setCurrentSurveyLoading: (state, loading) => {
      state.currentSurvey.loading = loading;
    },
    setSurveysLoading: (state, loading) => {
      state.surveys.loading = loading;
    },
    setCurrentSurvey: (state, survey) => {
      state.currentSurvey.data = survey.data;
    },
    setSurveys: (state, surveys) => {
      state.surveys.links = surveys.meta.links;
      state.surveys.data = surveys.data;
    },
    logout: (state) => {
      state.user.data = {};
      state.user.token = null;
      sessionStorage.removeItem('TOKEN');
    },
    setUser: (state, user) => {
      state.user.data = user.user;
      state.user.token = user.token;
      sessionStorage.setItem('TOKEN', user.token);
    },
    notify: (state, { message, type }) => {
      state.notification.show = true;
      state.notification.type = type;
      state.notification.message = message;
      setTimeout(() => {
        state.notification.show = false;
      }, 3000)
    },
  },
  modules: {}
})

export default store;
