import {Container, LeftContainer, Title, SubTitle, Button, Image, RightContainer} from './styles'
import { Link } from "react-router-dom";

export default function Home(){
  return (
    <Container>
      <LeftContainer>
        <Title>Mapa da sua cidade</Title>
       
        <SubTitle>Se você quer conhecer um restaurante novo, por exemplo, rapidamente tem acesso a localização de estabelecimentos ao seu redor.</SubTitle>

        <Link to="/new">
          <Button>
            Cadastre uma localização de comércio
          </Button>
        </Link>
      </LeftContainer>

      <RightContainer>
        <Image />
      </RightContainer>
    </Container>
  )
}