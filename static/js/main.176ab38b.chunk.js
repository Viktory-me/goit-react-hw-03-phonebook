(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{29:function(e,n,t){},35:function(e,n,t){},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a,c,r=t(1),i=t.n(r),o=t(16),s=t.n(o),b=t(21),l=t(17),u=t(18),d=t(23),j=t(22),m=t(39),h=(t(29),t(4)),p=t(5),x=p.a.section(a||(a=Object(h.a)(["\n  background-color: #44424232;\n  margin-top: 20px;\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 10px;\n  padding-bottom: 15px;\n  &:not(:first-of-type) {\n    margin-bottom: 20px;\n  }\n"]))),f=t(2),O=function(e){var n=e.children;return Object(f.jsx)(x,{children:n})},g=p.a.div(c||(c=Object(h.a)(["\n  max-width: 320px;\n  border: thick double #c21111e2;\n  border-radius: 20px;\n  background-color: #ffffffba;\n  margin: 0 auto;\n"]))),v=g,C=t(9),y=t(8),k=t(13);t(35);var w,F,S,E,A,V,D,J=function(e){var n=e.onSubmit;return Object(f.jsx)(C.d,{initialValues:{name:"",number:""},validate:function(e){var n={};return e.name?e.number?/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i.test(e.number)||(n.number="The number can only include numbers, spaces, dashes, brackets and start with +"):n.number="Enter number":n.name="Enter name",n},onSubmit:function(e,t){var a=t.setSubmitting,c=t.resetForm;n(e),a(!1),c()},children:Object(f.jsxs)(C.c,{autoComplete:"off",children:[Object(f.jsxs)("label",{htmlFor:"name",children:[Object(f.jsx)(y.a,{color:"#c21111e2"})," Name"]}),Object(f.jsx)(C.b,{type:"name",name:"name",placeholder:"enter name"}),Object(f.jsx)(C.a,{name:"name"}),Object(f.jsxs)("label",{htmlFor:"number",children:[Object(f.jsx)(k.a,{color:"#c21111e2"}),"Number"]}),Object(f.jsx)(C.b,{type:"tel",name:"number",placeholder:"+111-111-11"}),Object(f.jsx)(C.a,{name:"number"}),Object(f.jsx)("button",{type:"submit",children:"Add contact"})]})})},L=p.a.div(w||(w=Object(h.a)([""]))),N=p.a.input(F||(F=Object(h.a)([""]))),B=p.a.p(S||(S=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  margin: 0 auto;\n  margin-bottom: 5px;\n  font-weight: 500;\n"])));function H(e){var n=e.value,t=e.onChangeFilter;return Object(f.jsxs)(L,{children:[Object(f.jsxs)(B,{children:[Object(f.jsx)(y.c,{color:"#c21111e2"}),"Find contacts by name"]}),Object(f.jsx)(N,{type:"text",value:n,onChange:function(e){return t(e.target.value)},placeholder:"enter name"})]})}var I=p.a.ul(E||(E=Object(h.a)(["\n  list-style: none;\n  padding-inline-start: 5px;\n  margin: 0 auto;\n  margin-top: 5px;\n"]))),K=p.a.li(A||(A=Object(h.a)(["\n  padding: 5px 0 5px 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n"]))),M=p.a.p(V||(V=Object(h.a)(["\n  margin-left: 1px;\n  margin-right: 10px;\n  margin-top: 0;\n  margin-bottom: 0;\n"]))),P=p.a.button(D||(D=Object(h.a)([""])));function R(e){e.title;var n=e.contacts,t=e.onDeleteContact;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(I,{title:"Contacts",children:n.map((function(e){return Object(f.jsxs)(K,{children:[Object(f.jsx)(y.a,{color:"#c21111e2"}),Object(f.jsx)(M,{children:e.name})," ",Object(f.jsx)(k.a,{color:"#c21111e2"})," ",Object(f.jsx)(M,{children:e.number}),Object(f.jsx)(P,{onClick:function(){return t(e.id)},children:Object(f.jsx)(y.b,{})})]},e.id)}))})})}var T=function(e){Object(d.a)(t,e);var n=Object(j.a)(t);function t(){var e;Object(l.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=n.call.apply(n,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:"",name:"",number:""},e.addContact=function(n){var t=n.name,a=n.number;if(e.state.contacts.find((function(e){return e.name===t})))alert("".concat(t," is already in contacts."));else{var c={id:Object(m.a)(),name:t,number:a};e.setState((function(e){var n=e.contacts;return{contacts:[c].concat(Object(b.a)(n))}}))}},e.changeFilter=function(n){e.setState({filter:n})},e.getVisibleContacts=function(){var n=e.state,t=n.contacts,a=n.filter;return t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}))},e.deleteContact=function(n){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==n}))}}))},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this.getVisibleContacts(),n=this.state.filter;return Object(f.jsxs)(v,{children:[Object(f.jsxs)(O,{children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(J,{onSubmit:this.addContact})]}),Object(f.jsxs)(O,{children:[Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(H,{value:n,onChangeFilter:this.changeFilter}),Object(f.jsx)(R,{contacts:e,onDeleteContact:this.deleteContact})]})]})}}]),t}(r.Component);t(36);s.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(T,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.176ab38b.chunk.js.map