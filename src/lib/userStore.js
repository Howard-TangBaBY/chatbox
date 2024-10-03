import { create } from 'zustand'
import { database } from './firebase';
import { doc, getDoc } from 'firebase/firestore';

export const useUserStore = create((set) => ({
  current: null,
  isLoading:true,
  fetchUserInfo: async (uid) => {
    if(!uid) return set({currentUser: null, isLoading: false})

    try {
      const docRef = doc(database, "users", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        set({currentuser: docSnap.data(), isLoading: false })
      }else{
        set({currentuser: null, isLoading: false })
      }
    } catch (err) {
      console.log(err)
      return set({currentUser: null, isLoading: false})
    }
  }
}))