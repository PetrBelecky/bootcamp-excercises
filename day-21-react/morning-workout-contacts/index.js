
document.addEventListener('DOMContentLoaded', () => {

  const container = document.querySelector('.contacts');

  const contact_1 = new Contact('Patsy Gillan', 'female', '334-343-2987')
    .mount(container);

  const contact_2 = new Contact('Charles Pine', 'male', '123-576-4918')
    .mount(container);

  const contact_3 = new Contact('Henry Black', 'male', '872-987-0173')
    .mount(container);

  const contact_4 = new Contact('Lucy Johnson', 'female', '653-861-0015')
    .mount(container);

  const contact_5 = new Contact('Anne Flemming', 'female', '234-501-2341')
    .mount(container);



})