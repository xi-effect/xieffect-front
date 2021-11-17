import {
  action,
  observable,
  computed,
  runInAction,
  makeObservable,
} from "mobx";

import Router from 'next/router'
const router = Router
class KnowledgeStore {
  // `this` from rootstore passed to the constructor and we can
  // assign it to a variable accessible in this class called
  // `rootStore`. Therefore, we can access other store like
  // useStore for e.g (this.rootStore.userStore)
  constructor(rootStore) {
    this.rootStore = rootStore;
    makeObservable(this);
  }

  //PageList

  @observable pageList = {
    pages: [],
    counter: 0,
    search: "",
    loadingInd: true,
    loadingNothing: false,
  };

  @action setPageListData = (name, value) => {
    this.pageList[name] = value;
  };

  @action prevPageInPages = () => {
    this.setPageListData("counter", this.pageList.counter - 1);
    this.loadPageList();
  };

  @action nextPageInPages = () => {
    this.setPageListData("counter", this.pageList.counter + 1);
    this.loadPageList();
  };

  @action goSearchInPages = () => {
    this.setPageListData("loadingNothing", false);
    this.setPageListData("counter", 0);
    this.loadPageList(true);
    console.log("pageList", this.pageList);
  };

  @action clearSearchInPages = () => {
    this.setPageListData("loadingNothing", false);
    this.setPageListData("search", "");
    this.setPageListData("counter", 0);
    this.loadPageList();
  };

  @action loadPageList = (isSearch = false) => {
    this.rootStore
      .fetchDataScr(`${this.rootStore.url}/pages/`, "POST", {
        counter: this.pageList.counter,
        search: this.pageList.search,
      })
      .then((data) => {
        console.log("loadPageList", data);
        this.setPageListData("pages", data.results);
        this.setPageListData("loadingInd", false);
        if (isSearch && data.results.length === 0)
          this.setPageListData("loadingNothing", true);
      });
  };

  //Page

  @observable page = {
    loading: true,
    id: null,
    name: "",
    description: "",
    theme: "",
    kind: "",
    components: [],
    blueprint: null,
    reusable: null,
    public: null,
    authorId: null,
    authorName: null,
    views: null,
    updated: null,
    quizCounter: 0,
    rightAnswersCounter: 0,
  };

  @action setAnswer = (type, indexComp, indexAnswer) => {
    if (type === "single") {
      this.module.answers[indexComp] = indexAnswer;
    }
    if (type === "multiple") {
      if (indexComp in this.module.answers) {
        if (this.module.answers[indexComp].includes(indexAnswer)) {
          this.module.answers[indexComp] = this.module.answers[
            indexComp
          ].filter((item) => {
            return item !== indexAnswer;
          });
        } else {
          this.module.answers[indexComp].push(indexAnswer);
        }
      } else {
        this.module.answers[indexComp] = [];
        console.log("iut", this.module.answers[indexComp]);
        this.module.answers[indexComp].push(indexAnswer);
      }
    }
  };

  @action isAnswerRight = (type, index) => {
    if (type === 'single') {
      this.page.components[index].content.forEach((item, itemIndex)  => {
        if (this.module.answers[index] === itemIndex && !item.rightAnswer) {
          this.page.components[index].successAnswer = false 
          return;
        }
      })
    }
    if (type === 'multiple') {
      this.page.components[index].content.forEach((item, itemIndex)  => {
        if (this.module.answers[index].includes(itemIndex) && !item.rightAnswer) {
          this.page.components[index].successAnswer = false 
          return;
        }
      })
    }
    this.page.components[index].successAnswer = true 
    // console.log("logs", this.page.components[index]);
  };

  @action setComponentsContent = (index, indexA, name, value) => {
    this.page.components[index].content[indexA][name] = value;
  };

  @action setPage = (value) => {
    this.page = value;
  };

  @action setPageData = (name, value) => {
    this.page[name] = value;
  };

  @action loadPage = () => {
    this.setPageData("loading", true);
    let str = document.location.href.toString();
    const id = str.slice(str.lastIndexOf("/") + 1);
    console.log("id", id);
    this.rootStore
      .fetchDataScr(`${this.rootStore.url}/pages/${id}/`, "GET")
      .then((data) => {
        console.log("meta", data);
        this.setPage(data);
        this.setPageData("authorId", data["author-id"]);
        this.setPageData("authorName", data["author-name"]);
        this.setPageData("answers", {});
        this.setPageData("loading", false);
      });
  };

