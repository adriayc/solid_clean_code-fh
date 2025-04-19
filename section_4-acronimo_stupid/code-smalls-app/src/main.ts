import './style.css';
// import './code-smells/02-high-coupling';
import './code-smells/02-low-coupling';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Clean Code y SOLID</h1>
    <span>Revisar la consola de JavaScript</span>
  </div>
`;
