import { createStore } from 'vuex'
import axios from 'axios'

// Create a new store instance.
const store = createStore({
  state() {
    return {
      projects: [],
    }
  },
  getters: {
    getProjects: (state) => { return state.projects },
    getProjectById: (state) => (id) => {
      return state.projects[id];
    },
    getProjectByName: (state) => (name) => {
      return state.projects.find(project => project.name === name);
    },
    getProjectsWithTags: (state) => (tags) => {
      return state.projects.filter(project => project.tags.some(tag => tags.includes(tag)));
    }
  },
  mutations: {
    loadProjects(state, link) {
      axios.get(link).then(response => {
        state.projects = response.data;
      });
    }
  }
})

store.commit("loadProjects", "/data/fr_projects.json");

export default store