  //ModuleList

  @observable moduleList = {
    modules: [],
    counter: 0,
    search: "",
    filters: {
      global: null,
      category: null,
      theme: null,
      difficulty: null,
    },
    sort: "popularity",
    loadingInd: true,
    loadingNothing: false,
  };

  @action setModuleListData = (name, value) => {
    this.moduleList[name] = value;
  };

  @action setModuleListDataSecondary = (name, secondName, value) => {
    this.moduleList[name][secondName] = value;
  };

  @action setModuleListDataInModules = (index, name, value) => {
    this.moduleList.modules[index][name] = value;
  };

  @action prevPageInModules = () => {
    this.setModuleListData("counter", this.moduleList.counter - 1);
    this.loadModuleList();
  };

  @action nextPageInModules = () => {
    this.setModuleListData("counter", this.moduleList.counter + 1);
    this.loadModuleList();
  };

  @action goSearchInModules = () => {
    this.setModuleListData("loadingNothing", false);
    this.setModuleListData("counter", 0);
    this.loadModuleList(true);
    console.log("moduleList", this.moduleList);
  };

  @action clearSearchInModules = () => {
    this.setModuleListData("loadingNothing", false);
    this.setModuleListData("search", "");
    this.setModuleListData("counter", 0);
    this.loadModuleList();
  };

  @action clearFilters = () => {
    this.setModuleListDataSecondary("filters", "global", null);
    this.setModuleListDataSecondary("filters", "category", null);
    this.setModuleListDataSecondary("filters", "theme", null);
    this.setModuleListDataSecondary("filters", "difficulty", null);
    this.loadModuleList();
  };

  @action setPreferenceInModules = (index, indexName, id, name, value) => {
    this.rootStore
      .fetchDataScr(`${this.rootStore.url}/modules/${id}/preference/`, "POST", {
        a: name,
      })
      .then((data) => {
        if (data.a) {
          if (name != "hide")
            this.setModuleListDataInModules(index, indexName, value);
          if (name === "hide") this.loadModuleList();
        }
      });
  };

  @action loadModuleList = (isSearch = false) => {
    let filters = {};
    if (this.moduleList.filters.global != null)
      filters.global = this.moduleList.filters.global;
    if (this.moduleList.filters.category != null)
      filters.category = this.moduleList.filters.category;
    if (this.moduleList.filters.theme != null)
      filters.theme = this.moduleList.filters.theme;
    if (this.moduleList.filters.difficulty != null)
      filters.difficulty = this.moduleList.filters.difficulty;
    if (
      this.moduleList.filters.global === null &&
      this.moduleList.filters.category === null &&
      this.moduleList.filters.theme === null &&
      this.moduleList.filters.difficulty === null
    )
      filters = null;
    this.setModuleListData("loadingInd", true);
    this.rootStore
      .fetchDataScr(`${this.rootStore.url}/modules/`, "POST", {
        filters: filters,
        counter: this.moduleList.counter,
        search: this.moduleList.search,
        sort: this.moduleList.sort,
      })
      .then((data) => {
        console.log("loadModuleList", data);
        this.setModuleListData("modules", data.results);
        this.setModuleListData("loadingInd", false);
        if (isSearch && data.results.length === 0)
          this.setModuleListData("loadingNothing", true);
      });
  };

  @observable module = {
    loading: true,
    openAccordion: false,
    id: null,
    name: "",
    description: "",
    theme: "",
    kind: "",
    components: [],
    map: [],
    type: "",
    blueprint: null,
    reusable: null,
    public: null,
    authorId: null,
    authorName: null,
    views: null,
    updated: null,
    activeIdInMap: null,
    answers: {},
  };

  @action clearModule = () => {
    this.module = {};
  };

  @action setModule = (value) => {
    this.module = value;
  };

  @action setModuleData = (name, value) => {
    this.module[name] = value;
  };

