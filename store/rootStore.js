import { action, observable, computed, runInAction, makeObservable } from "mobx"
import { enableStaticRendering } from "mobx-react"
import { useMemo } from "react"
import Router from "next/router"

import { io } from "socket.io-client";

import UIStore from "./ui/uiStore";
import HomeStore from "./home/homeStore";
import KnowledgeStore from "./knowledge/knowledgeStore";
import ManagmentStore from "./managment/managmentStore";
import SettingsStore from "./settings/settingsStore";
import ContentStore from "./content/contentStore";
import AuthorizationStore from "./authorization/authorizationStore";
import MessageStore from "./message/messageStore";
import ProfileStore from "./profile/profileStore";
import CommunityStore from "./community/communityStore";


enableStaticRendering(typeof window === "undefined")

let store
// console.log(process.env)

class RootStore {
  url = process.env.NEXT_PUBLIC_SERVER_URL
  constructor() {
    this.uiStore = new UIStore(this)
    this.homeStore = new HomeStore(this)
    this.knowledgeStore = new KnowledgeStore(this)
    this.managmentStore = new ManagmentStore(this)
    this.settingsStore = new SettingsStore(this)
    this.contentStore = new ContentStore(this)
    this.authorizationStore = new AuthorizationStore(this)
    this.messageStore = new MessageStore(this)
    this.profileStore = new ProfileStore(this)
    this.communityStore = new CommunityStore(this)
    makeObservable(this)
  }


  // socket = io("http://f877-188-242-138-193.ngrok.io/", {
  //   withCredentials: true,
  // });

  @action getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  @action async fetchData(url, method, data) { // mode, cache, credentials, redirect, referrerPolicy
    // Default options are marked with *
    try {
      let response = null
      if (data != null) {
        response = await fetch(url, {
          method: method, // *GET, POST, PUT, DELETE, etc.
          //mode: "no-cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "include", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
          },
          // redirect, // manual, *follow, error
          // referrerPolicy, // no-referrer, *client
          body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
      }
      if (data == null) {
        response = await fetch(url, {
          method: method, // *GET, POST, PUT, DELETE, etc.
          //mode: "no-cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "include", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
          },
          // redirect, // manual, *follow, error
          // referrerPolicy, // no-referrer, *client
        });
      }
      //console.log(response.headers)
      if (response.ok) {
        const string = await response.text();
        const json = string === "" ? {} : JSON.parse(string);
        return json; // parses JSON response into native JavaScript objects
      } else {
        const string = await response.text();
        const json = string === "" ? {} : JSON.parse(string);
        return json;
      }
    } catch (error) {
      //console.log(error)
      console.log("Возникла проблема с вашим fetch запросом: ", error.message);
    }
  }

  @action async fetchDataScr(url, method, data = null) { // mode, cache, credentials, redirect, referrerPolicy
    // Default options are marked with *
    try {
      //console.log("Печенье:", this.getCookie("csrf_access_token"))
      let response = null
      if (data != null) {
        response = await fetch(url, {
          method: method, // *GET, POST, PUT, DELETE, etc.
          //mode: "no-cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "include", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
          },
          // redirect, // manual, *follow, error
          // referrerPolicy, // no-referrer, *client
          body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
      }
      if (data == null) {
        response = await fetch(url, {
          method: method, // *GET, POST, PUT, DELETE, etc.
          //mode: "no-cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "include", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
          },
          // redirect, // manual, *follow, error
          // referrerPolicy, // no-referrer, *client
        });
      }
      console.log("response", response)

      if (response.status === 422 || response.status === 401) {
        const router = Router
        router.push("/login")
        return null
      }
      if (response.ok) {
        const string = await response.text();
        const json = string === "" ? {} : JSON.parse(string);
        return json; // parses JSON response into native JavaScript objects
      } else {
        const string = await response.text();
        const json = string === "" ? {} : JSON.parse(string);
        return json;
      }
    } catch (error) {
      // console.log(error)
      console.log("Возникла проблема с вашим fetch запросом: ", error.message);
    }
  }

}

function initializeStore(initialData = null) {
  const _store = store ?? new RootStore()

  // If your page has Next.js data fetching methods that use a Mobx store, it will
  // get hydrated here
  if (initialData) {
    _store.hydrate(initialData)
  }
  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
