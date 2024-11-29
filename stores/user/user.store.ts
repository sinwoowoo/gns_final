import { defineStore } from 'pinia';
import { ApiService } from '@/service/api.service';

export const useUserStore = defineStore('user', {
  state: () => ({    
    userId: null, //
    isAuthenticated: false, //권한
    token: null,    
  }),
  getters: {
    isUserAuthenticated: (state) => {
      if(state.userId != null){
        return state.isAuthenticated;
      }      
    }
  },
  actions: {
    async login(memId: string, memPwd: string): Promise<string | null> {
        const params = new URLSearchParams(window.location.search);
        //const redirectTo = params.get('redirectTo');
        const redirectTo = "/";

        const params1 = ApiService.Instance.post(
            '/auth/singin',
            //'/user/login',
            { // 객체 형태로 요청 본문 데이터 전달
              memId,
              memPwd,
              redirectTo
            },
            { 
              headers: {
                'Content-Type': 'application/json', // JSON 타입의 컨텐트 타입 헤더를 유지
                'Access-Control-Allow-Method':'POST',
              },
              notNeedAuth: true,              
            },            
        );
            
        //return redirectTo != null ? decodeURIComponent(redirectTo) : null;
        return params1;
    },
  },
});