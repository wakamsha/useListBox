(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(ClientApi.d)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.e)(loader,!1)}));case"parameters":return Object(ClientApi.f)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.b)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"render":return Object(ClientApi.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.f)(v,!1);case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./index.stories.tsx":"./src/index.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports,__webpack_require__){var map={"./index.stories.mdx":"./src/index.stories.mdx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./src/index.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"basic",(function(){return basic}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),_index_stories__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/index.stories.tsx"),_excluded=["components"];function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.c,{title:"useListBox",mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h1",{id:"uselistbox"},"useListBox"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("p",null,"A simple React Hook that Provides the behavior and accessibility implementation for a listbox component."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("code",{parentName:"pre",className:"language-tsx"},"import { useListBox } from '@wakamsha/use-listbox';\n\nexport const App = () => {\n  const menuItems = ['foo', 'bar', 'baz'];\n\n  const { itemProps, active, triggerProps } = useListBox(menuItems.length);\n\n  return (\n    <section aria-expanded={active}>\n      <button {...triggerProps}>Open</button>\n      <ul role=\"menu\" aria-hidden={!active}>\n        {menuItems.map((item, index) => (\n          <li key={item}>\n            <button {...itemProps[index]} onClick={alert}>\n              {item}\n            </button>\n          </li>\n        ))}\n      </ul>\n    </section>\n  );\n};\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h3",{id:"demo"},"Demo"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.b,{mdxType:"Canvas"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.d,{name:"Basic",mdxType:"Story"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(_index_stories__WEBPACK_IMPORTED_MODULE_7__.Basic,{mdxType:"Basic"}))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h2",{id:"api"},"API"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("code",{parentName:"pre",className:"language-tsx"},"useListBox(itemCount: number): Readonly<{\n    triggerProps: {\n        ref: React.RefObject<HTMLButtonElement>;\n        onKeyDown: React.KeyboardEventHandler<HTMLButtonElement>;\n        onClick: React.MouseEventHandler<HTMLButtonElement>;\n        tabIndex: 0;\n        role: 'button';\n        'aria-haspopup': true;\n        'aria-expanded': boolean;\n    };\n    itemProps: {\n        onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => void;\n        tabIndex: -1;\n        role: \"menuitem\";\n        ref: React.RefObject<any>;\n    }[];\n    active: boolean;\n    setActive: React.Dispatch<React.SetStateAction<boolean>>;\n}>\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h3",{id:"props"},"Props"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("table",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("thead",{parentName:"table"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("tr",{parentName:"thead"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("th",{parentName:"tr",align:"left"},"NAME"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("th",{parentName:"tr",align:"left"},"TYPE"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("th",{parentName:"tr",align:"left"},"DESCRIPTION"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("tbody",{parentName:"table"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("tr",{parentName:"tbody"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:"left"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"td"},"itemCount")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:"left"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"td"},"number")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:"left"},"How many items your menu will have.")))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h3",{id:"return-object"},"Return Object"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("table",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("thead",{parentName:"table"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("tr",{parentName:"thead"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("th",{parentName:"tr",align:"left"},"NAME"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("th",{parentName:"tr",align:"left"},"TYPE"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("th",{parentName:"tr",align:"left"},"DESCRIPTION"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("tbody",{parentName:"table"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("tr",{parentName:"tbody"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:"left"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"td"},"triggerProps")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:"left"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"td"},"TriggerProps")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:"left"},"An object used as a property of an HTML element that controls the activation and deactivation of ListBox.")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("tr",{parentName:"tbody"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:"left"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"td"},"itemProps")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:"left"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"td"},"Array<ItemProps>")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:"left"},"An array of objects used as properties of HTML elements that function as menu items in ListBox.")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("tr",{parentName:"tbody"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:"left"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"td"},"active")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:"left"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"td"},"boolean")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:"left"},"A Boolean value indicating whether or not ListBox is active. The application developer uses this value to set whether or not to display the menu.")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("tr",{parentName:"tbody"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:"left"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"td"},"setActive")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:"left"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"td"},"React.Dispatch<React.SetStateAction<boolean>>")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:"left"},"It is used by application developers to control the activation and deactivation of menus in their programs.")))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h4",{id:"triggerprops"},"TriggerProps"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("table",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("thead",{parentName:"table"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("tr",{parentName:"thead"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("th",{parentName:"tr",align:"left"},"NAME"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("th",{parentName:"tr",align:"left"},"TYPE"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("th",{parentName:"tr",align:"left"},"DESCRIPTION"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("tbody",{parentName:"table"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("tr",{parentName:"tbody"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:"left"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"td"},"ref")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:"left"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"td"},"React.RefObject<HTMLButtonElement>")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:"left"},"A React ref applied to the ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"td"},"<button />")," element, used to manage focus.")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("tr",{parentName:"tbody"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:"left"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"td"},"onKeyDown")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:"left"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"td"},"React.RefObject<HTMLButtonElement>")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:"left"},"A function which manages the behavior of your ListBox when a key is pressed while focused on the menu button.")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("tr",{parentName:"tbody"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:"left"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"td"},"onClick")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:"left"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"td"},"React.MouseEventHandler<HTMLButtonElement>")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:"left"},"The same function as ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"td"},"onKeyDown()"),", but its behavior differs somewhat for click events.")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("tr",{parentName:"tbody"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:"left"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"td"},"tabIndex")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:"left"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"td"},"0")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:"left"},"Sets the tab index property of the ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"td"},"<button />")," element.")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("tr",{parentName:"tbody"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:"left"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"td"},"role")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:"left"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"td"},"button")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:"left"},"Set ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"td"},"button")," to comply with WAI-ARIA guidelines.")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("tr",{parentName:"tbody"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:"left"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"td"},"aria-haspopup")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:"left"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"td"},"true")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:"left"},"An ARIA attribute indicating this button has a related menu element.")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("tr",{parentName:"tbody"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:"left"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"td"},"aria-expanded")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:"left"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"td"},"boolean")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:"left"},"An ARIA attribute indicating whether the menu is currently open.")))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h4",{id:"itemprops"},"ItemProps"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("table",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("thead",{parentName:"table"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("tr",{parentName:"thead"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("th",{parentName:"tr",align:"left"},"NAME"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("th",{parentName:"tr",align:"left"},"TYPE"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("th",{parentName:"tr",align:"left"},"DESCRIPTION"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("tbody",{parentName:"table"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("tr",{parentName:"tbody"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:"left"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"td"},"onKeyDown")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:"left"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"td"},"(e: React.KeyboardEvent<HTMLElement>) => void")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:"left"},"This function controls the behavior of the list box menu when a key is pressed while the menu item is focused.")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("tr",{parentName:"tbody"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:"left"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"td"},"tabIndex")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:"left"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"td"},"-1")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:"left"},"Set to ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"td"},"-1")," to disable the browser's native focus logic.")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("tr",{parentName:"tbody"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:"left"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"td"},"role")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:"left"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"td"},"menuitem")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:"left"},"Set ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"td"},"menuitem")," to comply with WAI-ARIA guidelines.")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("tr",{parentName:"tbody"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:"left"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"td"},"ref")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:"left"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"td"},"React.RefObject<any>")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:"left"},"RefObject to be applied to each menu item, used to control the focus handling.")))))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var basic=function basic(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(_index_stories__WEBPACK_IMPORTED_MODULE_7__.Basic,null)};basic.displayName="basic",basic.storyName="Basic",basic.parameters={storySource:{source:"<Basic />"}};var componentMeta={title:"useListBox",includeStories:["basic"]},mdxStoryNameToKey={Basic:"basic"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(MDXContent,null))}}),__webpack_exports__.default=componentMeta},"./src/index.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Basic",(function(){return index_stories_Basic}));__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js");var emotion_css_esm=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js"),react=__webpack_require__("./node_modules/react/index.js");__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.string.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.object.values.js"),__webpack_require__("./node_modules/core-js/modules/es.array.find-index.js"),__webpack_require__("./node_modules/core-js/modules/es.string.starts-with.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||_unsupportedIterableToArray(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,KeyMaps={Tab:"Tab",Shift:"Shift",Enter:"Enter",Escape:"Escape",ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",Space:" "},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}function index_stories_slicedToArray(arr,i){return function index_stories_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function index_stories_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function index_stories_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return index_stories_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return index_stories_arrayLikeToArray(o,minLen)}(arr,i)||function index_stories_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function index_stories_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var index_stories_Basic=function Basic(){var menuItems=["One","Two","Three","foo","bar","baz","hello","world"],_useListBox=function useListBox(itemCount){var _useState2=_slicedToArray(Object(react.useState)(!1),2),active=_useState2[0],setActive=_useState2[1],_useState4=_slicedToArray(Object(react.useState)(0),2),focusIndex=_useState4[0],setFocusIndex=_useState4[1],triggerRef=Object(react.useRef)(null),itemRefs=Object(react.useMemo)((function(){return _toConsumableArray(Array(itemCount).keys()).map((function(){return Object(react.createRef)()}))}),[itemCount]),moveFocus=Object(react.useCallback)((function(itemIndex){var _itemRefs$itemIndex$c;setFocusIndex(itemIndex),null===(_itemRefs$itemIndex$c=itemRefs[itemIndex].current)||void 0===_itemRefs$itemIndex$c||_itemRefs$itemIndex$c.focus()}),[itemRefs]),handleTrigger=Object(react.useCallback)((function(e){if(function isKeyboardEvent(e){return!!e.key}(e)){if(![KeyMaps.ArrowDown,KeyMaps.Escape,KeyMaps.Enter,KeyMaps.Space,KeyMaps.Tab].includes(e.key))return;return[KeyMaps.ArrowDown,KeyMaps.Tab].includes(e.key)&&active&&(e.preventDefault(),moveFocus(0)),[KeyMaps.Enter,KeyMaps.Space].includes(e.key)&&(e.preventDefault(),setActive(!0)),void(e.key===KeyMaps.Escape&&(e.preventDefault(),setActive(!1)))}setActive((function(active){return!active}))}),[active,moveFocus]),handleItemKeyDown=Object(react.useCallback)((function(e){var _triggerRef$current;if(Object.values(KeyMaps).includes(e.key)){switch(e.key){case KeyMaps.Escape:setActive(!1),null===(_triggerRef$current=triggerRef.current)||void 0===_triggerRef$current||_triggerRef$current.focus();break;case KeyMaps.Tab:setActive(!1);break;case KeyMaps.Enter:["BUTTON","INPUT","A"].includes(e.currentTarget.nodeName)||e.currentTarget.click(),setActive(!1);break;case KeyMaps.Space:e.currentTarget.click(),setActive(!1)}var newFocusIndex=function(){switch(e.key){case KeyMaps.ArrowUp:return focusIndex+(focusIndex>0?-1:itemRefs.length-1);case KeyMaps.ArrowDown:return focusIndex+(focusIndex<itemRefs.length-1?1:-1*(itemRefs.length-1));default:return focusIndex}}();moveFocus(newFocusIndex)}else if(/[a-zA-Z0-9./<>?;:"'`!@#$%^&*()\\[\]{}_+=|\\-~,]/.test(e.key)){var index=itemRefs.findIndex((function(ref){var _ref$current,_ref$current2,_ref$current2$textCon,_ref$current3,_ref$current3$getAttr,key=e.key.toLowerCase();return(null===(_ref$current=ref.current)||void 0===_ref$current?void 0:_ref$current.innerText.toLowerCase().startsWith(key))||(null===(_ref$current2=ref.current)||void 0===_ref$current2||null===(_ref$current2$textCon=_ref$current2.textContent)||void 0===_ref$current2$textCon?void 0:_ref$current2$textCon.toLowerCase().startsWith(key))||(null===(_ref$current3=ref.current)||void 0===_ref$current3||null===(_ref$current3$getAttr=_ref$current3.getAttribute("aria-label"))||void 0===_ref$current3$getAttr?void 0:_ref$current3$getAttr.toLowerCase().startsWith(key))}));index>-1&&moveFocus(index)}}),[focusIndex,itemRefs,moveFocus]);return Object(react.useEffect)((function(){active&&moveFocus(0)}),[moveFocus,active]),Object(react.useEffect)((function(){if(active){var handleEveryClick=function handleEveryClick(e){e.target instanceof Element&&!(e.target.closest('[role="menu"]')instanceof Element)&&setActive(!1)};return document.addEventListener("click",handleEveryClick),function(){document.removeEventListener("click",handleEveryClick)}}}),[active]),Object(react.useEffect)((function(){var handleDisableArrowScroll=function handleDisableArrowScroll(e){active&&[KeyMaps.ArrowDown,KeyMaps.ArrowUp].includes(e.key)&&e.preventDefault()};return document.addEventListener("keydown",handleDisableArrowScroll),function(){document.removeEventListener("keydown",handleDisableArrowScroll)}}),[active]),{active:active,setActive:setActive,triggerProps:{onClick:handleTrigger,onKeyDown:handleTrigger,tabIndex:0,ref:triggerRef,role:"button","aria-haspopup":!0,"aria-expanded":active},itemProps:_toConsumableArray(Array(itemCount).keys()).map((function(index){return{onKeyDown:handleItemKeyDown,tabIndex:-1,role:"menuitem",ref:itemRefs[index]}}))}}(menuItems.length),itemProps=_useListBox.itemProps,active=_useListBox.active,setActive=_useListBox.setActive,triggerProps=_useListBox.triggerProps,_useState2=index_stories_slicedToArray(Object(react.useState)(""),2),value=_useState2[0],setValue=_useState2[1];return Object(jsx_runtime.jsxs)("div",{className:styleSection,"aria-expanded":active,children:[Object(jsx_runtime.jsx)("button",{className:styleTrigger,ref:triggerProps.ref,onKeyDown:triggerProps.onKeyDown,onClick:triggerProps.onClick,tabIndex:triggerProps.tabIndex,role:triggerProps.role,"aria-haspopup":triggerProps["aria-haspopup"],"aria-expanded":triggerProps["aria-expanded"],children:"Menu"}),Object(jsx_runtime.jsx)("ul",{className:styleMenu,role:"menu","aria-hidden":!active,children:menuItems.map((function(item,index){return Object(jsx_runtime.jsx)("li",{children:Object(jsx_runtime.jsx)("button",{className:styleMenuItem,onClick:function onClick(){return function handleSelect(value){setValue(value),setActive(!1)}(item)},onKeyDown:itemProps[index].onKeyDown,tabIndex:itemProps[index].tabIndex,role:itemProps[index].role,ref:itemProps[index].ref,children:item})},item)}))}),Object(jsx_runtime.jsx)("hr",{style:{marginTop:160}}),Object(jsx_runtime.jsx)("pre",{className:styleLog,children:Object(jsx_runtime.jsx)("code",{children:JSON.stringify({value:value},null,2)})})]})};index_stories_Basic.displayName="Basic";var styleSection=Object(emotion_css_esm.a)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n  position: relative;\n"]))),styleTrigger=Object(emotion_css_esm.a)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["\n  padding: 8px 16px;\n  font-size: 18px;\n  cursor: pointer;\n"]))),styleMenu=Object(emotion_css_esm.a)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["\n  position: absolute;\n  display: none;\n  width: 240px;\n  max-height: 120px;\n  padding: 8px;\n  margin: 0;\n  overflow: auto;\n  font-size: 16px;\n  background-color: white;\n  box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.2);\n\n  &[aria-hidden='false'] {\n    display: block;\n  }\n"]))),styleMenuItem=Object(emotion_css_esm.a)(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(["\n  display: block;\n  width: 100%;\n  padding: 8px;\n  text-align: left;\n  cursor: pointer;\n  background: transparent;\n  border: none;\n  appearance: none;\n\n  &:focus {\n    background-color: #e3e3e7;\n  }\n\n  &:hover {\n    background-color: #7e808c;\n  }\n"]))),styleLog=Object(emotion_css_esm.a)(_templateObject5||(_templateObject5=_taggedTemplateLiteralLoose(["\n  display: block;\n  max-width: 100%;\n  padding: 16px;\n  overflow: auto;\n  font-size: 16px;\n  background-color: #f6f6f8;\n  border: 1px solid #bfc1c9;\n"])));index_stories_Basic.parameters=Object.assign({storySource:{source:"() => {\n  const menuItems = ['One', 'Two', 'Three', 'foo', 'bar', 'baz', 'hello', 'world'];\n\n  const { itemProps, active, setActive, triggerProps } = useListBox(menuItems.length);\n\n  const [value, setValue] = useState('');\n\n  const handleSelect = (value: string) => {\n    setValue(value);\n    setActive(false);\n  };\n\n  return (\n    <div className={styleSection} aria-expanded={active}>\n      <button\n        className={styleTrigger}\n        ref={triggerProps.ref}\n        onKeyDown={triggerProps.onKeyDown}\n        onClick={triggerProps.onClick}\n        tabIndex={triggerProps.tabIndex}\n        role={triggerProps.role}\n        aria-haspopup={triggerProps['aria-haspopup']}\n        aria-expanded={triggerProps['aria-expanded']}\n      >\n        Menu\n      </button>\n      <ul className={styleMenu} role=\"menu\" aria-hidden={!active}>\n        {menuItems.map((item, index) => (\n          <li key={item}>\n            <button\n              className={styleMenuItem}\n              onClick={() => handleSelect(item)}\n              onKeyDown={itemProps[index].onKeyDown}\n              tabIndex={itemProps[index].tabIndex}\n              role={itemProps[index].role}\n              ref={itemProps[index].ref}\n            >\n              {item}\n            </button>\n          </li>\n        ))}\n      </ul>\n\n      <hr style={{ marginTop: 160 }} />\n\n      <pre className={styleLog}>\n        <code>{JSON.stringify({ value }, null, 2)}</code>\n      </pre>\n    </div>\n  );\n}"}},index_stories_Basic.parameters)},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,4,5]]]);