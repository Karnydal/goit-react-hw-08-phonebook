// import ContactForm from 'components/ContactForm/ContactForm';
// import ContactList from 'components/ContactList/ContactList';
// import ContactFilter from 'components/ContactFilter/ContactFilter';
// import Section from 'components/Section/Section';
// import { useGetContactsQuery } from 'redux/contactsApi';

import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Contacts from 'view/ContactsView';
import LoginView from 'view/LoginView';
import RegisterView from 'view/RegisterView';
import Navigation from './Navigation/Navigation';
import { getToken } from "redux/authSlice";
import PrivateRoute from 'Routes/PrivatRoute';
import PublicRoute from 'Routes/PublicRoute';
import { useGetCurrentUserQuery } from "redux/authApi"

// function App() {
//   const { data: contacts, isLoading } = useGetContactsQuery();
//   return (
//     <Section>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <h2>Contacts</h2>

//       {contacts?.length > 0 && (
//         <>
//           <ContactFilter />
//         </>
//       )}
//       {isLoading && <p>Loading...</p>}
//       {contacts?.length === 0 && !isLoading && <p>Contact list is empty</p>}
//       <ContactList />
//     </Section>
//   );
// }

function App() {
  const token = useSelector(getToken);
  useGetCurrentUserQuery(null, { skip: !token });
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route
            path="register"
            element={
              <PublicRoute restricted>
                <RegisterView />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute restricted>{!token && <LoginView />}</PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
