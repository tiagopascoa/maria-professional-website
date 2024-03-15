import S from './styles';
//Components
import Map from '../Map';

const ContactAndBooking = ({ t }) => {
  return (
    <S.ContactsSection id="contacts">
      <S.Title>{t('home:contact.contactTitle')}</S.Title>
      <S.MapAndContacts>
        <S.MapContainer>
          <Map />
        </S.MapContainer>
        <S.ContactsColumn>
          <S.ContactsContainer>
            <S.ContactRow>
              <a
                href="https://wa.me/351917174650"
                target="_blank"
                rel="noopener noreferrer"
              >
                <S.LocationIcon />
                <S.InfoText>Lisboa | Almada</S.InfoText>
              </a>
            </S.ContactRow>
            <S.ContactRow>
              <a href="mailto:mariacmoreira.mtc@gmail.com">
                <S.EmailIcon />
                <S.InfoText>mariacmoreira.mtc@gmail.com</S.InfoText>
              </a>
            </S.ContactRow>
            <S.ContactRow>
              <a
                href="https://wa.me/351917174650"
                target="_blank"
                rel="noopener noreferrer"
              >
                <S.PhoneIcon />
                <S.InfoText>+351 917 174 650</S.InfoText>
              </a>
            </S.ContactRow>
            <S.ContactRow>
              <a
                href="https://www.instagram.com/mariacmoreira.mtc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <S.InstagramIcon />
                <S.InfoText>@mariacmoreira.mtc</S.InfoText>
              </a>
            </S.ContactRow>
          </S.ContactsContainer>
        </S.ContactsColumn>
      </S.MapAndContacts>
    </S.ContactsSection>
  );
};

export default ContactAndBooking;
