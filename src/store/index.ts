import { createStore } from 'vuex'

import { employeeModule } from '@/store/employeeModule'
import { navigationModule } from '@/store/navigationModule'
import { chooseLocationModule } from '@/store/chooseLocationModule'


export default createStore({
  state: {
    gameStarted: false,
    gameFinished: false,
    isAuth: false,
    student: null
  },
  mutations: {
    setGameStarted(state: any, payload: boolean): void {
      state.gameStarted = payload
    },
    setIsAuth(state: any, payload: boolean): void {
      state.isAuth = payload
    },
    setGameFinished(state: any, payload: boolean): void {
      state.gameFinished = payload
    },
    setStudent(state: any, obj: any): void {
      state.student = obj
    },
    setStudentField(state: any, {field, payload}: {field: string, payload: any}): void {
      state.student[field] = payload
    }
  },
  modules: {
    employeeModule,
    navigationModule,
    chooseLocationModule
  }
})