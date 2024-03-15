import styled from 'styled-components';
import { MdEmail } from 'react-icons/md';
import { MdPhone } from 'react-icons/md';
import { BsInstagram } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';

const styles = {
  //Icons
  EmailIcon: styled(MdEmail)`
    height: 2.5rem;
    width: 2.5rem;
    color: #ffffff;
  `,
  PhoneIcon: styled(MdPhone)`
    height: 2.5rem;
    width: 2.5rem;
    color: #ffffff;
  `,
  InstagramIcon: styled(BsInstagram)`
    height: 2.5rem;
    width: 2.5rem;
    color: #ffffff;
  `,
  LocationIcon: styled(MdLocationOn)`
    height: 2.5rem;
    width: 2.5rem;
    color: #ffffff;
  `,
  ContactsSection: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    height: 400px;
    margin-top: 5rem;
    scroll-margin-top: 7rem;
    padding: 0 1.5rem;
    @media (max-width: 900px) {
      height: 700px;
    }
  `,
  MapAndContacts: styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
    height: 100%;
    @media (max-width: 900px) {
      flex-direction: column;
      align-items: center;
    }
  `,
  Title: styled.h2`
    /* font-family: LuloClean, sans-serif; */
    font-size: 3.5rem;
    color: #cc8076;
    @media (max-width: 768px) {
      font-size: 3rem;
    }
  `,
  ContactsColumn: styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: #e6bbb5;
    /* border: 4px solid #cc8076; */
    box-shadow: rgb(50 50 93 / 25%) 0px 2px 5px -1px,
      rgb(0 0 0 / 30%) 0px 1px 3px -1px;
    /* border-radius: 0.5rem; */
    @media (max-width: 900px) {
      width: 100%;
    }
  `,
  ContactsContainer: styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* width: 100%; */
    gap: 1rem;
    /* border: 4px solid #e6bbb5; */
    padding: 1.5rem;
  `,
  MapContainer: styled.div`
    width: 60%;
    height: 100%;
    /* border-radius: 0.5rem; */
    @media (max-width: 900px) {
      width: 100%;
    }
  `,
  ContactRow: styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    @media (max-width: 375px) {
      flex-direction: column;
    }

    a {
      display: flex;
      gap: 1rem;
      align-items: center;

      &:hover {
        p {
          color: #cc8076;
        }

        svg {
          color: #cc8076;
        }
      }
    }
  `,
  SubTitle: styled.h2`
    font-size: 2rem;
    color: #ffffff;
    display: flex;
    justify-content: center;
    /* padding: 1rem 0; */
  `,
  InfoText: styled.p`
    color: #ffffff;
    font-size: 1rem;
    height: fit-content;
  `,
};

export default styles;
