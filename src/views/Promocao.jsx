import React from "react";

export default function Promocao() {
    return (
        
      <>
<h2>Aproveite as nossas promoções!</h2>
<p>Temos os melhores preços do mercado e também cobrimos as ofertas dos concorrentes.</p>
<p>Desenvolvedores tem 10% de desconto.</p>
<br/>
<div className = "container">
<img src="https://images.pexels.com/photos/4172523/pexels-photo-4172523.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" classname="rounded d-block h-25" alt="..."/>
<div className="texto">
        <p style= {{ margin: "15px"}}>Destino: Salvador/BA</p>
        <p style= {{ margin: "15px"}}>Viajar em Abril/2022</p>
        <p style= {{ margin: "15px"}}>Vôo direto</p>
        <p style= {{ margin: "15px"}}>03 diarias</p>
        <p style= {{ margin: "15px"}}>R$ 845,00 por pessoa</p>
    </div>
<img src="https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="rounded d-block h-25" alt="..."/>

<p style= {{ margin: "15px"}}>Destino: Ilha de Santorini/Grécia</p>
        <p style ={{ margin: "15px"}}>Viajar em Setembro/2022</p>
        <p style= {{ margin: "15px"}}>Vôo com escala em Portugal</p>
        <p style= {{ margin: "15px"}}>05 diarias</p>
        <p style= {{ margin: "15px"}}>R$ 1745,00 por pessoa</p>
        </div>
    </>  

       
    );
}