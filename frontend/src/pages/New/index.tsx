import {
  Container,
  Form,
  FormTitle,
  Button,
  ButtonContainer,
  CategoryBox,
  CategoryContainer,
  CategoryImage,
  MapContainer,
  Section,
} from "./styles";

import Input from '../../components/Input';
import {categories} from './categories';

import {useState} from 'react';
import {LatLngExpression} from 'leaflet';
import {TileLayer, Marker} from 'react-leaflet';

export default function New(){

  const [formValues, setFormValues] = useState({
    name: '',
    description: '',
    contact: '',
    category: ''
  })

  return (
    <Container>
      <Form>
        <FormTitle>
          Cadastro de Localização
        </FormTitle>

        <Section>
          Dados
        </Section>

        <Input 
          label='Nome do local' 
          name='name'
          value={formValues.name}
          onChange={setFormValues}
        />

        <Input 
          label='Descrição' 
          name='description'
          value={formValues.description}
          onChange={setFormValues}
        />

        <Input 
          label='Contato' 
          name='contact'
          value={formValues.contact}
          onChange={setFormValues}
        />

        <Section>
          Endereço
        </Section>


        <MapContainer center={{
          lat: 7.022606944207497,
          lng: 7.022606944207497,
        } as LatLngExpression }
          zoom={13}
          whenCreated={() => {}}
        >

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker
          position={[12, 23] as LatLngExpression}
        />

        </MapContainer>

        <Section>
          Categoria
        </Section>

        <CategoryContainer>
          {categories.map(category => (
            <CategoryBox
              key={category.key}
              onClick={() => {
                setFormValues(prev => ({...prev, category: category.key}))
              }}

              isActive={formValues.category === category.key}
            >
              <CategoryImage src={category.url} />
              {category.label}
            </CategoryBox>
          ))}
        </CategoryContainer>

        <ButtonContainer>
          <Button type='submit'>Cadastrar ponto de comércio</Button>
        </ButtonContainer>

      </Form>
    </Container>
  )
}