import React from "react";

export default function Contatos(){
return(



  <>
 


    <h3>Central de reservas e informações:</h3>
    <p>Whatsapp: (11) 3657-3456</p>
    <p>E-mail: viagenstur@gmail.com</p>
<br/>
<br/>
<br/>

<form>
        <div className="container">
          <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Nome</label>
        <input type="Nome" className="form-control" id="exampleFormControlInput1"  placeholder="Nome Completo"/>
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">E-mail</label>
        <input type="E-mail" className="form-control" id="exampleFormControlInput1"  placeholder="nome@ex"/>
           </div>
            <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Assunto</label>
        <input type="Assunto" className="form-control" id="exampleFormControlInput1"  placeholder=""/>
         
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Comentário</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div className="form-group ">
        <button type="submit">Enviar</button>
      </div>
    </div>
     
     
    </form>

    </>
  

 


);

}