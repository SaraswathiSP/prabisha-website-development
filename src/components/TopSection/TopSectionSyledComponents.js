import styled from 'styled-components'

export const Section1 = styled.div`
  display: flex;
  height:10vh;
  background-color:rgba(2,3,129,1);
  justify-content:space-between;
  align-items:center;
  padding:15px;
  @media screen and (max-width:768px){
    display:none;
  }
`
export const IconSection = styled.div`
display: flex;
color:#fff;
`
export const ContactInfo1 = styled.div`
display: flex;
justify-content:center;
align-items:center;
margin-right:15px;
`
export const ContactInfo2 = styled.div`
display: flex;
justify-content:center;
align-items:center;
`
export const Text = styled.h4`
color:#fff;
font-size:20px;
`

export const ContactContainer = styled.div`
display: flex;`

export const Section2 = styled.div`
padding:20px;
background-image: url("https://www.prabisha.co.uk/wp-content/uploads/2023/01/pexels-mike-b-6100149-1-1.jpg");
background-size: cover;
min-height:576px
`
export const Section21 = styled.div`
display: flex;
justify-content:space-between;
align-items:center;
@media screen and (max-width:768px){
  display:none;
}

`

export const Section2logo = styled.a`
display: flex;
justify-content:center;
align-items:center;
`
export const Section2NavItems = styled.div`
display: flex;
justify-content:center;
align-items:center;

`
export const NavItem = styled.h1`
color:#fff;
font-size:20px;
margin:10px;
`

export const TextSection = styled.div`
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;`

export const Text1 = styled.h1`
  color:#FFFFFF;
  font-family: "Raleway", Sans-serif;
  font-size: 42px;
  font-weight: 300;
  line-height: 51px;
  letter-spacing: 0px;
  word-spacing: 0px;
  @media screen and (max-width:768px){
    font-size:20px;
    line-height:30px;
    text-align:center;
  }
}
`
export const SpanText = styled.span`
color:#C99B3B;
font-weight: 600;
`
export const Info = styled.p`
color:#fff;
font-size:20px;
`
export const Text2 = styled.h1`
    color: #C99B3B;
    font-weight: 700;
    font-size: 35px;
    @media screen and (max-width:768px){
      font-size:30px;
      font-weight:bold;
      text-align:center;
    }
`

export const Section3 = styled.div`
margin-top:-60px;
margin-left:auto;
margin-right:auto;
text-align:center;
background-color:#C99B3B;
border-radius:15px;
min-height:250px;
padding:30px;
width:70%;
@media screen and (max-width:768px){
  width:80%;
  border-radius:0;

}
`
export const ButtonsContainer = styled.div`
display: flex;
justify-content:center;
align-items:center;
`

export const Button = styled.button`
    font-family: "Roboto", Sans-serif;
    height:45px;
    width:220px;
    margin:15px;
    border:none;
    font-weight: 700;
    text-transform: uppercase;
    font-size:15px;
    fill: #000000;
    text-align:center;
    color: #000000;
    background-color: #FFFFFF;
    border-radius: 0px 0px 0px 0px;
    @media screen and (max-width:768px){
      height:38px;
    width:40%;
      
    }
    `
export const Section4 = styled.div`
  display: flex;
  flex-direction:flex;
    background-color: rgb(169,184,195);
    margin-top:20px;
    padding:80px;
    min-height:520px;
@media screen and (max-width:768px){
    flex-direction:column;
    padding:10px;
    min-height:700px;
`
export const Section41 = styled.div`
margin-top:auto;
margin-bottom:auto;
width:50%;
display: flex;
flex-direction:column;
margin-right:15px;
@media screen and (max-width:768px){
  width:100%;
}

`
export const Section41Heading = styled.h1`
text-align:center;
font-size:30px;
font-weight: 700;
@media screen and (max-width:768px){
  margin-top:40px;
}
`
export const Section41Container = styled.div`
display: flex;
text-align:center;
justify-content:center;
align-items:center;
background-color:rgba(2,3,129,1);
height:90px;
width:100%;
color:#c99b3b;
font-size:30px;
@media screen and (max-width:768px){
width:100%;
font-size:25px;
text-align:center;
height:70px;
}
`
export const Section42 = styled.div`
width:50%;
@media screen and (max-width:768px){
  width:100%;
}

`
export const Section42Info = styled.p`
width:100%;
color:#54595F;
font-size:20px;
@media screen and (max-width:768px){
  font-size:15px;
  margin-top:10px !important;
  margin-bottom:100px !important;
}
`

export const Section5 = styled.div`
display: flex;
justify-content:center;
align-items:center;
margin-top:-60px;
flex-wrap:wrap;
margin-left:auto;
maargin-right:auto;
`

export const Section51Container = styled.div`
display: flex;
justify-content:center;
align-items:center;
background-color:rgba(2,3,129,1);
text-align:center;
height:60px;
width:380px;
color:#c99b3b;
font-size:20px;
margin:10px;
padding:15px;
@media screen and (max-width:768px){
  height:40px;
}
`
export const ClickableButtonContainer = styled.div`
display: flex;
justify-content:center;
align-items:center;
`
export const ClickableButton = styled.a`
background-color:#C99B3B;
display:flex;
justify-content:center;
align-items:center;
color:#010368;
border-radius:12px;
height:50px;
width:280px;
margin:20px;`

export const MobileSectionNavbar = styled.div`
display:flex;
justify-content:space-between;
@media screen and (min-width:768px){
  display:none;
}
`