import { firestore, getServerTimeStamp } from '../config/firebase';
import { ContactType } from '../@types';

export const sendContact = (values: ContactType): Promise<any> =>
  firestore.collection(process.env.REACT_APP_FIREBASE_COLLECTION || '').add({
    ...values,
    createdAt: getServerTimeStamp(),
  });
