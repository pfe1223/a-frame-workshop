function drop(x, y, z) {
  let element = document.createElement('a-entity');
  element.setAttribute('geometry', `primitive: sphere; radius: 0.25;`);
  element.setAttribute('material', `color: #4DFFFFFF; metalness: 0; roughness: 0`);
  element.setAttribute('position', `${x} ${y} ${z}`);
  containerElement.appendChild(element);
}