import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { LoginService } from 'src/app/services/login.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private LoginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

userModel = new User();

mensagem = ""

receberDados(){
  console.log (this.userModel)

  const listaPalavras: string[] = ["select ", "from ", "drop ", "or ", "having ", "group ", "by ", "insert ", "exec ", "\"", "\'", "--", "#", "*", ";" ] 

  listaPalavras.forEach(palavra => {
    if(this.userModel.email?.toLowerCase().includes(palavra)) {
      this.mensagem = "Dados invalidos"

      return;
    }
  });

  this.LoginService.login(this.userModel).subscribe( (response) => {
   this.mensagem = "Login com sucesso!"
    this.router.navigateByUrl("/")

  }, (erro) => {
   this.mensagem = erro.error;
   
  })
}
  
}
