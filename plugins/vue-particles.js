import Vue from 'vue'
import VParticles from 'vue-particles'

const VueParticles = {
    install(Vue, options) {
        Vue.component('v-particles', VParticles)
    }
};

Vue.use(VueParticles)

export default VueParticles;