import Inline from './components/inline/Inline'
import StyleSheet from './components/stylesheet/StyleSheet'


import './styles.css'// in here we can use it directly
import styles from './styles.module.css' // it is another way of importing stuff whn we import like this we are importing the files as an object and we are accessing it with curly braces like in h2 


import ModuleBtn from './components/moduleCss/moduleBtn'

import Sassy from './components/sassy/Sassy'

const App = () => {
    return (
        <div>
            <h1> Styling in React </h1>
            {/* <Inline /> */}
            {/* <StyleSheet isPrimary= {true} /> */}

            {/* <h1 className='error'>Ooops! Something went wrong</h1> {/*there is a probelm here i cannot get the red color  */}
            {/* <h2 className={styles.success}> 200 OK Success</h2> */}

            {/* <ModuleBtn btnClass="primary" btnName="Module"/>
            <ModuleBtn btnClass="secondary" btnName="Css"/> */}

            <Sassy />

        </div>
    );
};

export default App;
