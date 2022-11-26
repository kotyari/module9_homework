const xmlString = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`

const parser = new DOMParser();
const xmlDOM = parser.parseFromString(xmlString, "text/xml")

const listNode = xmlDOM.querySelector ("list");
const studentOneNode = listNode.querySelector ("student");
const studentTwoNode = listNode.querySelectorAll ("student")[1];

const nameOneNode = studentOneNode.querySelector ("name");
const nameTwoNode = studentTwoNode.querySelector ("name");

const firstNameOneNode = nameOneNode.querySelector ("first");
const firstNameTwoNode = nameTwoNode.querySelector ("first");

const secondNameOneNode = nameOneNode.querySelector ("second");
const secondNameTwoNode = nameTwoNode.querySelector ("second");

const ageOneNode = studentOneNode.querySelector ("age");
const ageTwoNode = studentTwoNode.querySelector ("age");

const profOneNode = studentOneNode.querySelector ("prof");
const profTwoNode = studentTwoNode.querySelector ("prof");


const langOneAttr = nameOneNode.getAttribute("lang");
const langTwoAttr = nameTwoNode.getAttribute("lang");


const result = {
  list: [ {
    name: firstNameOneNode.textContent + ' ' + secondNameOneNode.textContent,
    lang: langOneAttr,
    age: ageOneNode.textContent,
    prof: profOneNode.textContent
  },
  {
  name: firstNameTwoNode.textContent + ' ' + secondNameTwoNode.textContent,
    lang: langTwoAttr,
    age: ageTwoNode.textContent,
    prof: profTwoNode.textContent
} ]

  
  
}

console.log('result', result)