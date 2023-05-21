

const makeGainContext = (context, gain) => {
    console.log(gain);
    const gainNode = context.createGain();
    gainNode.gain.value = gain;
    return gainNode;
}

export default makeGainContext;