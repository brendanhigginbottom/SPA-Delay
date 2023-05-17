


function MainView() {

    //Creating WebAudio AudioContext
    let WAContext = window.AudioContext || window.webkitAudioContext;
    let context = new WAContext();

    const resumeAudioContext = () => {
        context.resume();
        console.log('resuming audio context');
    }


    return (
        <>
            <h1>Main View!</h1>
            <button onClick={resumeAudioContext}>Test Button</button>
        </>
    );
}

export default MainView;