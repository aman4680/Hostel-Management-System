import { HttpHandler, HttpInterceptor, HttpRequest, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthHeaderInterceptorService implements HttpInterceptor{

  constructor(private tokenStorage: TokenStorageService) { }

  intercept( req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
    console.log(`Request made to: ` + req.url);
    const token = this.tokenStorage.getToken();
    const clonedRequest = req.clone({
      headers: req.headers.set('Authorization', token? `Bearer ${token}`: '')
    });
    return next.handle(clonedRequest);
  }
}

