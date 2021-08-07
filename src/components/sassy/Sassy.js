import '../../sass/style.scss'

const Sassy = () => {
  
   return (
     <div className="container">
       <h1>Sassy in React</h1>
       <p>Sass (Syntacrucally Awesome Style Sheets) is a CSS extestion that gives you more pwerful CSS</p>
       <div className="button-container"></div>
        <button className="button button-container--small">Small</button>
        <button className="button button-container--large">Large</button>
     </div>
   )
}


export default Sassy