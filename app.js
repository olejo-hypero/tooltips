// Functions
const tooltips = attr => {
  attr.forEach(element => {
    const posX = element.dataset.tooltipPosx ? element.dataset.tooltipPosx : 'top';
    const posY = element.dataset.tooltipPosy ? element.dataset.tooltipPosy : 'left';
    element.onmouseover = e => {
      const self = e.currentTarget;
      const coords = self.getBoundingClientRect();
      const tooltip = document.createElement('div');
      const indent = 4;
      tooltip.classList.add('tooltip');
      tooltip.style.position = 'absolute';
      tooltip.innerText = self.dataset.tooltip;
      document.body.append(tooltip);
      setTimeout(() => {
        tooltip.classList.add('shw');
      }, 1);
      if (posY === 'top' && posX === 'left') {
        tooltip.style.top = `${coords.top - tooltip.offsetHeight - indent}px`;
        tooltip.style.left = `${coords.left}px`;
      } else if (posY === 'top' && posX === 'center') {
        tooltip.style.top = `${coords.top - tooltip.offsetHeight - indent}px`;
        tooltip.style.left = `${coords.left - tooltip.offsetWidth / 2 + coords.width / 2}px`;
      } else if (posY === 'top' && posX === 'right') {
        tooltip.style.top = `${coords.top - tooltip.offsetHeight - indent}px`;
        tooltip.style.left = `${coords.right - tooltip.offsetWidth}px`;
      } else if (posY === 'center' && posX === 'left') {
        tooltip.style.top = `${coords.top / 2 + coords.bottom / 2 - tooltip.offsetHeight / 2}px`;
        tooltip.style.left = `${coords.left - tooltip.offsetWidth - indent}px`;
      } else if (posY === 'center' && posX === 'right') {
        tooltip.style.top = `${coords.top / 2 + coords.bottom / 2 - tooltip.offsetHeight / 2}px`;
        tooltip.style.left = `${coords.right + indent}px`;
      } else if (posY === 'bottom' && posX === 'left') {
        tooltip.style.top = `${coords.top + tooltip.offsetHeight - indent}px`;
        tooltip.style.left = `${coords.left}px`;
      } else if (posY === 'bottom' && posX === 'center') {
        tooltip.style.top = `${coords.top + tooltip.offsetHeight - indent}px`;
        tooltip.style.left = `${coords.left - tooltip.offsetWidth / 2 + coords.width / 2}px`;
      } else if (posY === 'bottom' && posX === 'right') {
        tooltip.style.top = `${coords.top + tooltip.offsetHeight - indent}px`;
        tooltip.style.left = `${coords.right - tooltip.offsetWidth}px`;
      }
    };
    element.onmouseout = () => removeTooltipResizeWindow();
  });
  function removeTooltipResizeWindow() {
    const tooltip = document.querySelector('.tooltip');
    if (tooltip) {
      tooltip.remove();
    }
  }
  window.addEventListener('resize', removeTooltipResizeWindow);
};
tooltips(document.querySelectorAll('button'));

// Classes
// class Tooltip {
//   constructor(attr) {
//     this.attr = document.querySelectorAll(attr);
//     this.#mouseEvents();
//   }
//   removeTooltipResizeWindow() {
//     const tooltip = document.querySelector('.tooltip');
//     if (tooltip) {
//       tooltip.remove();
//     }
//   }
//   #mouseEvents() {
//     this.attr.forEach((element) => {
//       const posX = element.dataset.tooltipPosx
//         ? element.dataset.tooltipPosx
//         : 'top';
//       const posY = element.dataset.tooltipPosy
//         ? element.dataset.tooltipPosy
//         : 'left';
//       element.onmouseover = (e) => {
//         const self = e.currentTarget;
//         const coords = self.getBoundingClientRect();
//         const tooltip = document.createElement('div');
//         const indent = 4;
//         tooltip.classList.add('tooltip');
//         tooltip.style.position = 'absolute';
//         tooltip.innerText = self.dataset.tooltip;
//         document.body.append(tooltip);
//         setTimeout(() => {
//           tooltip.classList.add('shw');
//         }, 1);
//         if (posY === 'top' && posX === 'left') {
//           tooltip.style.top = `${coords.top - tooltip.offsetHeight - indent}px`;
//           tooltip.style.left = `${coords.left}px`;
//         } else if (posY === 'top' && posX === 'center') {
//           tooltip.style.top = `${coords.top - tooltip.offsetHeight - indent}px`;
//           tooltip.style.left = `${
//             coords.left - tooltip.offsetWidth / 2 + coords.width / 2
//           }px`;
//         } else if (posY === 'top' && posX === 'right') {
//           tooltip.style.top = `${coords.top - tooltip.offsetHeight - indent}px`;
//           tooltip.style.left = `${coords.right - tooltip.offsetWidth}px`;
//         } else if (posY === 'center' && posX === 'left') {
//           tooltip.style.top = `${
//             coords.top / 2 + coords.bottom / 2 - tooltip.offsetHeight / 2
//           }px`;
//           tooltip.style.left = `${
//             coords.left - tooltip.offsetWidth - indent
//           }px`;
//         } else if (posY === 'center' && posX === 'right') {
//           tooltip.style.top = `${
//             coords.top / 2 + coords.bottom / 2 - tooltip.offsetHeight / 2
//           }px`;
//           tooltip.style.left = `${coords.right + indent}px`;
//         } else if (posY === 'bottom' && posX === 'left') {
//           tooltip.style.top = `${coords.top + tooltip.offsetHeight - indent}px`;
//           tooltip.style.left = `${coords.left}px`;
//         } else if (posY === 'bottom' && posX === 'center') {
//           tooltip.style.top = `${coords.top + tooltip.offsetHeight - indent}px`;
//           tooltip.style.left = `${
//             coords.left - tooltip.offsetWidth / 2 + coords.width / 2
//           }px`;
//         } else if (posY === 'bottom' && posX === 'right') {
//           tooltip.style.top = `${coords.top + tooltip.offsetHeight - indent}px`;
//           tooltip.style.left = `${coords.right - tooltip.offsetWidth}px`;
//         }
//       };
//       element.onmouseout = () => this.removeTooltipResizeWindow();
//       window.addEventListener('resize', this.removeTooltipResizeWindow);
//     });
//   }
// }

// const tooltip = new Tooltip('button');
