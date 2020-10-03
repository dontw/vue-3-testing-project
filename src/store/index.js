import { createStore } from 'vuex';

import coachesModule from './modules/coaches'
import requestsModule from './modules/requests'

const store = createStore({
    modules:{
        coaches: coachesModule,
        request: requestsModule
    }
})

export default store