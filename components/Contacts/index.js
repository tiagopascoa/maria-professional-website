import S from "./styles";
//Components
import Map from "../Map";

const ContactAndBooking = () => {
  return (
    <S.ContactsSection id="contacts">
      <S.Title>Contactos</S.Title>
      <S.MapAndContacts>
        <S.MapContainer>
            <Map />
        </S.MapContainer>
        <S.ContactsColumn>
          <S.ContactsContainer>
            {/* <S.SubTitle>Onde Estou?</S.SubTitle> */}
            <S.ContactRow>
              <S.LocationIcon />
              <S.InfoText>Largo Vitorino Damásio, 4, Lisboa</S.InfoText>
            </S.ContactRow>
            {/* <S.SubTitle>Marcações</S.SubTitle> */}
            <S.ContactRow>
              <S.EmailIcon />
              <S.InfoText>mariacmoreira.mtc@gmail.com</S.InfoText>
            </S.ContactRow>
            <S.ContactRow>
              <S.PhoneIcon />
              <S.InfoText>91 000 00 00</S.InfoText>
            </S.ContactRow>
            <S.ContactRow>
              <S.InstagramIcon />
              <S.InfoText>@mariacmoreira.mtc</S.InfoText>
            </S.ContactRow>
          </S.ContactsContainer>
        </S.ContactsColumn>
      </S.MapAndContacts>
    </S.ContactsSection>
  );
};

export default ContactAndBooking;
