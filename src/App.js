import React, { Component } from 'react';
import './App.css';

class App extends Component {
state = {
person: {
    fullName: 'Mohamed Ayari',
    bio: 'Born in 1990 ..... ect',
    imgSrc: 'https://w0.peakpx.com/wallpaper/676/69/HD-wallpaper-logo-taraji-africa-caf-club-curva-sud-esperance-de-tunis-tunisia-tunisie.jpg',
    profession: 'Software Developer'
},
show: false,
mountTime: new Date(),
newTime: new Date(),
timefinal: new Date(),
}
toggleShow = () => {
this.setState(prevState => ({ show: !prevState.show }));
}
componentDidMount() {
this.interval = setInterval(() => {
this.setState({mountTime: new Date() });
this.setState({ timefinal: new Date((this.state.mountTime) - (this.state.newTime))});
}, 1000);
}
componentWillUnmount() {
clearInterval(this.interval);
}

render() {
const { person, show, timefinal } = this.state; // JavaScript
let profileContent = null; // JavaScript

// Conditional rendering using JSX
if (show) {
    profileContent = (
    <div>
        <h1 style={{ fontSize: '2rem', marginBottom: '10px' }}>{person.fullName}</h1>
        <img src={person.imgSrc} alt={person.fullName} style={{ marginTop: '10px', marginBottom: '10px', maxWidth: '150px', borderRadius: '99%' }} />
        <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{person.bio}</p>
        <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{person.profession}</p>
    </div>
    );
}

// JSX code for rendering the user interface
return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
    <button onClick={this.toggleShow} style={{ marginBottom: '20px', fontSize: '1.2rem', backgroundColor: '#4CAF50', border: 'none', color: 'white', padding: '10px 20px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', borderRadius: '5px' }}>
        Toggle Profile
    </button>
    {profileContent}
    <p style={{ fontSize: '1.2rem' }}>Component mounted since : {timefinal.valueOf()/1000} Second</p>
    </div>
);
}


}

export default App;
