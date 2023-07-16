"use strict";
exports.id = 504;
exports.ids = [504];
exports.modules = {

/***/ 650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "iL": () => (/* binding */ LanguageProvider),
  "ZK": () => (/* binding */ useLanguage)
});

// UNUSED EXPORTS: LanguageContext

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/utils/constants.ts
const languages = {
    english: "en",
    arabic: "ar"
};
const languagesList = [
    {
        label: "English",
        value: languages.english
    },
    {
        label: "العربية",
        value: languages.arabic
    }
];

;// CONCATENATED MODULE: ./src/content/en.json
const en_namespaceObject = {"lang":"en"};
;// CONCATENATED MODULE: ./src/content/ar.json
const ar_namespaceObject = {"lang":"ar"};
;// CONCATENATED MODULE: ./src/contexts/LanguageContext.tsx





const initialValues = {
    language: languages.english,
    setLanguage: ()=>{},
    content: ar_namespaceObject
};
const LanguageContext = /*#__PURE__*/ (0,external_react_.createContext)(initialValues);
const LanguageProvider = ({ children  })=>{
    const [language, setLanguage] = (0,external_react_.useState)(languages.english);
    const [content, setContent] = (0,external_react_.useState)(ar_namespaceObject);
    const handleSetLanguage = (lang)=>{
        setLanguage(lang);
        if (lang === languages.arabic) {
            setContent(en_namespaceObject);
        } else {
            setContent(ar_namespaceObject);
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(LanguageContext.Provider, {
        value: {
            language,
            setLanguage: handleSetLanguage,
            content
        },
        children: children
    });
};
const useLanguage = ()=>{
    const context = (0,external_react_.useContext)(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};


/***/ }),

/***/ 8074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ ScrollContext),
/* harmony export */   "I": () => (/* binding */ ScrollProvider)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ScrollContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);
const ScrollProvider = ({ children  })=>{
    const [activeSection, setActiveSection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("home");
    const handleSetActiveSection = (section)=>{
        setActiveSection(section);
    };
    const handleScroll = ()=>{
        const sections = document.querySelectorAll("section");
        const snapElement = document.querySelector(".snap");
        let activeSection = "home";
        if (snapElement) {
            const snapRect = snapElement.getBoundingClientRect();
            const snapTop = snapRect.top;
            const scrollOffset = 1; // Adjust this value to control the scroll distance
            sections.forEach((section)=>{
                const sectionRect = section.getBoundingClientRect();
                const sectionTop = sectionRect.top - snapTop;
                const sectionBottom = sectionTop + section.offsetHeight;
                if (snapTop >= sectionTop && snapTop < sectionBottom) {
                    // Scroll to the current section
                    section.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                    activeSection = section.id;
                }
            });
        }
        setActiveSection(activeSection);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setTimeout(()=>{
            const span = document.querySelector(".snap");
            if (span) {
                span.addEventListener("scroll", handleScroll, {
                    passive: true
                });
                return ()=>{
                    span.removeEventListener("scroll", handleScroll);
                };
            }
        }, 1100);
    }, []);
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ScrollContext.Provider, {
        value: {
            activeSection,
            setActiveSection: handleSetActiveSection
        },
        children: children
    });
};


/***/ }),

/***/ 5514:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OA": () => (/* binding */ BreakPoints),
/* harmony export */   "f6": () => (/* binding */ ThemeProvider)
/* harmony export */ });
/* unused harmony export theme */
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7764);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4960);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4615);
/* harmony import */ var stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3195);
/* harmony import */ var stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1913);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_emotion_cache__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hooks_useRTL__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3229);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([stylis__WEBPACK_IMPORTED_MODULE_4__]);
stylis__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.createTheme)({
    palette: {
        mode: "dark",
        primary: {
            main: _styles_colors__WEBPACK_IMPORTED_MODULE_1__/* .colors.primary */ .O.primary
        },
        secondary: {
            main: _styles_colors__WEBPACK_IMPORTED_MODULE_1__/* .colors.secondary */ .O.secondary
        },
        background: {
            default: _styles_colors__WEBPACK_IMPORTED_MODULE_1__/* .colors.background */ .O.background
        }
    }
});
class BreakPoints {
    static{
        this.sm = 576;
    }
    static{
        this.md = 768;
    }
    static{
        this.lg = 992;
    }
    static{
        this.xl = 1200;
    }
    static{
        this.xxl = 1400;
    }
}
const ThemeProvider = ({ children  })=>{
    const { isRTL  } = (0,_hooks_useRTL__WEBPACK_IMPORTED_MODULE_7__/* .useRTL */ .S)();
    const cacheLTR = _emotion_cache__WEBPACK_IMPORTED_MODULE_6___default()({
        key: "rtl",
        prepend: true
    });
    // Create rtl cache
    const cacheRTL = _emotion_cache__WEBPACK_IMPORTED_MODULE_6___default()({
        key: "ltr",
        stylisPlugins: [
            stylis__WEBPACK_IMPORTED_MODULE_4__.prefixer,
            (stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_5___default())
        ],
        prepend: true
    });
    if (!isRTL) return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {
        theme: {
            ...theme,
            direction: "ltr"
        },
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default()), {}),
            children
        ]
    });
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {
        theme: {
            ...theme,
            direction: "rtl"
        },
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default()), {}),
            children
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3229:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ useRTL)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(650);


const useRTL = ()=>{
    const { language  } = (0,_contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_1__/* .useLanguage */ .ZK)();
    const changeRTL = ()=>{
        // return language === languages.arabic;
        return true;
    };
    const [isRTL, setIsRTL] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(changeRTL());
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        setIsRTL(changeRTL());
    }, [
        language
    ]);
    return {
        isRTL
    };
};


/***/ }),

/***/ 7764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ colors)
/* harmony export */ });
const colors = {
    primary: "#A31C9E",
    secondary: "#00CCFA",
    background: "rgb(33, 18, 89)"
};


/***/ })

};
;