  @action loadPageInModule = (pageId = null, first = null) => {
    this.setPageData("loading", true);
    if (
      this.module.type === "practice-block" ||
      this.module.type === "standard"
    ) {
      this.rootStore
        .fetchDataScr(
          `${this.rootStore.url}/modules/${this.module.id}/next/`,
          "POST",
          { bun: "cinnamon" }
        )
        .then((data) => {
          console.log("pageInModule", data);
          if (data?.a === "You have reached the end") {
            this.loadModule();
          } else {
            this.setPage(data);
            router.push(`/knowledge/module/${this.module.id}/${this.page.id}`)
            this.setPageData("loading", false);
          }
        });
    }
    if (this.module.type === "theory-block") {
      this.rootStore
        .fetchDataScr(
          `${this.rootStore.url}/modules/${this.module.id}/points/${pageId}/`,
          "GET"
        )
        .then((data) => {
          console.log("pageInModule", data);
          if (pageId === this.module.map.length) {
            this.loadPageInModule(0);
          } else {
            this.setModuleData("activeIdInMap", pageId);
            this.setPage(data);
            router.push(`/knowledge/module/${this.module.id}/${pageId}`)
            this.setPageData("loading", false);
          }
        });
    }
    if (this.module.type === "test") {
      if (first === null) {
        this.setModuleData("answers", { a: true });
        this.setPageData("quizCounter", 0);
        this.setPageData("rightAnswersCounter", 0);
        this.page.components.forEach((item) => {
          if (item.type === "quiz")
            this.setPageData("quizCounter", this.page.quizCounter + 1);
        });
        this.rootStore
          .fetchDataScr(
            `${this.rootStore.url}/modules/${this.module.id}/points/${pageId}/reply/`,
            "POST",
            {
              answers: {
                pageName: this.page.name,
                ...this.module.answers,
              },
              "right-answers": this.page.components.rightAnswersCounter,
              "total-answers": this.page.components.quizCounter,
            }
          )
          .then((data) => {

          });
      }
      this.rootStore
        .fetchDataScr(
          `${this.rootStore.url}/modules/${this.module.id}/points/${pageId}/`,
          "GET"
        )
        .then((data) => {
          console.log("pageInModule", data);
          if (pageId === this.module.map.length) {
            this.loadPageInModule(0);
          } else {
            this.setModuleData("activeIdInMap", pageId);
            this.setPage(data);
            router.push(`/knowledge/module/${this.module.id}/${pageId}`)
            this.setPageData("loading", false);
            console.log("pageInModule2", this.page);
          }
        });
    }
  };

  @action loadModule = () => {
    this.setModuleData("loading", true);
    this.setPageData("loading", true);
    // Получение id из url
    let str = document.location.href.toString();
    console.log("str", str);
    const firstId = str.slice(str.lastIndexOf("/") + 1);
    str = str.slice(0, str.lastIndexOf("/"));
    console.log("str", str);
    const secondId = str.slice(str.lastIndexOf("/") + 1);
    let lastId = null;
    
    if (secondId === "module") lastId = firstId;
    else lastId = secondId;
    console.log("lastId", lastId);
    console.log("firstId", firstId);
    console.log("secondId", secondId);

    this.rootStore
      .fetchDataScr(`${this.rootStore.url}/modules/${lastId}/`, "GET")
      .then((data) => {
        console.log("meta", data);
        this.setModule(data);
        this.setModuleData("answers", { a: true });
        this.setModuleData("authorId", data["author-id"]);
        this.setModuleData("openAccordion", false);
        this.setModuleData("loading", false);
        if (this.module.type === "standard") {
          this.rootStore
            .fetchDataScr(
              `${this.rootStore.url}/modules/${this.module.id}/open/`,
              "GET"
            )
            .then((data) => {
              this.setPage(data);
              router.push(`/knowledge/module/${this.module.id}/${this.page.id}`)
              this.setPageData("loading", false);
            });
        } else if (this.module.type === "theory-block") {
          this.rootStore
            .fetchDataScr(
              `${this.rootStore.url}/modules/${this.module.id}/open/`,
              "GET"
            )
            .then((data) => {
              console.log("theory-block", data);
              if (data.id !== null) {
                this.setModuleData("activeIdInMap", data.id);
                this.loadPageInModule(data.id);
              } else {
                this.setModuleData("activeIdInMap", 0);
                this.loadPageInModule(0);
              }
            });
        }
        if (
          this.module.type !== "theory-block" &&
          this.module.type !== "standard"
        ) {
          if (firstId !== 'start') {
            this.setModuleData("activeIdInMap", Number(firstId));
            this.loadPageInModule(Number(firstId), true);
          } else {
            this.setModuleData("activeIdInMap", 0);
            this.loadPageInModule(0, true);
          }

        }
      });
  };
}

export default KnowledgeStore;
