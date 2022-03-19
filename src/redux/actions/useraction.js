import {
  SIGNUP_ERROR,
  SET_USER,
  SIGNOUT_SUCCESS,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  LOADING_UI,
  IMAGE_ERROR,
  IMAGE_SUCCESS,
  THEME_UPDATE,
  THEME_LOADER,
  RESET_LOADER,
  RESET_UPDATE,
} from "../type/type";
import { showtoast } from "../../toast/toast";

export const signUp =
  (data, history) =>
  (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    dispatch({ type: LOADING_UI });
    firestore
      .collection("users")
      .where("userhandle", "==", data.userhandle)
      .get()
      .then((querysnapshot) => {
        if (querysnapshot.empty) {
          firebase
            .auth()
            .createUserWithEmailAndPassword(data.email, data.password)
            .then((res) => {
              firestore.collection("users").doc(res.user.uid).set({
                userhandle: data.userhandle,
                email: data.email,

                uid: res.user.uid,
                url: data.url,
                theme: "Default theme",
              });

              dispatch({ type: SET_USER, payload: data });
              dispatch({ type: SIGNUP_SUCCESS });
              history.push("/admin");
            });
        } else {
          dispatch({
            type: SIGNUP_ERROR,
            err: { message: "Userhandle already taken" },
          });
        }
      })

      .catch((err) => {
        dispatch({ type: SIGNUP_ERROR, err });
        console.log(err);
      });
  };

export const logIn =
  (data, history) =>
  (dispatch, getState, { getFirebase }) => {
    dispatch({ type: LOADING_UI });
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(() => {
        dispatch({ type: LOGIN_SUCCESS });

        history.push("/admin");
      })
      .catch((err) => {
        dispatch({ type: LOGIN_ERROR, err });
      });
  };
export const logInwithgoogle =
  (history) =>
  (dispatch, getState, { getFirestore, getFirebase }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((res) => {
        console.log(res)
        firestore.collection("users").doc(res.user.uid).set({
          userhandle: res.user.displayName,
          email: res.user.email,

          uid: res.user.uid,
          url: res.user.photoURL,
          theme: "Default theme",
        });
        dispatch({ type: SIGNUP_SUCCESS });

        history.push("/admin");
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: SIGNUP_SUCCESS, err });
      });
  };
export const logInwithfacebook =
  (history) =>
  (dispatch, getState, { getFirestore, getFirebase }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then((res) => {
        firestore.collection("users").doc(res.user.uid).set({
          userhandle: res.user.displayName,
          email: res.user.email,

          uid: res.user.uid,
          url: `https://firebasestorage.googleapis.com/v0/b/webapp-851e5.appspot.com/o/no_img.png?alt=media`,
          theme: "Default theme",
        });
        dispatch({ type: SIGNUP_SUCCESS });

        history.push("/admin");
      })
      .catch((err) => {
        dispatch({ type: SIGNUP_ERROR, err });
      });
  };

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: SIGNOUT_SUCCESS });
      });
  };
};

export const uploadimage =
  (image) =>
  (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();
    const userhandle = getState().firebase.profile.userhandle;
    const uid = getState().firebase.profile.uid;
    const upload = firebase.storage().ref(`${userhandle}`).put(image);
    upload.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        dispatch({ type: IMAGE_ERROR, action: error });
      },
      () => {
        firebase
          .storage()
          .ref(userhandle)
          .getDownloadURL()
          .then((url) =>
            firestore.collection("users").doc(uid).update({
              url: url,
            })
          )
          .then(() => dispatch({ type: IMAGE_SUCCESS }));
      }
    );
  };
export const updatetheme =
  (theme) =>
  (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const uid = getState().firebase.profile.uid;
    dispatch({ type: THEME_LOADER });
    firestore
      .collection("users")
      .doc(uid)
      .update({
        theme: theme,
      })
      .then(() => {
        dispatch({
          type: THEME_UPDATE,
        });
      })
      .then(() => {
        showtoast("Your theme is updated successfully", true);
      })
      .catch((err) => {
        dispatch({
          type: THEME_UPDATE,
        });
        console.log(err);
      });
  };

export const reset =
  (email) =>
  (dispatch, getState, { getFirestore, getFirebase }) => {
    const firebase = getFirebase();
    dispatch({ type: RESET_LOADER });
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        dispatch({ type: RESET_UPDATE });
        showtoast("Email sent successfully.Go check your inbox", true);
      })
      .catch((err) => {
        dispatch({ type: RESET_UPDATE });
        showtoast(err.message, false);
      });
  };
