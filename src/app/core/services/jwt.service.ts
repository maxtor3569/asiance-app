import {Injectable} from '@angular/core';


@Injectable()
export class JwtService {

    getToken(): string {
        return window.localStorage['jwtToken'];
    }

    getUserId(): string {
        return window.localStorage['user_id'];
    }

    saveToken(token: string) {
        window.localStorage['jwtToken'] = token;
    }

    saveUserId(id: number) {
        window.localStorage['user_id'] = id;
    }

    destroyToken() {
        window.localStorage.removeItem('jwtToken');
    }

}
