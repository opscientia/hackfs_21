// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Transmit",
      "url": "\u002Fsave",
      "encoding": "form",
      "updates": {
        "incremental": false
      },
      "callbacks": {
        "setup": function(){this.headers["X-CSRFToken"]=window.csrf_token},
        "full": function(e){e&&e.ok&&(window.location="/next")}
      },
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Screen",
      "files": {},
      "parameters": {},
      "responses": {
        "": ""
      },
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
let done = false // is it the last screen?

const setVisibility = (selector, isVisible) => {
  // Extract the content from the current element
  const target = this.options.el.querySelector(selector)

  target.style.visibility = isVisible ? 'visible' : 'hidden'
}

const moveForth = (selector) => {
  const target = this.options.el.querySelector(selector)
  if(target.nextElementSibling){
    target.classList.add("hidden"); // hide current screen
    target.nextElementSibling.classList.remove("hidden"); //show next screen
    
    setVisibility('#bck', true) // make sure that 'back' button is visible

    if(!target.nextElementSibling.nextElementSibling){ // if the end is reached
      setVisibility('#fwd', false) // hide the forward button
      setVisibility('#done', true) // show the end button
      done = true
    }
  }
}

const moveBack = (selector) => {
  target = this.options.el.querySelector(selector);
  if(target.previousElementSibling){ //.innerHTML !== undefined
    target.classList.add("hidden");  // hide current screen
    target.previousElementSibling.classList.remove("hidden"); // show previous screen

    setVisibility('#fwd', true) // make sure that 'forward' button is visible
    setVisibility('#done', false) // hide the 'done' button
    done = false

    if(!target.previousElementSibling.previousElementSibling){ // if the beginning is reached
      setVisibility('#bck', false) // hide the back button
    }
  } 
}

this.options.events['keydown(ArrowRight)'] = function(){
  moveForth("section[id^='page']:not(.hidden)")
  moveForth("h2[id^='head']:not(.hidden)")
}

this.options.events['keydown(ArrowLeft)'] = function(){
  moveBack("section[id^='page']:not(.hidden)")
  moveBack("h2[id^='head']:not(.hidden)")
}

