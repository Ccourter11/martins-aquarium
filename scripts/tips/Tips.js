export const Tips = (tips) => {
  return `
        <aside class="contentContainer__containerRight-tipCard">
        <p><b>Tips</b></p>
        <ul>
        <li>${tips.bait}</li>
        
        <li>${tips.time}</li>
        </ul>
  </aside>

    `;
};