this.options.events['keypress(Space)'] = function() {
    if(done)
      // End instructions
      this.end('done')
}
}
      },
      "title": "Instructions",
      "content": "\r\n\u003Cheader\u003E\r\n  \u003Ch1 id=\"banner\"\u003EOpen Science Passport\u003C\u002Fh1\u003E\r\n  \u003Ch2 id=\"subtitle\"\u003EThe First Quest\u003C\u002Fh2\u003E\r\n  \u003Ch3 id=\"head1\"\u003EThe Mission\u003C\u002Fh3\u003E\r\n  \u003Ch3 id=\"head2\" class=\"hidden\"\u003EPrivacy & Confidentiality\u003C\u002Fh3\u003E\r\n  \u003Ch3 id=\"head3\" class=\"hidden\"\u003EConsent\u003C\u002Fh3\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Csection id=\"page1\" class=\"w-l text-justify\"\u003E\r\n    \u003Cp\u003EYou made it, Nice! 🙌 You are well on your journey to personal data self-sovereignty ✊ This first quest will prompt you with the sort of basic questions you typically have to fill in whenever you complete any sort of civics form, account creation, or research project.\u003C\u002Fp\u003E\r\n  \u003C\u002Fsection\u003E\r\n  \u003Csection id=\"page2\" class=\"w-l text-justify hidden\"\u003E\r\n    \u003Cp\u003EAll of your data is encrypted and stored locally until you choose to share it! Only the accounts that you choose to share your data with will have access to your data.\u003C\u002Fp\u003E \r\n    \u003Cp\u003EOnce you make your self available for heroes quests, your data will be anonymized and used to match you with quests that you are eligible to complete.\u003C\u002Fp\u003E\r\n    \u003Cp\u003EYou can quit this quest at any time and delete any data you've provided.\u003C\u002Fp\u003E\r\n  \u003C\u002Fsection\u003E\r\n  \u003Csection id=\"page3\" class=\"w-l text-justify hidden\"\u003E\r\n    \u003Cp\u003EContinue if you consent to complete your first quest!\u003C\u002Fp\u003E\r\n  \u003C\u002Fsection\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  \u003Ctable class=\"table-plain\"\u003E\r\n    \u003Ctr\u003E\r\n      \u003Ctd id=\"bck\" style=\"visibility: hidden\"\u003E\r\n        press the left arrow \u003Ckbd\u003E&larr;\u003C\u002Fkbd\u003E for the previous screen \r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd id=\"done\" style=\"visibility: hidden\"\u003E\r\n        press the \u003Ckbd\u003Espace bar\u003C\u002Fkbd\u003E to continue \r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd id=\"fwd\"\u003E\r\n        press the right arrow \u003Ckbd\u003E&rarr;\u003C\u002Fkbd\u003E for the next screen \r\n      \u003C\u002Ftd\u003E\r\n    \u003C\u002Ftr\u003E\r\n  \u003C\u002Ftable\u003E\r\n\u003C\u002Ffooter\u003E"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv class=\"w-l text-left\" style=\"display: block\"\u003E\n    \n    \u003Ch2 class=\"text-center\"\u003EPlease tell us about yourself\u003C\u002Fh2\u003E\n    \u003Cp class=\"text-center\"\u003EBefore the study can start, we would like to learn a bit more about you. \u003C\u002Fp\u003E\n    \n    \u003Cform id=\"demography\"\u003E\n      \u003Ctable\u003E\n        \u003C!-- Age --\u003E\n        \u003Ctr style=\"height: 50px\"\u003E\n          \u003Ctd class=\"font-weight-bold\"\u003E\n            How old are you, in years?\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cinput name=\"age\" type=\"number\" required class=\"w-100\"\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n        \n        \u003C!-- Gender identity, following Tate et al. (2013) --\u003E\n        \u003C!-- \u003Ctr style=\"height: 100px\"\u003E\n          \u003Ctd class=\"font-weight-bold\"\u003E\n            What is your current gender identity?\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cselect name=\"gender\" required class=\"w-100\"\u003E\n              \u003Coption value=\"\" selected\u003E\n                -- Please click to select --\n              \u003C\u002Foption\u003E\n              \u003Coption value=\"female\"\u003EFemale\u003C\u002Foption\u003E\n              \u003Coption value=\"male\"\u003EMale\u003C\u002Foption\u003E\n              \u003Coption value=\"transgender\"\u003ETransgender\u003C\u002Foption\u003E\n              \u003Coption value=\"intersex\"\u003EIntersex\u003C\u002Foption\u003E\n            \u003C\u002Fselect\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n         --\u003E\n        \u003C!-- Birth-assigned gender category, following Tate et al.\n        --\u003E\n          \u003Ctr style=\"height: 100px\"\u003E\n            \u003Ctd\u003E\n              Which gender were you assigned at birth?\n            \u003C\u002Ftd\u003E\n            \u003Ctd\u003E\n              \u003Cselect style=\"width: 200px\" name=\"gender-birth\"\u003E\n                \u003Coption value=\"\" selected\u003E\n                  -- Please click to select --\n                \u003C\u002Foption\u003E\n                \u003Coption value=\"female\"\u003EFemale\u003C\u002Foption\u003E\n                \u003Coption value=\"male\"\u003EMale\u003C\u002Foption\u003E\n                \u003Coption value=\"intersex\"\u003EIntersex\u003C\u002Foption\u003E\n              \u003C\u002Fselect\u003E\n            \u003C\u002Ftd\u003E\n          \u003C\u002Ftr\u003E\n\n\n        \u003C!-- Education\n                --\u003E\n        \u003Ctr style=\"height: 100px\"\u003E\n          \u003Ctd\u003E\n            Please specify your highest degree:\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cselect name=\"education\" class=\"w-100\"\u003E\n              \u003Coption value=\"\" selected\u003E\n                -- Please click to select --\n              \u003C\u002Foption\u003E\n              \u003Coption value=\"no\"\u003Eno degree\u003C\u002Foption\u003E\n              \u003Coption value=\"highschool\"\u003EHigh school diploma\u003C\u002Foption\u003E\n              \u003Coption value=\"bachelor\"\u003EBachelor's\u003C\u002Foption\u003E\n              \u003Coption value=\"master\"\u003EMaster's\u003C\u002Foption\u003E\n              \u003Coption value=\"phd\"\u003EPhD\u003C\u002Foption\u003E\n            \u003C\u002Fselect\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n\n\n        \u003C!-- Occupation\n        --\u003E\n        \u003Ctr style=\"height: 100px\"\u003E\n          \u003Ctd\u003E\n            What is your occupation, or if you still study, your field?\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cinput name=\"occupation\" class=\"w-100\"\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n        \n\n        \u003C!-- Column balance --\u003E\n        \u003Ccolgroup\u003E\n          \u003Ccol style=\"width: 45%\"\u003E\n          \u003Ccol style=\"width: 65%\"\u003E\n        \u003C\u002Fcolgroup\u003E\n      \u003C\u002Ftable\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class=\"content-vertical-center content-horizontal-right\"\u003E\n  \u003Cbutton type=\"submit\" form=\"demography\"\u003EContinue &rarr;\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E",
      "parameters": {},
      "responses": {
        "": ""
      },
      "messageHandlers": {},
      "title": "Demography form",
      "files": {}
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 240.11,
          "height": 36.16,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Quest Complete!",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Screen"
    }
  ]
})

// Let's go!
study.run()